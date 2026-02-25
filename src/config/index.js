// Central configuration export
import { appInfo } from "./appInfo.js";
import { features } from "./features.js";
import { screenshots } from "./screenshots.js";
import { reviews } from "./reviews.js";
import { faq } from "./faq.js";
import { socialLinks } from "./socialLinks.js";

export const siteConfig = {
  ...appInfo,
  features,
  faqs: faq,
  screenshots,
  socialLinks,
  reviews
};

// Re-export individual configs for direct imports
export { appInfo, features, screenshots, reviews, faq, socialLinks };
