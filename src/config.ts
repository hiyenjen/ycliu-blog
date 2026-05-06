export const SITE = {
  website: "https://ycliu.world", // replace this with your deployed domain
  author: "ycliu",
  profile: "https://ycliu.world",
  desc: "我是 ycliu，野保產品設計師，每月寫一篇野生動物 × 企業風險的分析。",
  title: "ycliu",
  ogImage: "og.jpg",
  lightAndDarkMode: false,
  postPerIndex: 100,
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "zh-TW", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Taipei", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
