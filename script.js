/* ==========================================================
   MEMORY BOOK — script.js
   রাতুল ও তার ময়না পাখির স্মৃতির পাতা
   Sad Background Song Engine + Letters + Timeline + Farewell
   ========================================================== */

/* ----------------------------------------------------------
   PART 1 — CONTENT
   ---------------------------------------------------------- */

const TIMELINE = [
  {
    date: "৭ এপ্রিল ২০২৫",
    title: "প্রথম পরিচয় ও প্রথম বার্তা",
    desc: "দুপুর ঠিক ১২টায় তোমার সেই প্রথম মেসেজ। একটি ফেসবুক কমেন্টের উত্তর দিয়ে শুরু হয়েছিল জীবনের সেরা অধ্যায়।",
    more: "আমি যদি ওই ভিডিওতে কমেন্ট না করতাম, বা তুমি যদি সেটা না দেখতে কিংবা রিপ্লাই না দিতে—তবে আজ আমরা দুজন হয়তো দুজনের মতো ব্যস্ত থাকতাম। দুপুর ১২টার সেই প্রথম মেসেজ পেয়ে মনে হচ্ছিল তোমাকে আমি অনেক আগে থেকেই চিনি।"
  },
  {
    date: "১০ এপ্রিল ২০২৫",
    title: "ভালোবাসার শুরু (লং ডিসটেন্সের শপথ)",
    desc: "বুকের ভেতর পাথর চেপে শেষমেশ বলেই ফেললাম 'আমি তোমাকে ভালোবাসি'। দূরত্বের মাঝেও বিশ্বাসের বন্ধন গড়ে উঠল।",
    more: "৯ই এপ্রিলে নিয়েছিলাম কঠিন সিদ্ধান্ত। মনে ভয় ছিল যদি তুমি কথা বলা বন্ধ করে দাও। কিন্তু ১০ই এপ্রিল তুমি রাজি হলে। ওই রাতটা ছিল আমার জীবনের সবচেয়ে আনন্দময় রাত। সেদিন শপথ করেছিলাম এই যুগেও নব্বই দশকের আদিকালের খাঁটি ভালোবাসা টিকিয়ে রাখব।"
  },
  {
    date: "প্রথম ভয়েস কল",
    title: "মিষ্টি কোকিল কণ্ঠের প্রথম ডাক",
    desc: "জীবনের প্রথম কোনো মেয়ের সাথে ফোনে কথা বলা। ওপাশ থেকে সেই মিষ্টি কোকিল কণ্ঠের 'হ্যালো' শুনে পুরো ফিদা!",
    more: "তোমাকে কীভাবে সম্মান দেব, কী জিজ্ঞাসা করব—সব গুলিয়ে ফেলেছিলাম। শুধু তোমার ওই মায়াবী কণ্ঠটা এক নিমেষেই আমার পুরো মন কেড়ে নিয়েছিল।"
  },
  {
    date: "প্রথম ভিডিও কল",
    title: "বাদামী ওড়নায় মায়াবী রূপ",
    desc: "বাদামী রঙের ওড়না মাথায় দিয়ে টেবিলে পড়তে পড়তে কল দিয়েছিলে। অপলক তাকিয়ে এক অদ্ভুত প্রশান্তি অনুভব করেছিলাম।",
    more: "আমি ভেবেছিলাম সাধারণ ক্রাশ খাব, কিন্তু হলো তার চাইতেও বেশি কিছু—নিজের ভেতর অদ্ভুত প্রশান্তি অনুভব করলাম। যতবার দেখি, ততবারই তোমার রূপে নতুন করে মুগ্ধ হই।"
  },
  {
    date: "৮ মাস পূর্তি (ডিসেম্বর ২০২৫)",
    title: "৮ মাসের পথচলা ও মানসিক শান্তি",
    desc: "হাজার ঝগড়া আর অভিমানের পরও দিনশেষে এক কোটি চাঁদের চেয়েও মূল্যবান আমার ময়না পাখি।",
    more: "পড়াশোনার তীব্র প্রেসারে যখন মন খারাপ থাকত, তোমার 'ময়না' ডাকটা শুনলেই সব ক্লান্তি দূর হয়ে যেত। তুমি আমার মানসিক শান্তি। তুমি তোমার বাবার পর আমাকে সবচেয়ে বেশি বিশ্বাস করো—আমি সবসময় সেই বিশ্বাসের মর্যাদা ধরে রাখার চেষ্টা করেছি।"
  },
  {
    date: "৩১ ডিসেম্বর ২০২৫",
    title: "৩১ নাইটের চিঠি (থার্টি ফার্স্ট নাইট)",
    desc: "বছরের শেষ রাতে দূরত্বের মাঝেও অটুট বিশ্বাস আর পরিণত হয়ে এগিয়ে যাওয়ার প্রার্থনা।",
    more: "এই বছরটা আমাদের জন্য সহজ ছিল না। তবু আমরা কথা বলেছি, বোঝার চেষ্টা করেছি, ধৈর্য ধরেছি। কষ্ট হলে চুপ করে না থাকার এবং সময়ের ওপর বিশ্বাস রাখার প্রতিশ্রুতি নিয়েছিলাম।"
  },
  {
    date: "১০ এপ্রিল ২০২৬",
    title: "এক বছরের ভালোবাসা (৩৬৭ দিন)",
    desc: "স্কুল-কলেজ থেকে ড্রেস না খুলেই মেসেজ দেওয়ার পাগলামি আর সারাজীবন পাশে থাকার স্বর্ণাক্ষরে লেখা অঙ্গীকার।",
    more: "এসএসসি পরীক্ষার সময় পরীক্ষা দিয়েই স্কুলের ড্রেস না খুলেই আগে তোমাকে মেসেজ দিতাম। কলেজ থেকেও ফিরে আগে তোমায় মেসেজ দিতাম। এক পুরুষে আসক্ত তোমার মতো খাঁটি নারী পাওয়া আমার জীবনের সেরা সৌভাগ্য ছিল।"
  },
  {
    date: "১ জুন ২০২৬",
    title: "আমার কলিজার জন্মদিন",
    desc: "অমূল্য সম্পদকে আগলে রাখার মতো করে ভালোবাসা এবং সারাজীবন একসাথে দুষ্টামি করার দোয়া।",
    more: "সে না থাকলে হয়তো আমি আজও নিজেকে গুরুত্বহীন ভাবতাম। কিন্তু তুমি সেটা হতে দেও নি। তোমাতেই আমি শুরু, আবার তোমাতেই আমি শেষ।"
  },
  {
    date: "সেপ্টেম্বর / অক্টোবর ২০২৬",
    title: "কঠিন বিদায় ও শেষ অধ্যায়",
    desc: "টাকার কাছে হেরে যাওয়া, চোখের জলের অভিশাপ আর না-ফেরার দেশের চিরবিদায়।",
    more: "যে সেপ্টেম্বর-অক্টোবর মাস আমার থেকে আমার ময়নাকে ছিনিয়ে নিয়েছে। হয়তো সময় আমাদের আলাদা করেছে, কিন্তু হৃদয় আলাদা করতে পারে নি।"
  }
];

