// Central configuration export
import { appInfo } from "./appInfo.js";
import { screenshots } from "./screenshots.js";
import { reviews } from "./reviews.js";
import { socialLinks } from "./socialLinks.js";

export const siteConfig = {
  ...appInfo,
  screenshots,
  socialLinks,
  reviews
};

// Re-export individual configs for direct imports
export { appInfo, screenshots, reviews, socialLinks };
