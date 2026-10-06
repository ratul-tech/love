import React, { useState, useEffect } from 'react';

interface TimelineItem {
  date: string;
  title: string;
  desc: string;
  more: string;
}

interface LetterItem {
  id: string;
  date: string;
  title: string;
  preview: string;
  body: string[];
  sign: string;
  isLast?: boolean;
}

const TIMELINE: TimelineItem[] = [
  {
    date: '৭ এপ্রিল ২০২৫',
    title: 'প্রথম পরিচয় ও প্রথম বার্তা',
    desc: 'দুপুর ঠিক ১২টায় তোমার সেই প্রথম মেসেজ। একটি ফেসবুক কমেন্টের উত্তর দিয়ে শুরু হয়েছিল জীবনের সেরা অধ্যায়।',
    more: 'আমি যদি ওই ভিডিওতে কমেন্ট না করতাম, বা তুমি যদি সেটা না দেখতে কিংবা রিপ্লাই না দিতে—তবে আজ আমরা দুজন হয়তো দুজনের মতো ব্যস্ত থাকতাম। দুপুর ১২টার সেই প্রথম মেসেজ পেয়ে মনে হচ্ছিল তোমাকে আমি অনেক আগে থেকেই চিনি।'
  },
  {
    date: '১০ এপ্রিল ২০২৫',
    title: 'ভালোবাসার শুরু (লং ডিসটেন্সের শপথ)',
    desc: 'বুকের ভেতর পাথর চেপে শেষমেশ বলেই ফেললাম "আমি তোমাকে ভালোবাসি"। দূরত্বের মাঝেও বিশ্বাসের বন্ধন গড়ে উঠল।',
    more: '৯ই এপ্রিলে নিয়েছিলাম কঠিন সিদ্ধান্ত। মনে ভয় ছিল যদি তুমি কথা বলা বন্ধ করে দাও। কিন্তু ১০ই এপ্রিল রাতে তুমি রাজি হলে। ওই রাতটা ছিল আমার জীবনের সবচেয়ে আনন্দময় রাত। সেদিন শপথ করেছিলাম এই যুগেও নব্বই দশকের আদিকালের খাঁটি ভালোবাসা টিকিয়ে রাখব।'
  },
  {
    date: 'প্রথম ভয়েস কল',
    title: 'মিষ্টি কোকিল কণ্ঠের প্রথম ডাক',
    desc: 'জীবনের প্রথম কোনো মেয়ের সাথে ফোনে কথা বলা। ওপাশ থেকে সেই মিষ্টি কোকিল কণ্ঠের "হ্যালো" শুনে পুরো ফিদা!',
    more: 'তোমাকে কীভাবে সম্মান দেব, কী জিজ্ঞাসা করব—সব গুলিয়ে ফেলেছিলাম। শুধু তোমার ওই মায়াবী কণ্ঠটা এক নিমেষেই আমার পুরো মন কেড়ে নিয়েছিল।'
  },
  {
    date: 'প্রথম ভিডিও কল',
    title: 'বাদামী ওড়নায় মায়াবী রূপ',
    desc: 'বাদামী রঙের ওড়না মাথায় দিয়ে টেবিলে পড়তে পড়তে কল দিয়েছিলে। অপলক তাকিয়ে এক অদ্ভুত প্রশান্তি অনুভব করেছিলাম।',
    more: 'আমি ভেবেছিলাম সাধারণ ক্রাশ খাব, কিন্তু হলো তার চাইতেও বেশি কিছু—নিজের ভেতর অদ্ভুত প্রশান্তি অনুভব করলাম। যতবার দেখি, ততবারই তোমার রূপে নতুন করে মুগ্ধ হই।'
  },
  {
    date: '৮ মাস পূর্তি (ডিসেম্বর ২০২৫)',
    title: '৮ মাসের পথচলা ও মানসিক শান্তি',
    desc: 'হাজার ঝগড়া আর অভিমানের পরও দিনশেষে এক কোটি চাঁদের চেয়েও মূল্যবান আমার ময়না পাখি।',
    more: 'পড়াশোনার তীব্র প্রেসারে যখন মন খারাপ থাকত, তোমার "ময়না" ডাকটা শুনলেই সব ক্লান্তি দূর হয়ে যেত। তুমি আমার মানসিক শান্তি। তুমি তোমার বাবার পর আমাকে সবচেয়ে বেশি বিশ্বাস করো—আমি সবসময় সেই বিশ্বাসের মর্যাদা ধরে রাখার চেষ্টা করেছি।'
  },
  {
    date: '৩১ ডিসেম্বর ২০২৫',
    title: '৩১ নাইটের চিঠি (থার্টি ফার্স্ট নাইট)',
    desc: 'বছরের শেষ রাতে দূরত্বের মাঝেও অটুট বিশ্বাস আর পরিণত হয়ে এগিয়ে যাওয়ার প্রার্থনা।',
    more: 'এই বছরটা আমাদের জন্য সহজ ছিল না। তবু আমরা কথা বলেছি, বোঝার চেষ্টা করেছি, ধৈর্য ধরেছি। কষ্ট হলে চুপ করে না থাকার এবং সময়ের ওপর বিশ্বাস রাখার প্রতিশ্রুতি নিয়েছিলাম।'
  },
  {
    date: '১০ এপ্রিল ২০২৬',
    title: 'এক বছরের ভালোবাসা (৩৬৭ দিন)',
    desc: 'স্কুল-কলেজ থেকে ড্রেস না খুলেই মেসেজ দেওয়ার পাগলামি আর সারাজীবন পাশে থাকার স্বর্ণাক্ষরে লেখা অঙ্গীকার।',
    more: 'এসএসসি পরীক্ষার সময় পরীক্ষা দিয়েই স্কুলের ড্রেস না খুলেই আগে তোমাকে মেসেজ দিতাম। কলেজ থেকেও ফিরে আগে তোমায় মেসেজ দিতাম। এক পুরুষে আসক্ত তোমার মতো খাঁটি নারী পাওয়া আমার জীবনের সেরা সৌভাগ্য ছিল।'
  },
  {
    date: '১ জুন ২০২৬',
    title: 'আমার কলিজার জন্মদিন',
    desc: 'অমূল্য সম্পদকে আগলে রাখার মতো করে ভালোবাসা এবং সারাজীবন একসাথে দুষ্টামি করার দোয়া।',
    more: 'সে না থাকলে হয়তো আমি আজও নিজেকে গুরুত্বহীন ভাবতাম। কিন্তু তুমি সেটা হতে দেও নি। তোমাতেই আমি শুরু, আবার তোমাতেই আমি শেষ।'
  },
  {
    date: 'সেপ্টেম্বর / অক্টোবর ২০২৬',
    title: 'কঠিন বিদায় ও শেষ অধ্যায়',
    desc: 'টাকার কাছে হেরে যাওয়া, চোখের জলের অভিশাপ আর না-ফেরার দেশের চিরবিদায়।',
    more: 'যে সেপ্টেম্বর-অক্টোবর মাস আমার থেকে আমার ময়নাকে ছিনিয়ে নিয়েছে। হয়তো সময় আমাদের আলাদা করেছে, কিন্তু হৃদয় আলাদা করতে পারে নি।'
  }
];

