/* =========================================================
   Move On | فایل داده‌های سایت
   برای اضافه کردن نمونه‌کار جدید فقط همین فایل را ویرایش کنید.
   راهنمای کامل در فایل README.md است.
   ========================================================= */

window.MOVEON = {

  /* ---------- ویدیوهای آپارات ----------
     فقط کد انتهای لینک را بنویسید.
     مثال: لینک https://aparat.com/v/oif8619  ←  کد: oif8619 */
  aparat: [
    { id: "oif8619", title: "نمونه‌کار ویدیویی ۱" },
    { id: "fmx745o", title: "نمونه‌کار ویدیویی ۲" },
    { id: "eya7ep5", title: "نمونه‌کار ویدیویی ۳" },
    { id: "rsmdrm9", title: "نمونه‌کار ویدیویی ۴" },
    { id: "cbkusgc", title: "نمونه‌کار ویدیویی ۵" },
    { id: "imib3sq", title: "نمونه‌کار ویدیویی ۶" }
  ],

  /* ---------- ویدیوهای داخل سایت ----------
     فایل ویدیو در assets/videos و عکس کاور در assets/posters
     shape: "tall" برای ویدیوی عمودی، "wide" برای افقی */
  videos: [
    { file: "industrial-bakery.mp4",       poster: "industrial-bakery.jpg",       title: "ویدیوی صنعتی | صنایع پخت مشهد", tag: "تصویربرداری و تدوین", shape: "tall" },
    { file: "iranserver-bug-campaign.mp4", poster: "iranserver-bug-campaign.jpg", title: "کمپین تابستانی ایران‌سرور", tag: "موشن گرافیک",         shape: "wide" },
    { file: "spartans-interior.mp4",       poster: "spartans-interior.jpg",       title: "ویدیوی معرفی فضا",       tag: "تصویربرداری",          shape: "tall" },
    { file: "aj-logo-motion.mp4",          poster: "aj-logo-motion.jpg",          title: "لوگو موشن",              tag: "موشن گرافیک",          shape: "tall" },
    { file: "interior-walkthrough.mp4",    poster: "interior-walkthrough.jpg",    title: "ویدیوی معماری داخلی",    tag: "تصویربرداری",          shape: "tall" },
    { file: "spartans-teaser.mp4",         poster: "spartans-teaser.jpg",         title: "تیزر کوتاه",             tag: "تدوین",                shape: "tall" }
  ],

  /* ---------- دسته‌بندی نمونه‌کارهای گرافیک ---------- */
  categories: {
    social:   "شبکه‌های اجتماعی",
    poster:   "پوستر و رویداد",
    event:    "نمایشگاه",
    thumb:    "تامبنیل ویدیو",
    identity: "هویت بصری"
  },

  /* ---------- نمونه‌کارهای گرافیک ----------
     هر عکس دو نسخه دارد در پوشه‌ی assets/works:
     نسخه‌ی بزرگ (src) و نسخه‌ی کوچک برای پیش‌نمایش (thumb).
     اگر نسخه‌ی کوچک نساختید، همان فایل بزرگ را برای هر دو بنویسید.
     عکس‌های افقی خودکار تمام‌عرض نمایش داده می‌شوند. */
  works: [
    { src: "dairy-cow-fa.webp",            thumb: "dairy-cow-fa-sm.webp",            cat: "poster",   title: "پوستر همایش بین‌المللی گاو شیری" },
    { src: "baziya-kakaei.webp",           thumb: "baziya-kakaei-sm.webp",           cat: "thumb",    title: "تامبنیل ویدیو | بازیا", wide: true },
    { src: "iranserver-domain-1.webp",     thumb: "iranserver-domain-1-sm.webp",     cat: "social",   title: "کاروسل آموزشی | ایران‌سرور" },
    { src: "harkat-poster.webp",           thumb: "harkat-poster-sm.webp",           cat: "poster",   title: "پوستر جشنواره‌ی حرکت" },
    { src: "elecomp-social.webp",          thumb: "elecomp-social-sm.webp",          cat: "event",    title: "پوستر نمایشگاه الکامپ" },
    { src: "iranserver-vibe-coding.webp",  thumb: "iranserver-vibe-coding-sm.webp",  cat: "social",   title: "پست شبکه‌های اجتماعی | ایران‌سرور" },
    { src: "anniversary-50.webp",          thumb: "anniversary-50-sm.webp",          cat: "poster",   title: "پوستر پنجاه‌سالگی" },
    { src: "baziya-elham.webp",            thumb: "baziya-elham-sm.webp",            cat: "thumb",    title: "تامبنیل ویدیو | بازیا", wide: true },
    { src: "iranserver-bug-profile.webp",  thumb: "iranserver-bug-profile-sm.webp",  cat: "identity", title: "هویت کمپین تابستانی | ایران‌سرور" },
    { src: "solidworks-league.webp",       thumb: "solidworks-league-sm.webp",       cat: "poster",   title: "پوستر لیگ سالیدورکس" },
    { src: "iranserver-story-cloud.webp",  thumb: "iranserver-story-cloud-sm.webp",  cat: "social",   title: "استوری آموزشی | ایران‌سرور" },
    { src: "elecomp-horizontal.webp",      thumb: "elecomp-horizontal-sm.webp",      cat: "event",    title: "پوستر افقی نمایشگاه الکامپ", wide: true },
    { src: "morad-games.webp",             thumb: "morad-games-sm.webp",             cat: "identity", title: "طراحی لوگو | مراد گیمز", wide: true },
    { src: "anniversary-30.webp",          thumb: "anniversary-30-sm.webp",          cat: "poster",   title: "پوستر سی‌امین سالگرد" },
    { src: "baziya-goudarzi.webp",         thumb: "baziya-goudarzi-sm.webp",         cat: "thumb",    title: "تامبنیل ویدیو | بازیا", wide: true },
    { src: "iranserver-seo.webp",          thumb: "iranserver-seo-sm.webp",          cat: "social",   title: "پست وبینار سئو | ایران‌سرور" },
    { src: "spaghetti-2.webp",             thumb: "spaghetti-2-sm.webp",             cat: "poster",   title: "پوستر مسابقه‌ی سازه‌ی ماکارونی" },
    { src: "elecomp-story.webp",           thumb: "elecomp-story-sm.webp",           cat: "event",    title: "دعوت‌نامه‌ی نمایشگاه الکامپ" },
    { src: "iranserver-wordpress.webp",    thumb: "iranserver-wordpress-sm.webp",    cat: "social",   title: "پست وبینار وردپرس | ایران‌سرور" },
    { src: "manufacturing-conference.webp",thumb: "manufacturing-conference-sm.webp",cat: "poster",   title: "پوستر همایش" },
    { src: "baziya-amia.webp",             thumb: "baziya-amia-sm.webp",             cat: "thumb",    title: "تامبنیل ویدیو | بازیا", wide: true },
    { src: "iranserver-instagram.webp",    thumb: "iranserver-instagram-sm.webp",    cat: "social",   title: "پست شبکه‌های اجتماعی | ایران‌سرور" },
    { src: "startino-info.webp",           thumb: "startino-info-sm.webp",           cat: "poster",   title: "اینفوگرافیک استارتینو" },
    { src: "iranserver-story-backup.webp", thumb: "iranserver-story-backup-sm.webp", cat: "social",   title: "استوری آموزشی | ایران‌سرور" },
    { src: "dairy-cow-en.webp",            thumb: "dairy-cow-en-sm.webp",            cat: "poster",   title: "پوستر انگلیسی همایش گاو شیری" },
    { src: "baziya-chvrsi.webp",           thumb: "baziya-chvrsi-sm.webp",           cat: "thumb",    title: "تامبنیل ویدیو | بازیا", wide: true },
    { src: "escape-room.webp",             thumb: "escape-room-sm.webp",             cat: "poster",   title: "پوستر اتاق فرار" },
    { src: "iranserver-seo-webinar.webp",  thumb: "iranserver-seo-webinar-sm.webp",  cat: "social",   title: "پست وبینار سئو | ایران‌سرور" },
    { src: "harkat-wide.webp",             thumb: "harkat-wide-sm.webp",             cat: "poster",   title: "گرافیک جشنواره‌ی حرکت", wide: true },
    { src: "iranserver-story-content.webp",thumb: "iranserver-story-content-sm.webp",cat: "social",   title: "استوری آموزشی | ایران‌سرور" },
    { src: "abaqus-poster.webp",           thumb: "abaqus-poster-sm.webp",           cat: "poster",   title: "پوستر دوره‌ی آباکوس" },
    { src: "baziya-sandy.webp",            thumb: "baziya-sandy-sm.webp",            cat: "thumb",    title: "تامبنیل ویدیو | بازیا", wide: true },
    { src: "iranserver-domain-2.webp",     thumb: "iranserver-domain-2-sm.webp",     cat: "social",   title: "کاروسل آموزشی | ایران‌سرور" },
    { src: "spaghetti-info.webp",          thumb: "spaghetti-info-sm.webp",          cat: "poster",   title: "اینفوگرافیک مسابقه‌ی سازه" },
    { src: "iranserver-story-marketing.webp",thumb:"iranserver-story-marketing-sm.webp",cat:"social", title: "استوری آموزشی | ایران‌سرور" },
    { src: "adams-poster.webp",            thumb: "adams-poster-sm.webp",            cat: "poster",   title: "پوستر دوره‌ی آموزشی" },
    { src: "iranserver-webinar-vibe.webp", thumb: "iranserver-webinar-vibe-sm.webp", cat: "social",   title: "پست وبینار | ایران‌سرور" },
    { src: "solidworks-soon.webp",         thumb: "solidworks-soon-sm.webp",         cat: "poster",   title: "پوستر رویداد سالیدورکس" },
    { src: "iranserver-story-google.webp", thumb: "iranserver-story-google-sm.webp", cat: "social",   title: "استوری آموزشی | ایران‌سرور" },
    { src: "spaghetti-story.webp",         thumb: "spaghetti-story-sm.webp",         cat: "poster",   title: "استوری مسابقه‌ی سازه‌ی ماکارونی" },
    { src: "iranserver-story-logo.webp",   thumb: "iranserver-story-logo-sm.webp",   cat: "social",   title: "استوری ترند | ایران‌سرور" },
    { src: "course-story.webp",            thumb: "course-story-sm.webp",            cat: "poster",   title: "استوری دوره‌ی آموزشی" },
    { src: "iranserver-domain-3.webp",     thumb: "iranserver-domain-3-sm.webp",     cat: "social",   title: "کاروسل آموزشی | ایران‌سرور" },
    { src: "festival-story.webp",          thumb: "festival-story-sm.webp",          cat: "poster",   title: "پوستر رویداد" },
    { src: "iranserver-story-checklist.webp",thumb:"iranserver-story-checklist-sm.webp",cat:"social", title: "استوری آموزشی | ایران‌سرور" },
    { src: "iranserver-domain-4.webp",     thumb: "iranserver-domain-4-sm.webp",     cat: "social",   title: "کاروسل آموزشی | ایران‌سرور" },
    { src: "iranserver-domain-5.webp",     thumb: "iranserver-domain-5-sm.webp",     cat: "social",   title: "کاروسل آموزشی | ایران‌سرور" }
  ],

  /* ---------- برندهای همکار ----------
     لوگو را با همین اسم (logo) در پوشه‌ی assets/logos بگذارید.
     تا وقتی فایل لوگو نباشد، اسم برند به‌جایش نمایش داده می‌شود. */
  clients: [
    { name: "ایران‌سرور",           logo: "iranserver.png" },
    { name: "بازیا",                logo: "baziya.png" },
    { name: "دانشگاه فردوسی مشهد",  logo: "ferdowsi.png" },
    { name: "دانشگاه تهران",        logo: "ut.png" },
    { name: "وزارت علوم",           logo: "msrt.png" },
    { name: "شهرداری مشهد",         logo: "mashhad.png" },
    { name: "داتین",                logo: "dotin.png" },
    { name: "رسپینا",               logo: "raspina.png" },
    { name: "پارت لاستیک",          logo: "partlastic.png" },
    { name: "کویر تایر",            logo: "kavirtire.png" },
    { name: "عمرانیان",             logo: "omranian.png" },
    { name: "صنایع پخت مشهد",       logo: "pokht.png" }
  ]
};
