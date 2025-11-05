export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

export const defaultSEO: SEOProps = {
  title: "Blackwood Method - AI Tools for Marketing Agencies",
  description:
    "AI-powered workflows and tools designed specifically for digital marketing agencies. Save time, increase efficiency, and deliver better results with agency automation.",
  keywords:
    "AI tools for marketing agencies, agency automation, AI workflows, marketing automation, digital agency tools, AI for agencies",
  ogImage: "/og-image.png",
  ogType: "website",
};

export const pageSEO: Record<string, SEOProps> = {
  home: {
    title: "Blackwood Method - AI Solutions for Digital Marketing Agencies",
    description:
      "Transform your agency operations with AI-powered workflows. Save 10+ hours per week, increase client output, and maintain consistent quality. Built for marketing agencies.",
    keywords:
      "AI tools for marketing agencies, agency automation, marketing workflow automation, AI for digital agencies, agency efficiency tools",
    ogType: "website",
  },
  services: {
    title: "AI Services for Agencies | Blackwood Method",
    description:
      "Done-for-you AI implementation services for marketing agencies. Workflow integration, client communication automation, custom dashboards, and AI strategy blueprints from $500.",
    keywords:
      "AI implementation services, agency workflow integration, marketing automation services, AI consulting for agencies, agency automation setup",
    ogType: "website",
  },
  store: {
    title: "AI Tools & Templates for Agencies | Blackwood Method Store",
    description:
      "Premium AI resources for marketing agencies. Digital downloads ($14-$29), done-for-you services ($500-$2000+), and monthly retainers ($199-$449/mo). Instant access.",
    keywords:
      "AI templates for agencies, marketing automation templates, agency tools, AI workflows, content calendar templates, reporting dashboards",
    ogType: "website",
  },
  demo: {
    title: "AI Workflow Demo | See AI in Action | Blackwood Method",
    description:
      "Watch how AI transforms client briefs into complete campaign plans in minutes. Interactive demo showing real agency use cases. Request a personalized demo for your agency.",
    keywords:
      "AI workflow demo, marketing automation demo, AI agency tools demo, campaign planning automation, AI content planning",
    ogType: "website",
  },
  contact: {
    title: "Contact Us | Schedule a Demo | Blackwood Method",
    description:
      "Ready to transform your agency with AI? Schedule a free consultation or demo. Get personalized recommendations for your agency's specific needs.",
    keywords:
      "contact marketing agency, schedule AI demo, agency consultation, AI implementation consultation",
    ogType: "website",
  },
};

export function updatePageSEO(page: keyof typeof pageSEO) {
  const seo = pageSEO[page] || defaultSEO;

  // Update title
  document.title = seo.title;

  // Update or create meta tags
  updateMetaTag("description", seo.description);
  if (seo.keywords) {
    updateMetaTag("keywords", seo.keywords);
  }

  // Open Graph tags
  updateMetaTag("og:title", seo.title, "property");
  updateMetaTag("og:description", seo.description, "property");
  updateMetaTag("og:type", seo.ogType || "website", "property");
  if (seo.ogImage) {
    updateMetaTag(
      "og:image",
      `${window.location.origin}${seo.ogImage}`,
      "property"
    );
  }
  updateMetaTag("og:url", window.location.href, "property");

  // Twitter Card tags
  updateMetaTag("twitter:card", "summary_large_image");
  updateMetaTag("twitter:title", seo.title);
  updateMetaTag("twitter:description", seo.description);
  if (seo.ogImage) {
    updateMetaTag(
      "twitter:image",
      `${window.location.origin}${seo.ogImage}`
    );
  }

  // Canonical URL
  if (seo.canonicalUrl) {
    updateLinkTag("canonical", seo.canonicalUrl);
  }
}

function updateMetaTag(
  name: string,
  content: string,
  attribute: string = "name"
) {
  let element = document.querySelector(
    `meta[${attribute}="${name}"]`
  ) as HTMLMetaElement;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.content = content;
}

function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(
    `link[rel="${rel}"]`
  ) as HTMLLinkElement;

  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }

  element.href = href;
}