const LETTERS: LetterItem[] = [
  {
    id: 'birthday',
    date: '১ জুন ২০২৬',
    title: 'জন্মদিনের শুভেচ্ছা চিঠি',
    preview: 'আজ ১ জুন ২০২৬, দিনটা তেমন কিছু না। শুধু আমার জন্য একটু স্পেশাল দিন। কারণটা হলো আমার কলিজা টুকরার জন্মদিন...',
    body: [
      'আজ ১ জুন ২০২৬,\nদিনটা তেমন কিছু না। শুধু আমার জন্য একটু স্পেশাল দিন। কারণটা তুমি হয়তো জানো। কারণটা হলো আমার কলিজা টুকরার জন্মদিন আজকে। সে না থাকলে হয়তো আমি আজও নিজেকে গুরুত্বহীন ভাবতাম। কিন্তু তুমি সেটা হতে দেও নি। তুমি আমায় আগলে রেখেছো। যেমনটা একজন ধনী ব্যক্তি তার অমূল্য সম্পদ যেভাবে নিরাপত্তার সাথে রাখে।',
      'এই যুগেও এসে তোমার মতো মেয়ে পাওয়া ভাগ্যের ব্যাপার। যেখানে খাঁটি ভালোবাসার কোনো নাম নেই, সেখানে তুমি আমায় খাঁটি মনে ভালোবাসো। তোমার কোনো তুলনা হয় না। তুমি আসলেই সেরা। তোমায় দেখলে আমার কাছে মনে হয় কি যেনো এক বিশ্ব সুন্দরী দেখেছি।',
      'তোমাতেই আমি শুরু , আবার তোমাতেই আমি শেষ। তুমি আমার ভালোবাসা।',
      'এই যা মূল কথা তো বলি নাই। শুভ জন্মদিন প্রিয় ❤️🫶 দোয়া করি এইভাবেই সারাজীবন এক সাথে থেকে যাবো। একসাথে দুষ্টামি করবো। একসাথেই হাসবো। নিজের যত্ন নিও।',
      '~Love you moyna pakhi',
      '~Ummmmmmmmmmmmmmmah',
      '~Happy Birthday to you 😊💝'
    ],
    sign: '— তোমার ময়না\nরাতুল'
  },
  {
    id: 'night31',
    date: '৩১ ডিসেম্বর ২০২৫',
    title: '৩১ রাতের চিঠি (থার্টি ফার্স্ট নাইট)',
    preview: '১০ এপ্রিল ২০২৫। এই দিন থেকেই আমাদের লং ডিসটেন্স রিলেশনশিপের যাত্রা শুরু। দূরত্ব ছিল, কিন্তু মন আর বিশ্বাসের মাঝে ফাঁক পড়েনি...',
    body: [
      '১০ এপ্রিল ২০২৫। এই দিন থেকেই আমাদের লং ডিসটেন্স রিলেশনশিপের যাত্রা শুরু। দূরত্ব ছিল, আছে, কিন্তু মন আর বিশ্বাসের মাঝে কখনো ফাঁক পড়েনি। আজ ৩১ ডিসেম্বর রাত, বছরের শেষ দিন। এই শেষ রাতটা তোমাকে মনে করেই লিখছি।',
      'এই বছরটা আমাদের জন্য সহজ ছিল না। তবু আমরা কথা বলেছি, বোঝার চেষ্টা করেছি, ধৈর্য ধরেছি। এটুকুই আমাদের শক্তি। সামনে পথ আরও দীর্ঘ, আরও দায়িত্বের। তাই শুধু অনুভূতি নয়, বুঝে চলাটাই সবচেয়ে জরুরি।',
      'নিজের স্বপ্নগুলোকে গুরুত্ব দিও। পড়াশোনা, কাজ, নিজের উন্নতি কখনো থামিও না। কষ্ট হলে চুপ করে থেকো না, আবার রাগে ভুল সিদ্ধান্তও নিও না। বিশ্বাস রাখো, সময়ের ওপর, নিজের ওপর, আর আমাদের ওপর।',
      'নতুন বছরে চাই আমরা আরও পরিণত হব, আরও শান্ত হব। কম কথা হলেও গভীর হোক। দূরত্ব যেন আমাদের দুর্বল না করে, বরং শক্ত করে।',
      '~নতুন বছরের জন্য তোমার জন্য রইল দোয়া, শান্তি আর সঠিক পথে এগিয়ে যাওয়ার শক্তি।',
      '~শুভ নববর্ষ।'
    ],
    sign: '— রাতুল'
  },
  {
    id: 'month8',
    date: 'ডিসেম্বর ২০২৫',
    title: '৮ মাস পূর্তির চিঠি',
    preview: 'আজ আমাদের ৮ মাসের পরিচয়। ৮ মাস আগে তুমি আমাকে চিনতে না আমি তোমাকেও চিনতাম না। দুজন দুজনের নামও জানতাম না...',
    body: [
      'আজ আমাদের ৮ মাসের পরিচয়। ৮ মাস আগে তুমি আমাকে চিনতে না আমি তোমাকেও চিনতাম না। দুজন দুজনের প্রতি কোন মায়া ছিল না এমনকি আমাদের নাম গুলোও জানতাম না।',
      'কিন্তু ভাগ্যের এমন এক খেলা যে তোমার সাথে আমার পরিচয়। হয়তোবা তুমি সেই কমেন্টের রিপ্লাই না দিলে আজকে হয়তোবা তোমার মত এরকম একটা লাইফ পার্টনার পেতাম না। হয়তোবা আমি গ্রুপটা না খুললেই তোমার মত লাইফ পার্টনারের কমেন্টটা পাইতাম না।',
      'যাইহোক তুমি আমার লাইফে সবচেয়ে স্পেশাল একজন মানুষ। জানো কি তুমি? বর্তমানে তো আমি অনেক প্রেসারে থাকি পড়াশুনার। তুমি কিন্তু এটা ঠিকই জানো। পড়তে পড়তে আমার ভালো লাগে না একটুও। কিন্তু তোমার ময়না ডাকটা শুনলেই আমার সব ক্লান্তি দূর হয়ে যায় 🥰 কিভাবে বলবো তোমায়? তুমি আমার মানসিক শান্তি ☺️ তোমার সাথে হাজার ঝগড়া করি, হাজার মারামারি করি, হাজার কথা কাটাকাটি করি দিনশেষে তোমাকেই ভালোবাসি। 🫶',
      'আমি কখনো ভাবতে পারি নাই এরকম ভাবে আমি কোন মেয়ের মায়াতে পড়বো। যে বর্তমান যুগে রিলেশনে অধিকাংশই ডাবল টাইমিং করে সেই যুগে আমি এরকম একটা নারী পেয়েছি। এর থেকে বড় ভাগ্য আর কার আছে তুমিই বলো? আমার ময়না আমার জন্য কতটা পাগল তারে দেখলেই বোঝা যায়।',
      'এটা মনে রাখবা ময়না তুমি অন্য কারো কাছে মূল্যহীন নাকি মূল্যবান সেটা চিন্তার বিষয় না আমার কাছে তুমি সবসময় একটা মূল্যবান রত্নের মত। এই দেখো আমি তোমাকে কেন চাঁদ বলি না। কারণ সবারই চাঁদ আছে সবার যেটা থাকবে আমার ওটা থাকার দরকার নেই। আমার যিনি আছে উনি এক কোটি চাঁদের সৌন্দর্য থেকেও বেশি।',
      'এই যে দেখো আমাদের দুজনের ভালোবাসা। তুমি আমায় ছাড়া কিছু বুঝনা আমি তোমায় ছাড়া কিছুই বুঝিনা। দুজন দুজনকে পাগলের মতো ভালোবাসি। আবার ঠিক সেইরকমই ঝগড়াও করি 👀 তবে ময়না পাখি এই ঝগড়াটা ভালোবাসার ঝগড়া। তোমার সাথে দুষ্টামি করার ঝগড়া।',
      'তোমার প্রতিটা হাসি আমার মনটাকে ছুঁয়ে দেয় 🥹 তোমার এত মায়াবী হাসি 😩 কি বলেছে বুঝাবো বুঝতেই পারতেছি না।',
      'আমি ময়না জানি আমি তোমার কাছে একজন বিশ্বস্ত পুরুষ। তুমি তোমার বাবার পরে ঠিক আমাকে অনেক বিশ্বাস করো। আমি সব সময় তোমারে বিশ্বাসের মর্যাদাটাকে ধরে রাখবো। দুনিয়া উল্টে গেলেও আমি কখনোই তোমাকে হারাবো না।',
      'ময়না পাখি সব সময় দুজন দুজনের কথা শুনে চলবো। বুঝছো পাখি?',
      '~তুমি আমার ময়না ☺️\nতুমি আমার পাখি 🥰\nতুমি আমার টিয়া 😩\nতুমি আমার বউ 💕\nতুমি আমার কলিজা 😘\nতুমি আমার রাহার আম্মু 🥹\nতুমিই আমার সব',
      '~I love you so much moyna pakhi 🥹 I love you so much.',
      'আমি তোমায় অনেক ভালোবাসি,, অনেক অনেক অনেক ভালোবাসি। নিজের থেকেও বেশি ☺️',
      'দোয়া করি তুমি সব সময় সুস্থ থাকো। কোন বিপদ আপদ যেন না হয়।☺️'
    ],
    sign: '— তোমার রাতুল'
  },
  {
    id: 'year1',
    date: '১০ এপ্রিল ২০২৬',
    title: 'এক বছরের ভালোবাসার চিঠি (৩৬৭ দিন)',
    preview: 'আজ ১০ই এপ্রিল ২০২৬। ঠিক ৩৬৭ দিন আগে, দুপুর ঠিক ১২টায় তোমার সেই প্রথম মেসেজ। কে জানতো ওই একটা দিন জীবন বদলে দেবে...',
    body: [
      'আজ ১০ই এপ্রিল ২০২৬ 📅।\nঠিক ৩৬৭ দিন আগে, দুপুর ঠিক ১২টায় তোমার সেই প্রথম মেসেজ 🕛। কে জানতো ওই একটা দিন আমাদের জীবনটা এভাবে বদলে দেবে? আজও আমরা একসাথে আছি, ভাবতেই কেমন লাগে! 🥹✨',
      'আমি কখনো কল্পনাও করিনি তুমি আমার এত আপন কেউ হয়ে যাবে। ৭ই এপ্রিল ২০২৫-এ ভেবেছিলাম তুমি হয়তো শুধুই একজন "অনলাইন ফ্রেন্ড" হয়ে থাকবে 🤝। কিন্তু ভাগ্যের কী অপূর্ব লীলাখেলা 🤭, আজ তুমি আমার জীবনসঙ্গী! 💑',
      'জানো, আমি রিলেশন করতে খুব ভয় পেতাম 😰। সবসময় ভাবতাম, মানুষটা যদি আমার জন্য পারফেক্ট না হয়? আমার ভালোবাসা যদি সে না বোঝে? এই সব দুশ্চিন্তায় কখনো কারো সাথে জড়াইনি। কিন্তু তোমার সাথে পরিচয় হওয়াটা ছিল একদম "কো-ইন্সিডেন্স" ✨। আমি যদি ওই ভিডিওতে কমেন্ট না করতাম 📱, বা তুমি যদি সেটা না দেখতে, কিংবা রিপ্লাই না দিতে—তবে আজ আমরা দুজন হয়তো দুজনের মতো ব্যস্ত থাকতাম। আজকের এই সুন্দর মুহূর্তটা কখনোই আসতো না 🌸।.....',
      'ভাগ্য হয়তো আমাদের মেলাতেই চেয়েছিল। তোমার চোখে কমেন্টটা পড়লো আর তুমি রিপ্লাই দিলে... তারপর এলো সেই ৭ই এপ্রিল ২০২৫, দুপুর ১২টা 🕛। তোমার প্রথম মেসেজ পেয়ে আমার ভেতরে কেমন যেন একটা অন্যরকম অনুভূতি হয়েছিল, মনে হচ্ছিল যেন তোমাকে আমি আগে থেকেই চিনি! 😅 তারপর শুরু হলো আমাদের রাত জেগে টেক্সট করা আর একে অপরকে জানা 🌙।',
      'আমি জানি তোমার জীবনে অনেক দুঃখ ছিল 😔, কিন্তু হয়তো সেই কষ্টের পরেই তুমি ভালোবাসার আসল মর্মটা বুঝতে পেরেছ। ৯ই এপ্রিল ২০২৫-এ আমি একটা কঠিন সিদ্ধান্ত নিয়েছিলাম—তোমাকে আমার জীবনসঙ্গী করে রাখার 💍। কিন্তু মনে মনে খুব ভয় ছিল, যদি তুমি রাজি না হও? যদি কথা বলা বন্ধ করে দাও? মনে হচ্ছিল বুকে একটা বিশাল পাথর চেপে আছে 🗜️। কিন্তু শেষমেশ ১০ই এপ্রিল ২০২৫ -এ বলেই ফেললাম, "আমি তোমাকে ভালোবাসি" ❤️💖। প্রথমে একটু না বললেও, ধীরে ধীরে তুমি রাজি হলে। ওই রাতটা ছিল আমার জীবনের সবথেকে আনন্দময় রাত! ✨🌌',
      'তোমাকে প্রপোজ করার সময় আমি একটা শপথ নিয়েছিলাম—যদি তুমি রাজি হও, তবে আমার সবটুকু দিয়ে তোমাকে ভালোবাসবো এবং দুনিয়াকে দেখাবো যে এই যুগেও "আদিকালের ভালোবাসা" টিকে আছে ❤️। আমি কতটুকু পেরেছি জানি না, তবে এটুকু জানি—আমি তোমাকে অনেক অনেক ভালোবাসি। 😍',
      '~প্রথম ভয়েস কল 📞:\nজীবনের প্রথম কোনো মেয়ের সাথে ফোনে কথা বলা! তুমি যখন মেসেঞ্জারে কল দিলে আর ওপাশ থেকে সেই মিষ্টি কোকিল কণ্ঠের "হ্যালো" শুনলাম, আমি তো পুরো ফিদা! 😍 তোমাকে কীভাবে সম্মান দেব, কী জিজ্ঞাসা করবো—সব গুলিয়ে ফেলেছিলাম। শুধু তোমার ওই মায়াবী কণ্ঠটা মন কেড়ে নিয়েছিল 🎶।',
      '~প্রথম ভিডিও কল 📹:\nমনে আছে? তুমি বাদামী রঙের ওড়না মাথায় দিয়ে টেবিলে পড়তে পড়তে কল দিয়েছিলে 🧕। আমিও টেবিলে পড়ার মাঝেই কথা বলছিলাম। তোমাকে প্রথমবার দেখার পর আমি জাস্ট থমকে গিয়েছিলাম! 😮 আমি ভেবেছিলাম ক্রাশ খাবো, কিন্তু হলো তার চাইতেও বেশি কিছু—নিজের ভেতর এক অদ্ভুত প্রশান্তি অনুভব করলাম। যতবার দেখি, ততবারই তোমার রূপে নতুন করে মুগ্ধ হই। প্রতিবারই নতুন করে ক্রাশ খাই! 😍✨',
      'এসএসসি পরীক্ষার সময় পরীক্ষা দিয়ে এসেই স্কুলের ড্রেস না খুলেই আগে তোমাকে মেসেজ দিতাম 🎒। সেই আবেগটা আজও আছে। এখন কলেজ থেকে ফিরেও আগে তোমায় মেসেজ দেই, তারপর অন্য কাজ 📱। আমাদের এই দুষ্টু-মিষ্টি ঝগড়া, ছোট ছোট রাগ-অভিমান—সবই আমার কাছে খুব প্রিয়। তোমাকে রাগাতে আমার খুব ভালো লাগে, কারণ রাগী অবস্থায় তোমাকে অনেক কিউট লাগে! 🤭💢',
      'যে যুগে এক পুরুষে আসক্ত নারী পাওয়া প্রায় অসম্ভব, সেখানে আমি তোমাকে পেয়েছি 👸। যে কিনা তার প্রিয় মানুষের সাফল্যে আনন্দ পায়, তার কষ্টে নিজেও কাঁদে। আমি গর্ব করে বলতে পারি, আমি একজন ভাগ্যবান পুরুষ যে এই প্রতারণার যুগে এসেও ৯০ দশকের মতো খাঁটি ভালোবাসা পেয়েছে। 💖🕊️',
      'ময়না, তুমি একদম চিন্তা করো না 🌷। আমি একদিন প্রতিষ্ঠিত হবোই, ইনশাআল্লাহ। তোমার বাবা-মাকে রাজি করাবোই এবং তোমাকে নিজের করে ঘরে তুলবো—এটা স্বর্ণাক্ষরে লিখে রাখতে পারো ✍️। শুধু একটু ধৈর্য ধরো আর আমার জন্য অপেক্ষা করো। সফল তো একদিন হবোই, তখন তোমার জন্য শুধু কয়েকটি ফুল নয়, পুরো একটা ফুলের বাগান এনে দেব 💐🏡।',
      '~নিজের খেয়াল রাখতে একদম ভুলবে না। সবসময় সাবধানে থাকবে। বাইরে গেলে সব সময় খেয়াল রাখবে যেন সবকিছু ঠিকঠাক থাকে। 🛡️✨\nআমি তোমাকে অনেক অনেক অনেক ভালোবাসি, ময়না! ❤️♾️'
    ],
    sign: 'ইতি,\nতোমার ময়না\nরাতুল ✍️👦'
  },
  {
    id: 'poem',
    date: 'হৃদয়ের স্মৃতি',
    title: 'শান্তিতে ঘুমাইয়ো তুমি (একটি কবিতা)',
    preview: 'শান্তিতে ঘুমাইয়ো তুমি, আর হবে না দেখা! পথের কাটা তুইলা নিলাম! রাস্তা তোমার ফাকা...',
    body: [
      '~শান্তিতে ঘুমাইয়ো তুমি\nআর হবে না দেখা!\nপথের কাটা তুইলা নিলাম!\nরাস্তা তোমার ফাকা',
      '~যে যাই বলুক কান দিওনা\nদেখিও তোমার দিন!\nলিখে রেখো এই আমার কথা\nতোমার মনে পড়বেই একদিন! 🫂😅🥹❤️🩹'
    ],
    sign: '— তোমার রাতুল'
  },
  {
    id: 'last',
    date: 'সেপ্টেম্বর / অক্টোবর ২০২৬',
    title: 'শেষ চিঠি',
    isLast: true,
    preview: 'বেঁচে থাকতে পারব নাকি পারব না নিজেও জানি না। তবে তোমার প্রতি ভালোবাসা এক বিন্দুও কমবে না...',
    body: [],
    sign: ''
  }
];

