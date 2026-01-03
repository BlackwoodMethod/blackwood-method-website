import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { client_name, website_url } = await req.json()
    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY')

    if (!GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY is not set')
    }

    const prompt = `You are a senior marketing strategist. Analyze the following client based on their name and website. Output a JSON summary of 3 key marketing opportunities.
    
    Client Name: ${client_name}
    Website: ${website_url}
    
    Format the response as a valid JSON object with a "opportunities" array, where each object has "title" and "description".`

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        })
      }
    )

    const data = await response.json()
    
    // Extract the text from Gemini's response structure
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || "{}"
    
    // Clean up markdown code blocks if present
    const jsonString = generatedText.replace(/```json\n|\n```/g, "").trim()

    return new Response(
      JSON.stringify({ result: jsonString }),
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