const LETTERS = [
  {
    id: "birthday",
    date: "১ জুন ২০২৬",
    title: "জন্মদিনের শুভেচ্ছা চিঠি",
    preview: "আজ ১ জুন ২০২৬, দিনটা তেমন কিছু না। শুধু আমার জন্য একটু স্পেশাল দিন। কারণটা হলো আমার কলিজা টুকরার জন্মদিন...",
    body: [
      "আজ ১ জুন ২০২৬,\nদিনটা তেমন কিছু না। শুধু আমার জন্য একটু স্পেশাল দিন। কারণটা তুমি হয়তো জানো। কারণটা হলো আমার কলিজা টুকরার জন্মদিন আজকে। সে না থাকলে হয়তো আমি আজও নিজেকে গুরুত্বহীন ভাবতাম। কিন্তু তুমি সেটা হতে দেও নি। তুমি আমায় আগলে রেখেছো। যেমনটা একজন ধনী ব্যক্তি তার অমূল্য সম্পদ যেভাবে নিরাপত্তার সাথে রাখে।",
      "এই যুগেও এসে তোমার মতো মেয়ে পাওয়া ভাগ্যের ব্যাপার। যেখানে খাঁটি ভালোবাসার কোনো নাম নেই, সেখানে তুমি আমায় খাঁটি মনে ভালোবাসো। তোমার কোনো তুলনা হয় না। তুমি আসলেই সেরা। তোমায় দেখলে আমার কাছে মনে হয় কি যেনো এক বিশ্ব সুন্দরী দেখেছি।",
      "তোমাতেই আমি শুরু , আবার তোমাতেই আমি শেষ। তুমি আমার ভালোবাসা।",
      "এই যা মূল কথা তো বলি নাই। শুভ জন্মদিন প্রিয় ❤️🫶 দোয়া করি এইভাবেই সারাজীবন এক সাথে থেকে যাবো। একসাথে দুষ্টামি করবো। একসাথেই হাসবো। নিজের যত্ন নিও।",
      "~Love you moyna pakhi",
      "~Ummmmmmmmmmmmmmmah",
      "~Happy Birthday to you 😊💝"
    ],
    sign: "— তোমার ময়না\nরাতুল"
  },
  {
    id: "night31",
    date: "৩১ ডিসেম্বর ২০২৫",
    title: "৩১ রাতের চিঠি (থার্টি ফার্স্ট নাইট)",
    preview: "১০ এপ্রিল ২০২৫। এই দিন থেকেই আমাদের লং ডিসটেন্স রিলেশনশিপের যাত্রা শুরু। দূরত্ব ছিল, কিন্তু মন আর বিশ্বাসের মাঝে ফাঁক পড়েনি...",
    body: [
      "১০ এপ্রিল ২০২৫। এই দিন থেকেই আমাদের লং ডিসটেন্স রিলেশনশিপের যাত্রা শুরু। দূরত্ব ছিল, আছে, কিন্তু মন আর বিশ্বাসের মাঝে কখনো ফাঁক পড়েনি। আজ ৩১ ডিসেম্বর রাত, বছরের শেষ দিন। এই শেষ রাতটা তোমাকে মনে করেই লিখছি।",
      "এই বছরটা আমাদের জন্য সহজ ছিল না। তবু আমরা কথা বলেছি, বোঝার চেষ্টা করেছি, ধৈর্য ধরেছি। এটুকুই আমাদের শক্তি। সামনে পথ আরও দীর্ঘ, আরও দায়িত্বের। তাই শুধু অনুভূতি নয়, বুঝে চলাটাই সবচেয়ে জরুরি।",
      "নিজের স্বপ্নগুলোকে গুরুত্ব দিও। পড়াশোনা, কাজ, নিজের উন্নতি কখনো থামিও না। কষ্ট হলে চুপ করে থেকো না, আবার রাগে ভুল সিদ্ধান্তও নিও না। বিশ্বাস রাখো, সময়ের ওপর, নিজের ওপর, আর আমাদের ওপর।",
      "নতুন বছরে চাই আমরা আরও পরিণত হব, আরও শান্ত হব। কম কথা হলেও গভীর হোক। দূরত্ব যেন আমাদের দুর্বল না করে, বরং শক্ত করে।",
      "~নতুন বছরের জন্য তোমার জন্য রইল দোয়া, শান্তি আর সঠিক পথে এগিয়ে যাওয়ার শক্তি।",
      "~শুভ নববর্ষ।"
    ],
    sign: "— রাতুল"
  },
  {
    id: "month8",
    date: "ডিসেম্বর ২০২৫",
    title: "৮ মাস পূর্তির চিঠি",
    preview: "আজ আমাদের ৮ মাসের পরিচয়। ৮ মাস আগে তুমি আমাকে চিনতে না আমি তোমাকেও চিনতাম না। দুজন দুজনের নামও জানতাম না...",
    body: [
      "আজ আমাদের ৮ মাসের পরিচয়। ৮ মাস আগে তুমি আমাকে চিনতে না আমি তোমাকেও চিনতাম না। দুজন দুজনের প্রতি কোন মায়া ছিল না এমনকি আমাদের নাম গুলোও জানতাম না।",
      "কিন্তু ভাগ্যের এমন এক খেলা যে তোমার সাথে আমার পরিচয়। হয়তোবা তুমি সেই কমেন্টের রিপ্লাই না দিলে আজকে হয়তোবা তোমার মত এরকম একটা লাইফ পার্টনার পেতাম না। হয়তোবা আমি গ্রুপটা না খুললেই তোমার মত লাইফ পার্টনারের কমেন্টটা পাইতাম না।",
      "যাইহোক তুমি আমার লাইফে সবচেয়ে স্পেশাল একজন মানুষ। জানো কি তুমি? বর্তমানে তো আমি অনেক প্রেসারে থাকি পড়াশুনার। তুমি কিন্তু এটা ঠিকই জানো। পড়তে পড়তে আমার ভালো লাগে না একটুও। কিন্তু তোমার ময়না ডাকটা শুনলেই আমার সব ক্লান্তি দূর হয়ে যায় 🥰 কিভাবে বলবো তোমায়? তুমি আমার মানসিক শান্তি ☺️ তোমার সাথে হাজার ঝগড়া করি, হাজার মারামারি করি, হাজার কথা কাটাকাটি করি দিনশেষে তোমাকেই ভালোবাসি। 🫶",
      "আমি কখনো ভাবতে পারি নাই এরকম ভাবে আমি কোন মেয়ের মায়াতে পড়বো। যে বর্তমান যুগে রিলেশনে অধিকাংশই ডাবল টাইমিং করে সেই যুগে আমি এরকম একটা নারী পেয়েছি। এর থেকে বড় ভাগ্য আর কার আছে তুমিই বলো? আমার ময়না আমার জন্য কতটা পাগল তারে দেখলেই বোঝা যায়।",
      "এটা মনে রাখবা ময়না তুমি অন্য কারো কাছে মূল্যহীন নাকি মূল্যবান সেটা চিন্তার বিষয় না আমার কাছে তুমি সবসময় একটা মূল্যবান রত্নের মত। এই দেখো আমি তোমাকে কেন চাঁদ বলি না। কারণ সবারই চাঁদ আছে সবার যেটা থাকবে আমার ওটা থাকার দরকার নেই। আমার যিনি আছে উনি এক কোটি চাঁদের সৌন্দর্য থেকেও বেশি।",
      "এই যে দেখো আমাদের দুজনের ভালোবাসা। তুমি আমায় ছাড়া কিছু বুঝনা আমি তোমায় ছাড়া কিছুই বুঝিনা। দুজন দুজনকে পাগলের মতো ভালোবাসি। আবার ঠিক সেইরকমই ঝগড়াও করি 👀 তবে ময়না পাখি এই ঝগড়াটা ভালোবাসার ঝগড়া। তোমার সাথে দুষ্টামি করার ঝগড়া।",
      "তোমার প্রতিটা হাসি আমার মনটাকে ছুঁয়ে দেয় 🥹 তোমার এত মায়াবী হাসি 😩 কি বলেছে বুঝাবো বুঝতেই পারতেছি না।",
      "আমি ময়না জানি আমি তোমার কাছে একজন বিশ্বস্ত পুরুষ। তুমি তোমার বাবার পরে ঠিক আমাকে অনেক বিশ্বাস করো। আমি সব সময় তোমারে বিশ্বাসের মর্যাদাটাকে ধরে রাখবো। দুনিয়া উল্টে গেলেও আমি কখনোই তোমাকে হারাবো না।",
      "ময়না পাখি সব সময় দুজন দুজনের কথা শুনে চলবো। বুঝছো পাখি?",
      "~তুমি আমার ময়না ☺️\nতুমি আমার পাখি 🥰\nতুমি আমার টিয়া 😩\nতুমি আমার বউ 💕\nতুমি আমার কলিজা 😘\nতুমি আমার রাহার আম্মু 🥹\nতুমিই আমার সব",
      "~I love you so much moyna pakhi 🥹 I love you so much.",
      "আমি তোমায় অনেক ভালোবাসি,, অনেক অনেক অনেক ভালোবাসি। নিজের থেকেও বেশি ☺️",
      "দোয়া করি তুমি সব সময় সুস্থ থাকো। কোন বিপদ আপদ যেন না হয়।☺️"
    ],
    sign: "— তোমার রাতুল"
  },
  {
    id: "year1",
    date: "১০ এপ্রিল ২০২৬",
    title: "এক বছরের ভালোবাসার চিঠি (৩৬৭ দিন)",
    preview: "আজ ১০ই এপ্রিল ২০২৬। ঠিক ৩৬৭ দিন আগে, দুপুর ঠিক ১২টায় তোমার সেই প্রথম মেসেজ। কে জানতো ওই একটা দিন জীবন বদলে দেবে...",
    body: [
      "আজ ১০ই এপ্রিল ২০২৬ 📅।\nঠিক ৩৬৭ দিন আগে, দুপুর ঠিক ১২টায় তোমার সেই প্রথম মেসেজ 🕛। কে জানতো ওই একটা দিন আমাদের জীবনটা এভাবে বদলে দেবে? আজও আমরা একসাথে আছি, ভাবতেই কেমন লাগে! 🥹✨",
      "আমি কখনো কল্পনাও করিনি তুমি আমার এত আপন কেউ হয়ে যাবে। ৭ই এপ্রিল ২০২৫-এ ভেবেছিলাম তুমি হয়তো শুধুই একজন 'অনলাইন ফ্রেন্ড' হয়ে থাকবে 🤝। কিন্তু ভাগ্যের কী অপূর্ব লীলাখেলা 🤭, আজ তুমি আমার জীবনসঙ্গী! 💑",
      "জানো, আমি রিলেশন করতে খুব ভয় পেতাম 😰। সবসময় ভাবতাম, মানুষটা যদি আমার জন্য পারফেক্ট না হয়? আমার ভালোবাসা যদি সে না বোঝে? এই সব দুশ্চিন্তায় কখনো কারো সাথে জড়াইনি। কিন্তু তোমার সাথে পরিচয় হওয়াটা ছিল একদম 'কো-ইন্সিডেন্স' ✨। আমি যদি ওই ভিডিওতে কমেন্ট না করতাম 📱, বা তুমি যদি সেটা না দেখতে, কিংবা রিপ্লাই না দিতে—তবে আজ আমরা দুজন হয়তো দুজনের মতো ব্যস্ত থাকতাম। আজকের এই সুন্দর মুহূর্তটা কখনোই আসতো না 🌸।.....",
      "ভাগ্য হয়তো আমাদের মেলাতেই চেয়েছিল। তোমার চোখে কমেন্টটা পড়লো আর তুমি রিপ্লাই দিলে... তারপর এলো সেই ৭ই এপ্রিল ২০২৫, দুপুর ১২টা 🕛। তোমার প্রথম মেসেজ পেয়ে আমার ভেতরে কেমন যেন একটা অন্যরকম অনুভূতি হয়েছিল, মনে হচ্ছিল যেন তোমাকে আমি আগে থেকেই চিনি! 😅 তারপর শুরু হলো আমাদের রাত জেগে টেক্সট করা আর একে অপরকে জানা 🌙।",
      "আমি জানি তোমার জীবনে অনেক দুঃখ ছিল 😔, কিন্তু হয়তো সেই কষ্টের পরেই তুমি ভালোবাসার আসল মর্মটা বুঝতে পেরেছ। ৯ই এপ্রিল ২০২৫-এ আমি একটা কঠিন সিদ্ধান্ত নিয়েছিলাম—তোমাকে আমার জীবনসঙ্গী করে রাখার 💍। কিন্তু মনে মনে খুব ভয় ছিল, যদি তুমি রাজি না হও? যদি কথা বলা বন্ধ করে দাও? মনে হচ্ছিল বুকে একটা বিশাল পাথর চেপে আছে 🗜️। কিন্তু শেষমেশ ১০ই এপ্রিল ২০২৫ -এ বলেই ফেললাম, \"আমি তোমাকে ভালোবাসি\" ❤️💖। প্রথমে একটু না বললেও, ধীরে ধীরে তুমি রাজি হলে। ওই রাতটা ছিল আমার জীবনের সবথেকে আনন্দময় রাত! ✨🌌",
      "তোমাকে প্রপোজ করার সময় আমি একটা শপথ নিয়েছিলাম—যদি তুমি রাজি হও, তবে আমার সবটুকু দিয়ে তোমাকে ভালোবাসবো এবং দুনিয়াকে দেখাবো যে এই যুগেও 'আদিকালের ভালোবাসা' টিকে আছে ❤️। আমি কতটুকু পেরেছি জানি না, তবে এটুকু জানি—আমি তোমাকে অনেক অনেক ভালোবাসি। 😍",
      "~প্রথম ভয়েস কল 📞:\nজীবনের প্রথম কোনো মেয়ের সাথে ফোনে কথা বলা! তুমি যখন মেসেঞ্জারে কল দিলে আর ওপাশ থেকে সেই মিষ্টি কোকিল কণ্ঠের 'হ্যালো' শুনলাম, আমি তো পুরো ফিদা! 😍 তোমাকে কীভাবে সম্মান দেব, কী জিজ্ঞাসা করবো—সব গুলিয়ে ফেলেছিলাম। শুধু তোমার ওই মায়াবী কণ্ঠটা মন কেড়ে নিয়েছিল 🎶।",
      "~প্রথম ভিডিও কল 📹:\nমনে আছে? তুমি বাদামী রঙের ওড়না মাথায় দিয়ে টেবিলে পড়তে পড়তে কল দিয়েছিলে 🧕। আমিও টেবিলে পড়ার মাঝেই কথা বলছিলাম। তোমাকে প্রথমবার দেখার পর আমি জাস্ট থমকে গিয়েছিলাম! 😮 আমি ভেবেছিলাম ক্রাশ খাবো, কিন্তু হলো তার চাইতেও বেশি কিছু—নিজের ভেতর এক অদ্ভুত প্রশান্তি অনুভব করলাম। যতবার দেখি, ততবারই তোমার রূপে নতুন করে মুগ্ধ হই। প্রতিবারই নতুন করে ক্রাশ খাই! 😍✨",
      "এসএসসি পরীক্ষার সময় পরীক্ষা দিয়ে এসেই স্কুলের ড্রেস না খুলেই আগে তোমাকে মেসেজ দিতাম 🎒। সেই আবেগটা আজও আছে। এখন কলেজ থেকে ফিরেও আগে তোমায় মেসেজ দেই, তারপর অন্য কাজ 📱। আমাদের এই দুষ্টু-মিষ্টি ঝগড়া, ছোট ছোট রাগ-অভিমান—সবই আমার কাছে খুব প্রিয়। তোমাকে রাগাতে আমার খুব ভালো লাগে, কারণ রাগী অবস্থায় তোমাকে অনেক কিউট লাগে! 🤭💢",
      "যে যুগে এক পুরুষে আসক্ত নারী পাওয়া প্রায় অসম্ভব, সেখানে আমি তোমাকে পেয়েছি 👸। যে কিনা তার প্রিয় মানুষের সাফল্যে আনন্দ পায়, তার কষ্টে নিজেও কাঁদে। আমি গর্ব করে বলতে পারি, আমি একজন ভাগ্যবান পুরুষ যে এই প্রতারণার যুগে এসেও ৯০ দশকের মতো খাঁটি ভালোবাসা পেয়েছে। 💖🕊️",
      "ময়না, তুমি একদম চিন্তা করো না 🌷। আমি একদিন প্রতিষ্ঠিত হবোই, ইনশাআল্লাহ। তোমার বাবা-মাকে রাজি করাবোই এবং তোমাকে নিজের করে ঘরে তুলবো—এটা স্বর্ণাক্ষরে লিখে রাখতে পারো ✍️। শুধু একটু ধৈর্য ধরো আর আমার জন্য অপেক্ষা করো। সফল তো একদিন হবোই, তখন তোমার জন্য শুধু কয়েকটি ফুল নয়, পুরো একটা ফুলের বাগান এনে দেব 💐🏡।",
      "~নিজের খেয়াল রাখতে একদম ভুলবে না। সবসময় সাবধানে থাকবে। বাইরে গেলে সব সময় খেয়াল রাখবে যেন সবকিছু ঠিকঠাক থাকে। 🛡️✨\nআমি তোমাকে অনেক অনেক অনেক ভালোবাসি, ময়না! ❤️♾️"
    ],
    sign: "ইতি,\nতোমার ময়না\nরাতুল ✍️👦"
  },
  {
    id: "poem",
    date: "হৃদয়ের স্মৃতি",
    title: "শান্তিতে ঘুমাইয়ো তুমি (একটি কবিতা)",
    preview: "শান্তিতে ঘুমাইয়ো তুমি, আর হবে না দেখা! পথের কাটা তুইলা নিলাম! রাস্তা তোমার ফাকা...",
    body: [
      "~শান্তিতে ঘুমাইয়ো তুমি\nআর হবে না দেখা!\nপথের কাটা তুইলা নিলাম!\nরাস্তা তোমার ফাকা",
      "~যে যাই বলুক কান দিওনা\nদেখিও তোমার দিন!\nলিখে রেখো এই আমার কথা\nতোমার মনে পড়বেই একদিন! 🫂😅🥹❤️🩹"
    ],
    sign: "— তোমার রাতুল"
  },
  {
    id: "last",
    date: "সেপ্টেম্বর / অক্টোবর ২০২৬",
    title: "শেষ চিঠি",
    isLast: true,
    preview: "বেঁচে থাকতে পারব নাকি পারব না নিজেও জানি না। তবে তোমার প্রতি ভালোবাসা এক বিন্দুও কমবে না...",
    body: [],
    sign: ""
  }
];