const LAST_LETTER_LINES = [
  'আমি কি বলবো কিছুই বুঝতে পারছি না। বেঁচে থাকতে পারব নাকি পারব না নিজেও জানি না। তবে আমার যাই হোক না কেন, তোমার প্রতি আমার ভালোবাসা এক বিন্দুও কমবে না। নব্বই দশকের মানুষের ভালোবাসার মতো আমি তোমাকে ভালোবাসি।',
  '~আমি বলতে চাই, আমি তোমাকে অনেক অনেক অনেক ভালোবাসি 🥹❤️🩹',
  'আমার কষ্ট হয়। কিন্তু এই কষ্ট কেউ বুঝতে পারে না। কেউই বিশ্বাস করে না আমার এই অবস্থার কথা। কি আর করার? আজ টাকার কাছে আমি হেরে গেলাম 😅',
  'আমি চেষ্টা করি কষ্ট না পাওয়ার জন্য। কিন্তু আমার প্রতিটা মুহূর্তে মুহূর্তে তোমার কথা মনে পড়ে। তোমাকে কেমনে বুঝাই আমি তোমাকে ভালোবাসি?',
  'আজকে এই পোস্ট করে আর অনলাইনে আসবো না। কিন্তু আমি তো লজ্জাহীন মানুষ। তোমার খবর নিতে আমি ঠিকই আসবো। হয় পাখির বেশে নয়তো প্রজাপতির বেশে 😅',
  'জানো আমার সবথেকে প্রিয় মাস ছিল জুন। কারণ এই মাসে তোমার জন্মদিন। মানে আমার কলিজার জন্মদিন 🥹 আর সবথেকে ঘৃণ্য করি এই সেপ্টেম্বর আর অক্টোবর মাসকে 😅 কারণ এই মাস আমার থেকে আমার ময়নাকে ছিনিয়ে নিয়েছে। 😅',
  'আমার নোট করে যাওয়া অনেক স্মৃতি খুঁজে পেয়েছি আমি। ওইগুলা না হয় কমেন্টে দিয়ে চিরদিনের জন্য না ফেরার দেশে চলে যাবো নে পাখি?',
  'আমি তোমার প্রতি কিছু বলতে চাই.... নিজের যত্ন নিবে পাখি। ঠিকমতো খাওয়া দাওয়া করবে। পানি বেশি বেশি খাবে নয়তো পরে আগের মতো সমস্যা দেখা দিবে। নামাজ পড়বে ঠিকমতো। নামাজ ছাড়বে না।',
  'আর শীতের সময় গোসল করতে ভুলবে না 👀 তুমি তো শীতের সময় গোসলকে হারাম করে দেও 😁 ঠিকমতো গোসল করবে। অল্পতেই মানিয়ে নেওয়ার চেষ্টা করবে।',
  'তোমাকে বিদায় জানাতে আমার একটুও মন চায় না। আমার হৃদয় বলে "তুই পারবি তো বুকের মাঝে থেকে তাকে বিদায় জানাতে??😅" আমি তো জানি যতই চেষ্টা করি না কেন আমি তোমাকে আমার বুকের মাঝে থেকে সরাতে পারব না।',
  'হয়তো আজকে তোমার দেওয়া অভিশাপ কাজে লেগেছে। যখন তোমার সাথে ঝগড়া হতো, তখন তুমি আমাকে কান্না করতে করতে অভিশাপ দিতে, "আমার এই চোখের পানি পড়তেছে না? একদিন তুমিও আমার মতো হাজার গুণ কষ্ট পাইয়া কান্না করবা" মনে আছে পাখি?🥹 আজ তোমার সেই কষ্ট পাওয়ার অভিশাপ পূরণ হয়েছে পাখি। 🥹',
  'আমি তোমাকে শেষবারের মতো বলতে চাই আমি তোমাকে অনেক ভালোবাসি। জীবনে যদি দেখা হয় কোনোভাবে তাহলে স্বামী পাশে থাকলে উপেক্ষা করে চলে যেও। আর যদি একা থাকো তখন তাহলে আমার কাছে এসে বলিও পাখি তুমি কেমন আছো....😅',
  'বিদায় জানাতে মন চাচ্ছে না। তারপরও আমি বিদায় জানাই পাখি। আমার নাম্বার তো আছেই তোমার কাছে। যদি কোনোদিন প্রয়োজন পড়ে তাহলে আমায় কল দিতে ভুলে যেও না।',
  '~মনে রাখিও, হয়তো সময় আমাদের আলাদা করছে। কিন্তু মন আলাদা করতে পারে নাই।',
  'দোয়া করি তুমি অনেক সুখী হও। আর তোমার প্রথম ছেলে সন্তান হলে আমার নামটা রাখিও আর মেয়ে হলে আমাদের কল্পনা জগতের সংসারের মেয়ের নাম রাখিও।🥹'
];

