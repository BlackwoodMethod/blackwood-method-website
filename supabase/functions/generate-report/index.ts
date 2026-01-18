import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { client_name, website_url } = await req.json()
    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY')

    if (!GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not set')
    }

    const model = 'gemini-2.0-flash';
    
    // Updated Prompt for "AI Readiness Score" format
    const prompt = `You are a senior marketing strategist for Blackwood Method. Your job is to analyze agency websites and identify key opportunities for automation or AI implementation.
    
    Client: ${client_name}
    Website: ${website_url}
    
    Output the result as a valid JSON object with the following structure:
    {
      "client": "${client_name}",
      "website": "${website_url}",
      "ai_readiness_score": (integer between 0-100),
      "summary": (string, professional analysis of their current state),
      "recommendations": (array of strings, specific actionable steps)
    }
    
    Do not include markdown formatting like \`\`\`json. Just the raw JSON.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    )

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json()
    let generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "{}"
    generatedText = generatedText.replace(/```json\n|\n```/g, "").replace(/```/g, "").trim()

    let resultJson;
    try {
      resultJson = JSON.parse(generatedText);
    } catch (e) {
      resultJson = { 
        error: "Failed to parse AI response", 
        raw_text: generatedText,
        ai_readiness_score: 0,
        summary: "Could not parse analysis.",
        recommendations: [] 
      };
    }

    return new Response(
      JSON.stringify({ result: resultJson }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400 
      }
    )
  }
})