const LAST_LETTER = {
  date: "সেপ্টেম্বর / অক্টোবর ২০২৬",
  lines: [
    "আমি কি বলবো কিছুই বুঝতে পারছি না। বেঁচে থাকতে পারব নাকি পারব না নিজেও জানি না। তবে আমার যাই হোক না কেন, তোমার প্রতি আমার ভালোবাসা এক বিন্দুও কমবে না। নব্বই দশকের মানুষের ভালোবাসার মতো আমি তোমাকে ভালোবাসি।",
    "~আমি বলতে চাই, আমি তোমাকে অনেক অনেক অনেক ভালোবাসি 🥹❤️🩹",
    "আমার কষ্ট হয়। কিন্তু এই কষ্ট কেউ বুঝতে পারে না। কেউই বিশ্বাস করে না আমার এই অবস্থার কথা। কি আর করার? আজ টাকার কাছে আমি হেরে গেলাম 😅",
    "আমি চেষ্টা করি কষ্ট না পাওয়ার জন্য। কিন্তু আমার প্রতিটা মুহূর্তে মুহূর্তে তোমার কথা মনে পড়ে। তোমাকে কেমনে বুঝাই আমি তোমাকে ভালোবাসি?",
    "আজকে এই পোস্ট করে আর অনলাইনে আসবো না। কিন্তু আমি তো লজ্জাহীন মানুষ। তোমার খবর নিতে আমি ঠিকই আসবো। হয় পাখির বেশে নয়তো প্রজাপতির বেশে 😅",
    "জানো আমার সবথেকে প্রিয় মাস ছিল জুন। কারণ এই মাসে তোমার জন্মদিন। মানে আমার কলিজার জন্মদিন 🥹 আর সবথেকে ঘৃণ্য করি এই সেপ্টেম্বর আর অক্টোবর মাসকে 😅 কারণ এই মাস আমার থেকে আমার ময়নাকে ছিনিয়ে নিয়েছে। 😅",
    "আমার নোট করে যাওয়া অনেক স্মৃতি খুঁজে পেয়েছি আমি। ওইগুলা না হয় কমেন্টে দিয়ে চিরদিনের জন্য না ফেরার দেশে চলে যাবো নে পাখি?",
    "আমি তোমার প্রতি কিছু বলতে চাই.... নিজের যত্ন নিবে পাখি। ঠিকমতো খাওয়া দাওয়া করবে। পানি বেশি বেশি খাবে নয়তো পরে আগের মতো সমস্যা দেখা দিবে। নামাজ পড়বে ঠিকমতো। নামাজ ছাড়বে না।",
    "আর শীতের সময় গোসল করতে ভুলবে না 👀 তুমি তো শীতের সময় গোসলকে হারাম করে দেও 😁 ঠিকমতো গোসল করবে। অল্পতেই মানিয়ে নেওয়ার চেষ্টা করবে।",
    "তোমাকে বিদায় জানাতে আমার একটুও মন চায় না। আমার হৃদয় বলে \"তুই পারবি তো বুকের মাঝে থেকে তাকে বিদায় জানাতে??😅\" আমি তো জানি যতই চেষ্টা করি না কেন আমি তোমাকে আমার বুকের মাঝে থেকে সরাতে পারব না।",
    "হয়তো আজকে তোমার দেওয়া অভিশাপ কাজে লেগেছে। যখন তোমার সাথে ঝগড়া হতো, তখন তুমি আমাকে কান্না করতে করতে অভিশাপ দিতে, \"আমার এই চোখের পানি পড়তেছে না? একদিন তুমিও আমার মতো হাজার গুণ কষ্ট পাইয়া কান্না করবা\" মনে আছে পাখি?🥹 আজ তোমার সেই কষ্ট পাওয়ার অভিশাপ পূরণ হয়েছে পাখি। 🥹",
    "আমি তোমাকে শেষবারের মতো বলতে চাই আমি তোমাকে অনেক ভালোবাসি। জীবনে যদি দেখা হয় কোনোভাবে তাহলে স্বামী পাশে থাকলে উপেক্ষা করে চলে যেও। আর যদি একা থাকো তখন তাহলে আমার কাছে এসে বলিও পাখি তুমি কেমন আছো....😅",
    "বিদায় জানাতে মন চাচ্ছে না। তারপরও আমি বিদায় জানাই পাখি। আমার নাম্বার তো আছেই তোমার কাছে। যদি কোনোদিন প্রয়োজন পড়ে তাহলে আমায় কল দিতে ভুলে যেও না।",
    "~মনে রাখিও, হয়তো সময় আমাদের আলাদা করছে। কিন্তু মন আলাদা করতে পারে নাই।",
    "দোয়া করি তুমি অনেক সুখী হও। আর তোমার প্রথম ছেলে সন্তান হলে আমার নামটা রাখিও আর মেয়ে হলে আমাদের কল্পনা জগতের সংসারের মেয়ের নাম রাখিও।🥹"
  ],
  sign: "চিরো বিদায়,\nআমার না পাওয়া ফুল 🌷🌻\n— রাতুল"
};