const LAST_LETTER_SIGN = 'চিরো বিদায়,\nআমার না পাওয়া ফুল 🌷🌻\n— রাতুল';

const SPECIAL = [
  { icon: '✉', title: 'প্রথম মেসেজ', desc: '৭ এপ্রিল ২০২৫, দুপুর ১২টার সেই প্রথম বার্তা' },
  { icon: '📞', title: 'প্রথম ভয়েস কল', desc: 'ওপাশ থেকে মিষ্টি কোকিল কণ্ঠের প্রথম "হ্যালো"' },
  { icon: '🧕', title: 'বাদামী ওড়নায় ভিডিও কল', desc: 'পড়তে পড়তে মিষ্টি হেসে তাকানো সেই মুখ' },
  { icon: '🎒', title: 'ড্রেস না খুলেই মেসেজ', desc: 'স্কুল-কলেজ থেকে ফিরে ড্রেস না খুলেই আগে টেক্সট' },
  { icon: '🌙', title: 'রাত জেগে কথা বলা', desc: 'পড়াশোনার হাজার ক্লান্তিতেও একমাত্র মানসিক শান্তি' },
  { icon: '🕊️', title: 'ময়না পাখি ও টিয়া', desc: 'রাহার আম্মু, কলিজার টুকরা আর এক কোটি চাঁদের রূপ' },
  { icon: '💍', title: '৯০ দশকের খাঁটি প্রেম', desc: 'প্রতারণার যুগে এক পুরুষে আসক্ত নারীর পবিত্র ভালোবাসা' },
  { icon: '🌧️', title: 'ভালোবাসার ঝগড়া', desc: 'ছোট ছোট খুনসুটি, রাগ-অভিমান আর কান্নার স্মৃতি' },
  { icon: '🌷', title: 'না পাওয়া ফুল', desc: 'কল্পনা জগতের সংসার আর চিরদিনের না-বলা ভালোবাসা' }
];

