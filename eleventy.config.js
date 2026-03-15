import { EleventyI18nPlugin } from "@11ty/eleventy";
import yaml from "js-yaml";

export default function(eleventyConfig) {
  // Support YAML data files
  eleventyConfig.addDataExtension("yaml,yml", (contents) => yaml.load(contents));

  // Add i18n plugin for multi-language support
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    defaultLanguage: "en",
    errorMode: "allow-fallback"
  });

  // Pass through static assets
  eleventyConfig.addPassthroughCopy({ "public": "." });

  // Global site data
  eleventyConfig.addGlobalData("site", {
    title: "FINAL|FINAL",
    description: "A writing app for academics who need outlining, citations, versioning, and focus — all in one place.",
    url: "https://finalfinal-homepage.pages.dev",
    author: "P. Kerim Friedman"
  });

  // Convert markdown-style links to HTML anchor tags
  eleventyConfig.addFilter("renderLinks", function(text) {
    return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  });

  // Date filter for formatting dates
  eleventyConfig.addFilter("date", function(dateObj, format) {
    if (dateObj === "now") {
      dateObj = new Date();
    }

    if (format === "YYYY-MM-DD") {
      return dateObj.toISOString().split('T')[0];
    }

    if (format === "YYYY") {
      return new Date().getFullYear().toString();
    }

    return dateObj.toISOString();
  });

  return {
    dir: {
      input: "src/11ty",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
}