const SPECIAL = [
  { icon: "✉", title: "প্রথম মেসেজ", desc: "৭ এপ্রিল ২০২৫, দুপুর ১২টার সেই প্রথম বার্তা" },
  { icon: "📞", title: "প্রথম ভয়েস কল", desc: "ওপাশ থেকে মিষ্টি কোকিল কণ্ঠের প্রথম 'হ্যালো'" },
  { icon: "🧕", title: "বাদামী ওড়নায় ভিডিও কল", desc: "পড়তে পড়তে মিষ্টি হেসে তাকানো সেই মুখ" },
  { icon: "🎒", title: "ড্রেস না খুলেই মেসেজ", desc: "স্কুল-কলেজ থেকে ফিরে ড্রেস না খুলেই আগে টেক্সট" },
  { icon: "🌙", title: "রাত জেগে কথা বলা", desc: "পড়াশোনার হাজার ক্লান্তিতেও একমাত্র মানসিক শান্তি" },
  { icon: "🕊️", title: "ময়না পাখি ও টিয়া", desc: "রাহার আম্মু, কলিজার টুকরা আর এক কোটি চাঁদের রূপ" },
  { icon: "💍", title: "৯০ দশকের খাঁটি প্রেম", desc: "প্রতারণার যুগে এক পুরুষে আসক্ত নারীর পবিত্র ভালোবাসা" },
  { icon: "🌧️", title: "ভালোবাসার ঝগড়া", desc: "ছোট ছোট খুনসুটি, রাগ-অভিমান আর কান্নার স্মৃতি" },
  { icon: "🌷", title: "না পাওয়া ফুল", desc: "কল্পনা জগতের সংসার আর চিরদিনের না-বলা ভালোবাসা" }
];