function toBnDigits(num: number | string): string {
  const bn = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, d => bn[+d]);
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedTimeline, setExpandedTimeline] = useState<number | null>(null);
  const [readerIndex, setReaderIndex] = useState<number | null>(null);
  const [veilOpen, setVeilOpen] = useState(false);
  const [veilRevealedCount, setVeilRevealedCount] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Live Love Clock State
  // Calculated from 10 April 2025 at night (9:00 PM)
  const [liveTime, setLiveTime] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const relStart = new Date('2025-04-10T21:00:00');
    const updateTime = () => {
      const now = new Date();
      const diff = Math.max(0, now.getTime() - relStart.getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      setLiveTime({ days, hours, mins, secs });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      const progress = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Veil progressive reveal effect
  useEffect(() => {
    if (!veilOpen) {
      setVeilRevealedCount(1);
      return;
    }
    const timer = setInterval(() => {
      setVeilRevealedCount(prev => {
        if (prev >= LAST_LETTER_LINES.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 2400);

    return () => clearInterval(timer);
  }, [veilOpen]);

  const readableLetters = LETTERS.filter(l => !l.isLast);

  const openLetter = (idx: number) => {
    const letter = LETTERS[idx];
    if (letter.isLast) {
      setVeilOpen(true);
    } else {
      const pos = readableLetters.findIndex(l => l.id === letter.id);
      setReaderIndex(pos >= 0 ? pos : 0);
    }
  };

  return (
    <div className="relative min-h-screen text-[#2b2529]">
      {/* Floating Petals */}
      <div className="petals" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <span
            key={i}
            className={`petal ${i % 3 === 0 ? 'petal--lav' : ''}`}
            style={{
              left: `${(i * 8.3) % 100}%`,
              animationDuration: `${16 + (i % 5) * 3}s`,
              animationDelay: `${-i * 2.2}s`,
              transform: `scale(${0.7 + (i % 4) * 0.2})`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <header className="nav">
        <div className="nav__inner">
          <a href="#home" className="nav__brand">
            <span className="flower" aria-hidden="true">❀</span>
            <span>ময়নার স্মৃতির ডায়েরি</span>
          </a>

          <button
            className={`nav__toggle ${mobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="মেনু খুলুন"
          >
            <span />
            <span />
            <span />
          </button>

          <nav className="nav__links">
            <a href="#home">Home</a>
            <a href="#memories">Timeline</a>
            <a href="#letters">Letters</a>
            <a href="#poem-spotlight">Poem</a>
            <a href="#special">Memories</a>
            <a href="#numbers">Relation Days</a>
            <a href="#last-letter">Last Letter</a>
            <a href="#farewell">Farewell</a>
          </nav>
        </div>
        {mobileMenuOpen && (
          <nav className="nav__mobile-menu">
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#memories" onClick={() => setMobileMenuOpen(false)}>Timeline</a>
            <a href="#letters" onClick={() => setMobileMenuOpen(false)}>Letters</a>
            <a href="#poem-spotlight" onClick={() => setMobileMenuOpen(false)}>Poem</a>
            <a href="#special" onClick={() => setMobileMenuOpen(false)}>Memories</a>
            <a href="#numbers" onClick={() => setMobileMenuOpen(false)}>Relation Days</a>
            <a href="#last-letter" onClick={() => setMobileMenuOpen(false)}>Last Letter</a>
            <a href="#farewell" onClick={() => setMobileMenuOpen(false)}>Farewell</a>
          </nav>
        )}
        <div className="nav__progress" style={{ width: `${scrollProgress}%` }} />
      </header>

      <main>
        {/* ============ HERO ============ */}
        <section className="hero" id="home">
          <div className="hero__inner">
            <span className="flower" aria-hidden="true">✿</span>
            <h1 className="hero__title">আমার ময়নার জন্য কিছু না বলা কথা</h1>
            <p className="hero__subtitle">কিছু গল্প শেষ হয়ে গেলেও, কিছু অনুভূতি সারাজীবন বেঁচে থাকে।</p>
            <p className="stamp">
              <span>১০ এপ্রিল ২০২৫</span> <i aria-hidden="true">→</i> <span>২০২৬</span>
            </p>
            <p className="hand hero__hand">
              "কিছু মানুষ জীবনে থেকে যায় না, কিন্তু হৃদয়ের প্রতিটি স্পন্দনে আর স্মৃতির পাতায় আজীবন থেকে যায়।"
            </p>
            <a href="#memories" className="btn btn--primary">
              স্মৃতিগুলো স্পর্শ করুন 🕊️
            </a>
          </div>
          <div className="scroll-hint" aria-hidden="true" />
        </section>

        {/* ============ TIMELINE ============ */}
        <section className="section" id="memories">
          <header className="section__head">
            <p className="eyebrow">Memory Timeline</p>
            <h2>স্মৃতির অমূল্য পাতা</h2>
            <p className="section__sub">৭ই এপ্রিলের প্রথম বার্তা থেকে বিদায়ের শেষ প্রহর পর্যন্ত প্রতিটি মুহূর্ত</p>
            <div className="divider" aria-hidden="true"><span>❀</span></div>
          </header>

          <ol className="timeline">
            {TIMELINE.map((item, idx) => (
              <li key={idx} className="tl-item">
                <div className="tl-card">
                  <p className="tl-date">{item.date}</p>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <button
                    className="link-btn"
                    onClick={() => setExpandedTimeline(expandedTimeline === idx ? null : idx)}
                  >
                    {expandedTimeline === idx ? 'বন্ধ করুন ↑' : 'স্মৃতিটি পড়ুন ↓'}
                  </button>
                  {expandedTimeline === idx && (
                    <div className="tl-more" style={{ maxHeight: '400px' }}>
                      <p>{item.more}</p>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ============ LETTERS ============ */}
        <section className="section section--tint" id="letters">
          <header className="section__head">
            <p className="eyebrow">Letters of Love & Sorrow</p>
            <h2>চিঠির সংগ্রহ</h2>
            <p className="section__sub">জন্মদিন, থার্টি ফার্স্ট নাইট, ৮ মাস ও ১ বছর পূর্তির না-বলা ভালোবাসার চিঠি</p>
            <div className="divider" aria-hidden="true"><span>❀</span></div>
          </header>

          <div className="letter-grid">
            {LETTERS.map((letter, idx) => {
              const isPoem = letter.id === 'poem';
              return (
                <article
                  key={letter.id}
                  className={`letter-card ${letter.isLast ? 'letter-card--last' : ''} ${isPoem ? 'letter-card--poem' : ''}`}
                >
                  <p className="tl-date">{letter.date}</p>
                  <h3>{letter.title}</h3>
                  <p>{letter.preview}</p>
                  <button
                    className="btn"
                    onClick={() => openLetter(idx)}
                  >
                    {letter.isLast ? 'শেষ চিঠিটি পড়ুন 🕊️' : isPoem ? 'কবিতাটি পড়ুন 📜' : 'চিঠিটি পড়ুন 💌'}
                  </button>
                </article>
              );
            })}
          </div>
        </section>

        {/* ============ POEM SPOTLIGHT ============ */}
        <section className="section" id="poem-spotlight">
          <header className="section__head">
            <p className="eyebrow">A Bittersweet Poem</p>
            <h2>তোমার জন্য লেখা একটি কবিতা</h2>
            <div className="divider" aria-hidden="true"><span>❀</span></div>
          </header>
          <div className="poem-box">
            <p>
              {`শান্তিতে ঘুমাইয়ো তুমি
আর হবে না দেখা!
পথের কাটা তুইলা নিলাম!
রাস্তা তোমার ফাকা

যে যাই বলুক কান দিওনা
দেখিও তোমার দিন!
লিখে রেখো এই আমার কথা
তোমার মনে পড়বেই একদিন!
🫂😅🥹❤️🩹`}
            </p>
            <p className="hand" style={{ textAlign: 'right', marginTop: '1.2rem', fontSize: '1.1rem' }}>
              — তোমার রাতুল
            </p>
          </div>
        </section>

        {/* ============ SPECIAL MEMORIES ============ */}
        <section className="section section--tint" id="special">
          <header className="section__head">
            <p className="eyebrow">Unforgettable Moments</p>
            <h2>যে স্মৃতিগুলো কখনো মুছে যাবে না</h2>
            <p className="section__sub">ছোট ছোট খুনসুটি, রাগ-অভিমান আর প্রথম দেখার মায়াবী স্মৃতি</p>
            <div className="divider" aria-hidden="true"><span>❀</span></div>
          </header>
          <div className="special-grid">
            {SPECIAL.map((item, idx) => (
              <div key={idx} className="sp-card">
                <div className="sp-icon" aria-hidden="true">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============ COUNTERS ============ */}
        <section className="section" id="numbers">
          <header className="section__head">
            <p className="eyebrow">Relation Days & Eternal Love</p>
            <h2>আমাদের সম্পর্কের দিন ও ভালোবাসার সময়</h2>
            <p className="section__sub">১০ এপ্রিল ২০২৫ থেকে দূরত্বের ক্ষণ এবং মৃত্যুর আগের মুহূর্ত পর্যন্ত অবিরাম ভালোবাসার জীবন্ত ঘড়ি</p>
            <div className="divider" aria-hidden="true"><span>❀</span></div>
          </header>

          <div className="counters" id="counters">
            {/* Card 1: 10 April 2025 to 30 Sept 2026 */}
            <div className="counter">
              <span className="counter__tag">১০ এপ্রিল ২০২৫ — ৩০ সেপ্টেম্বর ২০২৬</span>
              <div className="counter__num">৫৩৯ দিন</div>
              <div className="counter__label">সম্পর্কের সময় (যখন আমরা দূরে চলে আসি)</div>
              <p className="counter__desc">
                ১০ এপ্রিল ২০২৫ থেকে ৩০ সেপ্টেম্বর ২০২৬ — এই দিনটিতে নিয়তির টানে আমাদের মাঝে দূরত্ব চলে আসে... কিন্তু মন কখনো দূরে যায়নি।
              </p>
            </div>

            {/* Card 2: 10 April 2025 to 30 Oct 2026 */}
            <div className="counter">
              <span className="counter__tag">১০ এপ্রিল ২০২৫ — ৩০ অক্টোবর ২০২৬</span>
              <div className="counter__num">৫৬৯ দিন</div>
              <div className="counter__label">স্মৃতির দিন গণনা (১ বছর ৬ মাস ২০ দিন)</div>
              <p className="counter__desc">
                ৩০ অক্টোবর ২০২৬ পর্যন্ত দিনগুলো — যেখান থেকে স্মৃতির ডায়েরিতে জমা হয়ে আছে একল কোটি অশ্রু আর না-বলা কথা।
              </p>
            </div>

            {/* Card 3: Live Ticking Love Timer Till Death */}
            <div className="counter counter--live">
              <div className="live-badge">
                <span className="heart-beat-icon">💓</span>
                <span>জীবন্ত ও চিরন্তন ভালোবাসা • অবিরাম চলমান ঘড়ি</span>
              </div>
              <div className="counter__label" style={{ fontSize: '1.25rem' }}>
                আমার ভালোবাসা চলার সময় (মৃত্যুর আগের মুহূর্ত পর্যন্ত)
              </div>
              <div className="live-clock">
                <div className="clock-unit">
                  <span className="clock-val">{toBnDigits(liveTime.days)}</span>
                  <span className="clock-lbl">দিন</span>
                </div>
                <span className="clock-colon">:</span>
                <div className="clock-unit">
                  <span className="clock-val">{toBnDigits(String(liveTime.hours).padStart(2, '0'))}</span>
                  <span className="clock-lbl">ঘণ্টা</span>
                </div>
                <span className="clock-colon">:</span>
                <div className="clock-unit">
                  <span className="clock-val">{toBnDigits(String(liveTime.mins).padStart(2, '0'))}</span>
                  <span className="clock-lbl">মিনিট</span>
                </div>
                <span className="clock-colon">:</span>
                <div className="clock-unit">
                  <span className="clock-val clock-val--sec">{toBnDigits(String(liveTime.secs).padStart(2, '0'))}</span>
                  <span className="clock-lbl">সেকেন্ড</span>
                </div>
              </div>
              {/* User target element: updated from 'dupur 12 ta' to 'rate' */}
              <p className="live-promise">
                "১০ এপ্রিল ২০২৫ রাতে শুরু হওয়া ভালোবাসা আজীবন চলছে। আমার জীবনের শেষ নিঃশ্বাস ও মৃত্যুর আগের মুহূর্ত পর্যন্ত এই ভালোবাসার প্রতিটি সেকেন্ড অবিরাম ধুকপুক করবে... যা কখনো থামবে না।"
              </p>
            </div>

            {/* Card 4: Infinity Till Death & Beyond */}
            <div className="counter">
              <span className="counter__tag">Forever & Always</span>
              <div className="counter__num counter__num--infinity">∞</div>
              <div className="counter__label">মৃত্যুর আগের মুহূর্ত পর্যন্ত ও অনন্তকাল</div>
              <p className="counter__desc">
                সময় হয়তো আমাদের আলাদা করেছে, কিন্তু মন আলাদা করতে পারে নাই। মৃত্যুর আগ পর্যন্ত আমার ভালোবাসা এক বিন্দুও কমবে না।
              </p>
            </div>
          </div>
        </section>

        {/* ============ LAST LETTER ============ */}
        <section className="last" id="last-letter">
          <div className="last__wrap">
            <p className="eyebrow">The Final Goodbye</p>
            <h2 className="last__title">শেষ চিঠি</h2>
            <p className="last__sub">টাকার কাছে হেরে যাওয়া, চোখের জলের অভিশাপ আর না-ফেরার দেশের ডাক...</p>

            <article className="last-card">
              <span className="clip" aria-hidden="true" />
              <span className="quote quote--open" aria-hidden="true">“</span>
              <p className="last-card__line hand">
                "চিরো বিদায় আমার না পাওয়া ফুল... হয়তো সময় আমাদের আলাদা করেছে, কিন্তু মন আলাদা করতে পারে নাই।"
              </p>
              <button
                className="btn btn--gold"
                onClick={() => setVeilOpen(true)}
              >
                শেষ চিঠিটি খুলুন 🕊️
              </button>
              <span className="quote quote--close" aria-hidden="true">”</span>
            </article>
          </div>
        </section>

        {/* ============ FAREWELL ============ */}
        <section className="farewell" id="farewell">
          <div className="farewell__inner">
            <span className="flower" aria-hidden="true">✿</span>
            <h2>সব গল্পের শেষ একরকম হয় না।</h2>
            <p className="farewell__text">
              কিছু মানুষ আমাদের জীবনের অংশ হয়ে থাকে,<br />
              আর কিছু মানুষ আমাদের জীবনের এক অবিস্মরণীয় অধ্যায় হয়ে যায়।<br />
              অধ্যায় শেষ হলেও মায়াবী স্মৃতিগুলো হৃদয়ে আজীবন ধুকপুক করে।
            </p>
            <p className="hand farewell__care">নিজের যত্ন নিও পাখি... ঠিকমতো খাওয়া দাওয়া করো।</p>
            <p className="farewell__text">
              দূরত্ব হয়তো দুটো মানুষকে আলাদা করতে পারে,<br />
              কিন্তু একল কোটি চাঁদের থেকেও সুন্দর স্মৃতিগুলোকে কখনো মুছে দিতে পারে না।
            </p>
            <p className="signature hand">
              ইতি,<br />
              তোমার ময়না<br />
              <strong>রাতুল ✍️👦</strong>
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>রাতুল ও তার ময়না পাখির স্মৃতির আর্কাইভ · <span aria-hidden="true">❀</span></p>
      </footer>

      {/* ============ LETTER READER MODAL ============ */}
      {readerIndex !== null && readableLetters[readerIndex] && (
        <div className="reader" role="dialog" aria-modal="true">
          <div className="reader__backdrop" onClick={() => setReaderIndex(null)} />
          <div className="reader__sheet">
            <div className="reader__bar">
              <div style={{ flex: 1, fontFamily: 'var(--font-serif)', fontWeight: 500 }}>
                {readableLetters[readerIndex].title}
              </div>
              <button
                className="icon-btn"
                onClick={() => setReaderIndex(null)}
                aria-label="চিঠি বন্ধ করুন"
              >
                ✕
              </button>
            </div>
            <div className="reader__scroll">
              <article className="paper">
                <span className="clip" aria-hidden="true" />
                <p className="stamp stamp--small">{readableLetters[readerIndex].date}</p>
                <h3 className="paper__title">{readableLetters[readerIndex].title}</h3>
                <div className="divider" aria-hidden="true"><span>❀</span></div>
                <div className="paper__body">
                  {readableLetters[readerIndex].body.map((p, pIdx) => {
                    const isHl = p.startsWith('~');
                    const text = isHl ? p.slice(1) : p;
                    return (
                      <p key={pIdx} className={isHl ? 'hl' : ''}>
                        {text}
                      </p>
                    );
                  })}
                </div>
                <p className="paper__sign hand">
                  {readableLetters[readerIndex].sign.split('\n').map((ln, lnIdx) => (
                    <React.Fragment key={lnIdx}>
                      {ln}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </article>
            </div>
            <div className="reader__nav">
              <button
                className="btn btn--ghost"
                disabled={readerIndex <= 0}
                onClick={() => setReaderIndex(prev => (prev !== null && prev > 0 ? prev - 1 : prev))}
              >
                ← আগের চিঠি
              </button>
              <span className="reader__count">
                {readerIndex + 1} / {readableLetters.length}
              </span>
              <button
                className="btn btn--ghost"
                disabled={readerIndex >= readableLetters.length - 1}
                onClick={() => setReaderIndex(prev => (prev !== null && prev < readableLetters.length - 1 ? prev + 1 : prev))}
              >
                পরের চিঠি →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ============ THE LAST LETTER OVERLAY ============ */}
      {veilOpen && (
        <div className="veil" role="dialog" aria-modal="true">
          <div className="veil__sheet">
            <button
              className="icon-btn veil__close"
              onClick={() => setVeilOpen(false)}
              aria-label="চিঠি বন্ধ করুন"
            >
              ✕
            </button>
            <div className="veil__scroll">
              <article className="paper paper--gold">
                <span className="quote quote--open" aria-hidden="true">“</span>
                <h3 className="paper__title">শেষ চিঠি</h3>
                <p className="stamp stamp--small">সেপ্টেম্বর / অক্টোবর ২০২৬</p>
                <div className="divider" aria-hidden="true"><span>❀</span></div>
                <div className="paper__body">
                  {LAST_LETTER_LINES.slice(0, veilRevealedCount).map((line, lIdx) => {
                    const isHl = line.startsWith('~');
                    const text = isHl ? line.slice(1) : line;
                    return (
                      <p key={lIdx} className={`line ${isHl ? 'hl' : ''}`}>
                        {text}
                      </p>
                    );
                  })}
                </div>
                {veilRevealedCount >= LAST_LETTER_LINES.length ? (
                  <p className="paper__sign hand">
                    {LAST_LETTER_SIGN.split('\n').map((ln, lnIdx) => (
                      <React.Fragment key={lnIdx}>
                        {ln}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                ) : (
                  <button
                    className="btn btn--ghost veil__skip"
                    onClick={() => setVeilRevealedCount(LAST_LETTER_LINES.length)}
                  >
                    পুরোটা একসাথে দেখুন
                  </button>
                )}
              </article>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
