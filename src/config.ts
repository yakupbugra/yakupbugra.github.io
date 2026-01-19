export const SITE = {
  website: "https://yakupbugra.github.io/", // replace this with your deployed domain
  author: "Yakup Bugra Bozkurt",
  profile: "https://yakupbugra.com/",
  desc: "I write for myself.",
  title: "Yakup Bugra Bozkurt",
  ogImage: "",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,  
    url:"",
    text:""
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "CET", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
