import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
      },
      {
        userAgent: [
          // OpenAI
          "GPTBot",
          "ChatGPT-User",
          // Anthropic / Claude
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          // Perplexity
          "PerplexityBot",
          // Google AI scrapers
          "Google-Extended",
          // Meta / Facebook
          "FacebookBot",
          "Meta-ExternalAgent",
          // ByteDance
          "Bytespider",
          // Common Crawl & General Scraping / ML datasets
          "CCBot",
          "cohere-ai",
          "Diffbot",
          "Applebot-Extended",
          "Amazonbot",
          "Scrapy",
          "ia_archiver",
        ],
        disallow: "/",
      },
    ],
  };
}