const COUNTERS = [
  { value: "৩৬৭", label: "দিন এক সাথে (১ বছর)" },
  { value: "৮", label: "মাসের গভীর বন্ধন" },
  { value: "১", label: "টিমাত্র খাঁটি ভালোবাসা" },
  { value: "∞", label: "অগণিত অশ্রু ও স্মৃতি" }
];

/* ----------------------------------------------------------
   PART 2 — APPLICATION LOGIC
   ---------------------------------------------------------- */

(function () {
  "use strict";

  const $ = (s, r = document) => r.querySelector(s);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lowEnd = (navigator.hardwareConcurrency || 4) <= 4;

  // Populate last letter
  const last = LETTERS.find(l => l.isLast);
  if (last) {
    last.body = LAST_LETTER.lines;
    last.sign = LAST_LETTER.sign;
    last.date = LAST_LETTER.date;
  }

  /* ---------- helpers ---------- */
  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function paragraphs(container, lines) {
    container.textContent = "";
    lines.forEach(t => {
      const hl = t.startsWith("~");
      const clean = hl ? t.slice(1) : t;
      const p = el("p", hl ? "hl" : "", clean);
      container.appendChild(p);
    });
  }

  function signText(node, text) {
    node.textContent = "";
    String(text).split("\n").forEach((ln, i) => {
      if (i) node.appendChild(document.createElement("br"));
      node.appendChild(document.createTextNode(ln));
    });
  }

  /* ---------- build: timeline ---------- */
  const tl = $("#timeline");
  if (tl) {
    TIMELINE.forEach((t, i) => {
      const li = el("li", "tl-item reveal");
      const card = el("div", "tl-card");
      card.appendChild(el("p", "tl-date", t.date));
      card.appendChild(el("h3", "", t.title));
      card.appendChild(el("p", "", t.desc));

      const more = el("div", "tl-more");
      more.id = "tl-more-" + i;
      more.appendChild(el("p", "", t.more));

      const btn = el("button", "link-btn", "স্মৃতিটি পড়ুন ↓");
      btn.type = "button";
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-controls", more.id);
      btn.addEventListener("click", () => {
        const open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!open));
        btn.textContent = open ? "স্মৃতিটি পড়ুন ↓" : "বন্ধ করুন ↑";
        more.style.maxHeight = open ? "0" : more.scrollHeight + "px";
      });

      card.append(btn, more);
      li.appendChild(card);
      tl.appendChild(li);
    });
  }

  /* ---------- build: letters ---------- */
  const grid = $("#letterGrid");
  if (grid) {
    LETTERS.forEach((l, i) => {
      const isPoem = l.id === "poem";
      const c = el(
        "article",
        "letter-card reveal" + (l.isLast ? " letter-card--last" : "") + (isPoem ? " letter-card--poem" : "")
      );
      c.appendChild(el("p", "tl-date", l.date));
      c.appendChild(el("h3", "", l.title));
      c.appendChild(el("p", "", l.preview));

      const b = el("button", "btn", l.isLast ? "শেষ চিঠিটি পড়ুন 🕊️" : (isPoem ? "কবিতাটি পড়ুন 📜" : "চিঠিটি পড়ুন 💌"));
      b.type = "button";
      b.setAttribute("aria-label", l.title + " — চিঠিটি পড়ুন");
      b.addEventListener("click", () => (l.isLast ? openLast() : openReader(i, b)));

      c.appendChild(b);
      grid.appendChild(c);
    });
  }

  /* ---------- build: special memories ---------- */
  const sg = $("#specialGrid");
  if (sg) {
    SPECIAL.forEach(s => {
      const c = el("div", "sp-card reveal");
      const ic = el("div", "sp-icon", s.icon);
      ic.setAttribute("aria-hidden", "true");
      c.append(ic, el("h3", "", s.title));
      if (s.desc) {
        c.appendChild(el("p", "", s.desc));
      }
      sg.appendChild(c);
    });
  }

  /* ---------- build: counters ---------- */
  function toBnDigits(num) {
    const bn = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return String(num).replace(/[0-9]/g, d => bn[+d]);
  }

  const cg = $("#counters");
  if (cg) {
    cg.innerHTML = `
      <!-- Card 1: 10 April 2025 to 30 Sept 2026 -->
      <div class="counter reveal">
        <span class="counter__tag">১০ এপ্রিল ২০২৫ — ৩০ সেপ্টেম্বর ২০২৬</span>
        <div class="counter__num">৫৩৯ দিন</div>
        <div class="counter__label">সম্পর্কের সময় (যখন আমরা দূরে চলে আসি)</div>
        <p class="counter__desc">
          ১০ এপ্রিল ২০২৫ থেকে ৩০ সেপ্টেম্বর ২০২৬ — এই দিনটিতে নিয়তির টানে আমাদের মাঝে দূরত্ব চলে আসে... কিন্তু মন কখনো দূরে যায়নি।
        </p>
      </div>

      <!-- Card 2: 10 April 2025 to 30 Oct 2026 -->
      <div class="counter reveal">
        <span class="counter__tag">১০ এপ্রিল ২০২৫ — ৩০ অক্টোবর ২০২৬</span>
        <div class="counter__num">৫৬৯ দিন</div>
        <div class="counter__label">স্মৃতির দিন গণনা (১ বছর ৬ মাস ২০ দিন)</div>
        <p class="counter__desc">
          ৩০ অক্টোবর ২০২৬ পর্যন্ত দিনগুলো — যেখান থেকে স্মৃতির ডায়েরিতে জমা হয়ে আছে একল কোটি অশ্রু আর না-বলা কথা।
        </p>
      </div>

      <!-- Card 3: Live Ticking Love Timer Till Death -->
      <div class="counter counter--live reveal">
        <div class="live-badge">
          <span class="heart-beat-icon">💓</span>
          <span>জীবন্ত ও চিরন্তন ভালোবাসা • অবিরাম চলমান ঘড়ি</span>
        </div>
        <div class="counter__label" style="font-size: 1.25rem;">
          আমার ভালোবাসা চলার সময় (মৃত্যুর আগের মুহূর্ত পর্যন্ত)
        </div>
        <div class="live-clock">
          <div class="clock-unit">
            <span class="clock-val" id="liveDays">০</span>
            <span class="clock-lbl">দিন</span>
          </div>
          <span class="clock-colon">:</span>
          <div class="clock-unit">
            <span class="clock-val" id="liveHours">০০</span>
            <span class="clock-lbl">ঘণ্টা</span>
          </div>
          <span class="clock-colon">:</span>
          <div class="clock-unit">
            <span class="clock-val" id="liveMins">০০</span>
            <span class="clock-lbl">মিনিট</span>
          </div>
          <span class="clock-colon">:</span>
          <div class="clock-unit">
            <span class="clock-val clock-val--sec" id="liveSecs">০০</span>
            <span class="clock-lbl">সেকেন্ড</span>
          </div>
        </div>
        <p class="live-promise">
          "১০ এপ্রিল ২০২৫ দুপুর ১২টায় শুরু হওয়া ভালোবাসা আজীবন চলছে। আমার জীবনের শেষ নিঃশ্বাস ও মৃত্যুর আগের মুহূর্ত পর্যন্ত এই ভালোবাসার প্রতিটি সেকেন্ড অবিরাম ধুকপুক করবে... যা কখনো থামবে না।"
        </p>
      </div>

      <!-- Card 4: Infinity Till Death & Beyond -->
      <div class="counter reveal">
        <span class="counter__tag">Forever & Always</span>
        <div class="counter__num counter__num--infinity">∞</div>
        <div class="counter__label">মৃত্যুর আগের মুহূর্ত পর্যন্ত ও অনন্তকাল</div>
        <p class="counter__desc">
          সময় হয়তো আমাদের আলাদা করেছে, কিন্তু মন আলাদা করতে পারে নাই। মৃত্যুর আগ পর্যন্ত আমার ভালোবাসা এক বিন্দুও কমবে না।
        </p>
      </div>
    `;

    // Live ticking love clock engine
    const relStart = new Date("2025-04-10T12:00:00");
    function updateLoveClock() {
      const now = new Date();
      const diff = Math.max(0, now - relStart);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      const dEl = document.getElementById("liveDays");
      const hEl = document.getElementById("liveHours");
      const mEl = document.getElementById("liveMins");
      const sEl = document.getElementById("liveSecs");

      if (dEl) dEl.textContent = toBnDigits(days);
      if (hEl) hEl.textContent = toBnDigits(String(hours).padStart(2, "0"));
      if (mEl) mEl.textContent = toBnDigits(String(mins).padStart(2, "0"));
      if (sEl) sEl.textContent = toBnDigits(String(secs).padStart(2, "0"));
    }

    updateLoveClock();
    setInterval(updateLoveClock, 1000);
  }

  /* ---------- petals ---------- */
  (function petals() {
    if (reduced) return;
    const wrap = $("#petals");
    if (!wrap) return;
    const n = lowEnd ? 6 : 14;
    for (let i = 0; i < n; i++) {
      const p = el("span", "petal" + (i % 3 === 0 ? " petal--lav" : ""));
      p.style.left = Math.random() * 100 + "%";
      p.style.setProperty("--drift", Math.random() * 120 - 40 + "px");
      p.style.animationDuration = 16 + Math.random() * 14 + "s";
      p.style.animationDelay = -Math.random() * 25 + "s";
      p.style.transform = "scale(" + (0.7 + Math.random() * 0.8) + ")";
      wrap.appendChild(p);
    }
  })();

  /* ---------- scroll reveal ---------- */
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach(n => io.observe(n));

  /* ---------- navigation ---------- */
  const navToggle = $("#navToggle"),
    navLinks = $("#navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "মেনু বন্ধ করুন" : "মেনু খুলুন");
    });
    navLinks.addEventListener("click", e => {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const enterBtn = $("#enterBtn");
  if (enterBtn) {
    enterBtn.addEventListener("click", () => {
      const target = $("#memories");
      if (target) {
        target.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
      }
    });
  }

  // Active link highlight
  const links = navLinks ? [...navLinks.querySelectorAll("a")] : [];
  const secObs = new IntersectionObserver(
    es => {
      es.forEach(e => {
        if (e.isIntersecting) {
          links.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + e.target.id));
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px" }
  );
  ["home", "memories", "letters", "special", "last-letter", "farewell"].forEach(id => {
    const elId = document.getElementById(id);
    if (elId) secObs.observe(elId);
  });

  // Page progress bar
  const bar = $("#pageProgress");
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking || !bar) return;
      ticking = true;
      requestAnimationFrame(() => {
        const h = document.documentElement;
        bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100 + "%";
        ticking = false;
      });
    },
    { passive: true }
  );

  /* ---------- letter reader modal ---------- */
  const reader = $("#reader"),
    sheet = $("#readerSheet"),
    rScroll = $("#readerScroll");
  const rProg = $("#readerProgress");
  let current = 0,
    lastFocus = null;
  const readable = LETTERS.map((l, i) => i).filter(i => !LETTERS[i].isLast);

  function renderLetter(i, dir) {
    const l = LETTERS[i];
    current = i;
    $("#readerDate").textContent = l.date;
    $("#readerTitle").textContent = l.title;
    paragraphs($("#readerBody"), l.body);
    signText($("#readerSign"), l.sign || "");

    const pos = readable.indexOf(i);
    $("#readerCount").textContent = pos + 1 + " / " + readable.length;
    $("#prevLetter").disabled = pos <= 0;
    $("#nextLetter").disabled = pos >= readable.length - 1;

    rScroll.style.scrollBehavior = "auto";
    rScroll.scrollTop = 0;
    rScroll.style.scrollBehavior = "";
    if (rProg) rProg.style.width = "0";

    if (dir && !reduced) {
      sheet.classList.remove("turn-next", "turn-prev");
      void sheet.offsetWidth;
      sheet.classList.add(dir > 0 ? "turn-next" : "turn-prev");
    }
  }

  function openReader(i, trigger) {
    lastFocus = trigger || document.activeElement;
    renderLetter(i);
    reader.hidden = false;
    document.body.classList.add("no-scroll");
    $("#readerClose").focus();
  }

  function closeReader() {
    reader.hidden = true;
    document.body.classList.remove("no-scroll");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function step(d) {
    const pos = readable.indexOf(current) + d;
    if (pos >= 0 && pos < readable.length) renderLetter(readable[pos], d);
  }

  if (reader) {
    $("#readerClose").addEventListener("click", closeReader);
    const closeEl = reader.querySelector("[data-close]");
    if (closeEl) closeEl.addEventListener("click", closeReader);
    $("#prevLetter").addEventListener("click", () => step(-1));
    $("#nextLetter").addEventListener("click", () => step(1));
    rScroll.addEventListener(
      "scroll",
      () => {
        const max = rScroll.scrollHeight - rScroll.clientHeight;
        if (rProg) rProg.style.width = (max > 0 ? (rScroll.scrollTop / max) * 100 : 100) + "%";
      },
      { passive: true }
    );
  }

  /* ---------- the last letter overlay ---------- */
  const veil = $("#veil"),
    vBody = $("#veilBody"),
    vSign = $("#veilSign");
  let timers = [],
    lastTrigger = null;

  function clearTimers() {
    timers.forEach(clearTimeout);
    timers = [];
  }

  function openLast() {
    lastTrigger = document.activeElement;
    $("#veilDate").textContent = LAST_LETTER.date;
    vBody.textContent = "";
    vSign.hidden = true;
    vSign.textContent = "";
    $("#veilSkip").hidden = false;
    veil.hidden = false;
    document.body.classList.add("no-scroll");
    $("#veilClose").focus();
    dust();

    const lineEls = LAST_LETTER.lines.map(t => {
      const hl = t.startsWith("~");
      const clean = hl ? t.slice(1) : t;
      const p = el("p", "line" + (hl ? " hl" : ""), clean);
      vBody.appendChild(p);
      return p;
    });

    if (reduced) {
      showAll(lineEls);
      return;
    }

    let delay = 1400;
    lineEls.forEach(p => {
      timers.push(
        setTimeout(() => {
          p.classList.add("is-on");
          p.scrollIntoView({ behavior: "smooth", block: "center" });
        }, delay)
      );
      delay += 2300 + Math.min(p.textContent.length * 20, 2400);
    });
    timers.push(setTimeout(showSign, delay + 400));
  }

  function showAll(lineEls) {
    clearTimers();
    (lineEls || [...vBody.children]).forEach(p => p.classList.add("is-on"));
    showSign();
  }

  function showSign() {
    signText(vSign, LAST_LETTER.sign);
    vSign.hidden = false;
    vSign.style.opacity = "0";
    vSign.style.transition = "opacity 2s ease";
    requestAnimationFrame(() => (vSign.style.opacity = "1"));
    $("#veilSkip").hidden = true;
  }

  function closeLast() {
    clearTimers();
    veil.hidden = true;
    const dustBox = $("#veilDust");
    if (dustBox) dustBox.textContent = "";
    document.body.classList.remove("no-scroll");
    if (lastTrigger && lastTrigger.focus) lastTrigger.focus();
  }

  function dust() {
    if (reduced) return;
    const box = $("#veilDust");
    if (!box) return;
    box.textContent = "";
    for (let i = 0; i < (lowEnd ? 8 : 16); i++) {
      const d = el("span", "dust");
      d.style.left = Math.random() * 100 + "%";
      d.style.animationDuration = 10 + Math.random() * 10 + "s";
      d.style.animationDelay = -Math.random() * 10 + "s";
      box.appendChild(d);
    }
  }

  const openLastBtn = $("#openLast");
  if (openLastBtn) openLastBtn.addEventListener("click", openLast);
  const veilCloseBtn = $("#veilClose");
  if (veilCloseBtn) veilCloseBtn.addEventListener("click", closeLast);
  const veilSkipBtn = $("#veilSkip");
  if (veilSkipBtn) veilSkipBtn.addEventListener("click", () => showAll());

  /* ---------- keyboard controls ---------- */
  document.addEventListener("keydown", e => {
    const readerOpen = reader && !reader.hidden;
    const veilOpen = veil && !veil.hidden;

    if (e.key === "Escape") {
      if (veilOpen) closeLast();
      else if (readerOpen) closeReader();
      else if (navLinks && navLinks.classList.contains("is-open")) navToggle.click();
    }
    if (readerOpen) {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    }
  });
})();
