import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "fr", "es", "ar"],

  // Used when no locale matches
  defaultLocale: "en",
  
  // disables auto locale detection from headers/cookies
  localeDetection: false,
});
