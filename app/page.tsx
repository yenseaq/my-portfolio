"use client";

import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { 
  Linkedin, Trophy, Music, Heart, Send, Youtube, 
  Star, BookOpen, Activity, GraduationCap, Users, Lightbulb, Phone, Mail, Target, Download, Briefcase
} from "lucide-react";

export default function Home() {
  // Настройка курсора
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <div className="min-h-screen bg-[#0f1115] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      
      {/* КУРСОР */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-white-200 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ x: cursorXSpring, y: cursorYSpring }}
      />

      {/* GLOW EFFECTS (ЯРКИЕ ПЯТНА) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-black/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-red-600/20 rounded-full blur-[100px]" />
        <div className="absolute top-[60%] left-[-5%] w-[600px] h-[600px] bg-black/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] bg-red-700/30 rounded-full blur-[130px]" />
      </div>

      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-16 pb-32 relative z-10">
        {/* HERO SECTION */}
        <section className="relative mb-24 flex flex-col md:flex-row items-center justify-between gap-10 z-10">
          <div className="flex-1 order-2 md:order-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-medium">
              <Star size={14} /> @yenseaq
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-[6vw] font-black tracking-tighter uppercase leading-[0.9] mb-6">
              Dariya <br /> 
              <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-800 bg-[length:200%_auto] animate-gradient text-transparent bg-clip-text">
  Murzakhmetova
</span>
            </h1>
            <p className="text-lg md:text-xl text-red-400 font-bold mb-4">Junior Student at NIS Astana</p>
            <p className="text-gray-100 text-base md:text-lg font-light leading-relaxed max-w-xl italic mx-auto md:mx-0">
              IB DP Candidate. Highly motivated student with strong academic performance and a deep interest in studying the world.
            </p>
          </div>

          <div className="relative flex-shrink-0 order-1 md:order-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-100 via-red-600 to-red-800 rounded-full blur-2xl opacity-30"></div>
            <div className="relative w-[240px] h-[240px] md:w-[380px] md:h-[380px] p-1 rounded-full bg-gradient-to-tr from-red-100 via-red-300 to-red-800">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0f1115]">
                <img src="/amina.jpg" className="w-full h-full object-cover" alt="Dariya" />
              </div>
            </div>
          </div>
        </section>

{/* MUSIC SECTION WITH LINES */}
<div className="max-w-6xl mx-auto px-4 my-16">
  {/* Верхняя линия */}
  <div className="border-t border-red-900/30 mb-8"></div>

  <div className="flex flex-col md:flex-row items-center gap-8">
    {/* Текст слева */}
    <div className="flex items-center gap-3 min-w-[200px]">
      <div className="p-2 bg-white/5 rounded-lg">
        <Music size={20} className="text-red-700" />
      </div>
      <span className="text-sm font-medium tracking-widest uppercase text-gray-300">
        Let's start <br /> with a song
      </span>
    </div>

    {/* Сам виджет (тонкий и на всю оставшуюся длину) */}
    <div className="flex-1 w-full">
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-[#121212]">
        <iframe
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/track/3KkXRkHbMCARz0aVfEt68P?utm_source=generator" 
          width="100%"
          height="80"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>

  {/* Нижняя линия */}
  <div className="border-t border-red-900/30 mt-8"></div>
</div>

        {/* 1. ACADEMICS */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8 text-blue-400 border-b border-red-900/30 pb-4">
            <GraduationCap size={28} />
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">1. Academics</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/[0.03] p-6 md:p-8 rounded-3xl border border-white/5">
              <p className="text-gray-300 mb-4 text-sm md:text-base italic">I am an IB DP student approved for the following subjects:</p>
              <div className="space-y-4">
                <div>
                  <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest block mb-1">Higher Level (HL):</span>
                  <p className="text-gray-200 font-bold text-sm md:text-base">Economics, Geography, English B</p>
                </div>
                <div>
                  <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest block mb-1">Standard Level (SL):</span>
                  <p className="text-gray-200 font-bold text-sm md:text-base">Russian Language & Literature, Math AA, Biology</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6 bg-blue-500/5 p-6 md:p-8 rounded-3xl border border-blue-500/20 text-center md:text-left">
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">GPA</p>
                <p className="text-3xl md:text-4xl font-black text-white">4.96 / 5.00</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">SAT Score</p>
                <p className="text-3xl md:text-4xl font-black text-blue-500">1560</p>
                <p className="text-blue-400 text-xs font-medium italic">(EBRW 770 | Math 790)</p>
              </div>
            </div>
          </div>
        </section>

{/* НОВАЯ РАЗДЕЛЯЮЩАЯ ЛИНИЯ ПОСЛЕ ACADEMICS */}
        <div className="flex justify-center my-16 w-full">
          <div className="w-1/2 h-px bg-gradient-to-r from-transparent via-red-800 to-transparent" />
        </div>

        {/* ТВОЙ ВЫТЯНУТЫЙ БЛОК BACKGROUND */}
        <div className="flex flex-col items-center justify-center w-full mb-32">
          
          <div className="w-full max-w-5xl relative p-10 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-green-500" />
            <h3 className="text-2xl font-bold text-green-500 mb-8 uppercase tracking-[0.3em]">Background & Aspirations</h3>
            
            <div className="text-gray-300 space-y-6 italic font-light leading-relaxed text-lg md:text-xl">
              <p>
                A Kazakh female student born in 2008 into a middle-income family. Fluent in <span className="text-white font-semibold">Kazakh, Russian, and English</span>.
              </p>
              <p>
                Passionate about Music, Sports, and Academics, with an intention to Major in <span className="text-white font-semibold">Finance & Global Economics</span>.
              </p>
              <p>
                I aspire to address global challenges, particularly improving living standards and humanitarian care in my region.
              </p>
            </div>
          </div>

          {/* ЛИНИЯ И ОТСТУП ПЕРЕД ЦИТАТОЙ */}
          <div className="flex justify-center my-24 w-full">
            <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-red-800 to-transparent" />
          </div>

{/* 2. БЛОК: ЦИТАТА (ПОЛНАЯ РОЗОВАЯ РАМКА) */}
<div className="w-full max-w-3xl flex flex-col items-center mx-auto my-32">
  
  {/* Ячейка цитаты с полной обводкой */}
  <div className="relative w-full p-12 rounded-3xl border-2 border-pink-600/50 bg-white/[0.03] backdrop-blur-2xl shadow-[0_0_40px_rgba(244,114,182,0.15)] mb-8 transition-all hover:border-red-600">
    
    {/* Текст цитали */}
    <p className="text-2xl md:text-4xl font-light italic text-red-50 leading-tight text-center tracking-tight">
      "Don't spend time beating on a wall hoping to transform it into a door."
    </p>
  </div>

            
            {/* АВТОР ВНЕ КОРОБКИ (Розовато-белый) */}
            <p className="text-red-100/60 font-bold tracking-[0.5em] uppercase text-sm md:text-base">
              — Coco Chanel
            </p>
          </div>
         </div>

        {/* 2. MUSIC */}
        <section className="mb-24 border-t border-red-900/30 pt-16">
          <div className="flex items-center gap-4 mb-8 text-red-400">
            <Music size={28} />
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-white">2. School of Arts №2</h2>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.02]">
            <div className="grid md:grid-cols-3">
              <div className="md:col-span-2 p-6 md:p-10 order-2 md:order-1">
                <p className="text-blue-300 font-bold text-lg mb-3">September 2019 – June 2024</p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed italic font-light">
                 Completed specialized music education in Folk Instruments <span className="text-white font-bold italic"> (Dombyra)</span>. Performed as a <span className="text-white font-bold italiс"> Principal Musician </span> in the orchestra, showcasing Kazakh cultural heritage.
                </p>
              </div>
              <div className="md:col-span-1 h-[250px] md:h-full order-1 md:order-2">
                <img src="/muzikalka.jpg" className="w-full h-full object-cover" alt="Music" />
              </div>
            </div>
          </div>
        </section>
     {/* 3. ECONOMICS ACHIEVEMENTS + QAZ ECONOMICS */}
<section className="mb-32">
          <div className="flex items-center gap-4 mb-8 text-yellow-500 border-b border-red-900/30 pb-12">
            <Trophy size={28} />
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-white">3. Economics Achievements</h2>
          </div>

          <div className="space-y-12">
            {/* ГРИД: md:grid-cols-2 ставит их ВМЕСТЕ в один ряд на компах */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xl italic font-light mb-12">
              
              {/* Карточка 1 */}
              <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-yellow-500" />
                <div className="relative z-10 text-gray-300">
                  Asian Economics Olympiad (2025): <span className="text-white font-bold not-italic ml-2">9th place</span>
                </div>
              </div>
              
              {/* Карточка 2 */}
              <div className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-yellow-500" />
                <div className="relative z-10 text-gray-300">
                  Major Economics Olympiad (2025): <span className="text-white font-bold not-italic ml-2">Finalist</span>
                </div>
              </div>
            </div>

    </div> {/* Конец грида */}
            <div className="max-w-4xl space-y-1 mb-10">
               <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic pb-10">
                 Co-Author of an independent research paper on <span className="text-white font-bold">Market-Led Growth and the Development Assistance</span>, analyzing development strategies and the effectiveness of economic policy.
               </p>
              <a href="/ESC25614_International Aid & Export - led Growth.pdf" download 
    className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-red-600/20 hover:border-red-600/50 transition-all group">
    <span className="text-xs font-bold uppercase tracking-widest text-white">See Paper</span>
    <Download size={14} className="text-red-500 group-hover:scale-110 transition-transform" />
  </a>
</div>
<div className="w-full h-[1px] bg-red-600/20 mt-4"></div>

               {/* QAZ ECONOMICS — ПОЛНЫЙ ТЕКСТ ТУТ */}
               <div className="mt-12 p-8 md:p-10 bg-blue-500/5 rounded-[2.5rem] border border-white/10">
                  <h4 className="text-blue-400 font-black uppercase text-sm mb-2 tracking-[0.2em]">Qaz Economics — Educational Organization</h4>
                  <p className="text-gray-500 text-xs italic mb-8 uppercase font-bold tracking-widest">August 2024 – Present</p>
                  <ul className="space-y-6 text-gray-300 text-lg md:text-xl font-light italic">
                    <li className="flex gap-4">
                      <span className="text-blue-500 font-bold">•</span> 
                      <span>Developing and manage digital content for an economics education platform aimed at students and young learners</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-blue-500 font-bold">•</span> 
                      <span>Translating complex economic concepts into clear, engaging, and accessible materials</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="text-blue-500 font-bold">•</span> 
                      <span>Designing content strategies to increase outreach, engagement, and public understanding of economics</span>
                    </li>
                  </ul>
               </div>
        </section>

        {/* 4. VOLUNTEER EXPERIENCE — ПОЛНЫЙ ТЕКСТ ТУТ */}
        <section className="mb-32 border-t border-red-900/30 pt-16">
          <div className="flex items-center gap-4 mb-10 text-red-500">
            <Heart size={32} />
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-white">4. Volunteer Experience</h2>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
            <div className="grid md:grid-cols-3 items-center">
              <div className="md:col-span-1 h-[300px] md:h-[450px] overflow-hidden">
                <img 
                  src="/rfa.jpg" 
                  className="w-full h-full object-cover" 
                  alt="Volunteer" 
                />
              </div>
              <div className="md:col-span-2 p-8 md:p-14">
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light italic">
                  I have volunteered <span className="text-white font-bold underline decoration-red-500/30 underline-offset-4">over 120 hours</span> at large public events, supporting crowd coordination and safety management. 
                  <br /><br />
                  Events include international concerts and festivals such as <span className="text-white font-bold">Jennifer Lopez, Backstreet Boys, Comic Con, and more</span>. 
                  <br /><br />
                  Through this experience, I developed strong teamwork, responsibility, and decision-making skills in fast-paced, high-pressure environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SPORTS & LEADERSHIP */}
        <section className="mb-24 border-t border-red-900/30 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-8 rounded-[2.5rem] bg-orange-500/5 border border-orange-500/10">
              <Activity className="text-orange-500 mb-4" size={28} />
              <h4 className="text-xl font-bold uppercase italic text-white mb-2 underline decoration-orange-500/20 underline-offset-8">Varsity Volleyball</h4>
              <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-4">Middle Blocker | From Grade 8 (2022)</p>
              <p className="text-gray-400 italic text-sm leading-relaxed font-light">Long-term commitment, discipline, and competitive performance in interschool competitions.</p>
            </div>
            <div className="p-8 rounded-[2.5rem] bg-yellow-500/5 border border-yellow-500/10">
              <Lightbulb className="text-yellow-400 mb-4" size={28} />
              <h4 className="text-xl font-bold uppercase italic text-white mb-2 underline decoration-yellow-500/20 underline-offset-8">Leadership</h4>
              <p className="text-yellow-400 text-[10px] font-bold uppercase tracking-widest mb-4">Event Coordinator</p>
              <p className="text-gray-400 italic text-sm leading-relaxed font-light">Coordinated school events at Zhas & Healthy Club and EcoClub. Logistics and planning.</p>
            </div>
          </div>
        </section>

  <section className="max-w-6xl mx-auto px-6 mb-24">
  <div className="flex items-center gap-4 mb-10 text-white border-b border-red-900/30 pb-4">
    {/* Основная иконка секции тоже может быть синей, если хочешь */}
    <Briefcase size={28} className="text-blue-500" /> 
    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">Work & Programs</h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    
    {/* Aualine Intern */}
    <div className="group">
      <div className="bg-white/[0.03] p-8 rounded-3xl border border-white/5 hover:border-red-600/50 transition-all mb-6">
        <h3 className="text-2xl font-bold text-white mb-1">Aualine Intern</h3>
        <p className="text-red-500 font-bold mb-4 uppercase text-xs tracking-widest">Sales Department | Jan 2026 - Present</p>
        <ul className="text-gray-400 space-y-3 text-sm">
          <li className="flex gap-2"><span>•</span> An international company that produces ink from air pollution. </li>
          <li className="flex gap-2"><span>•</span> Assisted the sales team with client outreach and communication.</li>
          <li className="flex gap-2"><span>•</span> Conducted market research and organized sales data for lead generation</li>
        </ul>
      </div>
      {/* МЕСТО ДЛЯ ФОТО AUALINE */}
      <div className="rounded-2xl overflow-hidden border-2 border-white/5 aspect-video bg-gray-900">
         <img src="/aualine.jpg" alt="Aualine Internship" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>

    {/* IRIS Winter Scholars */}
    <div className="group">
      <div className="bg-white/[0.03] p-8 rounded-3xl border border-white/5 hover:border-red-600/50 transition-all mb-6">
        <h3 className="text-2xl font-bold text-white mb-1">IRIS Winter Scholars</h3>
        <p className="text-red-500 font-bold mb-4 uppercase text-xs tracking-widest">International Law | Jan 22 - 26, 2026</p>
        <ul className="text-gray-400 space-y-3 text-sm">
          <li className="flex gap-2"><span>•</span> 4-day online program on diplomacy, human rights, and global cooperation.</li>
          <li className="flex gap-2"><span>•</span> Engaged in expert-led sessions and collaborative activities.</li>
          <li className="flex gap-2"><span>•</span> Developed knowledge of international law and global awareness.</li>
        </ul>
      </div>
      {/* МЕСТО ДЛЯ ФОТО IRIS */}
      <div className="rounded-2xl overflow-hidden border-2 border-white/5 aspect-video bg-gray-900">
         <img src="/iris.jpg" alt="IRIS Scholars" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>

  </div>

  {/* SAT Tutor */}
  <div className="flex flex-col gap-4 mb-16"></div>
<div className="group">
  <div className="bg-white/[0.03] p-6 rounded-3xl border border-white/5 hover:border-blue-600/50 transition-all mb-6">
    <div className="flex items-center gap-3 mb-2">
      {/* Белый заголовок */}
      <h3 className="text-2xl font-bold text-white">SAT Tutor</h3>
    </div>
    
    <p className="text-red-500 font-bold mb-4 uppercase text-xs tracking-widest">
      SchoolWorlds (College Board) | Jan 2026 - Present
    </p>
    
    <ul className="text-gray-400 space-y-3 text-sm">
      <li className="flex gap-2">
        <span>•</span> 
        Selected by the College Board as a tutor for SchoolWorlds initiative.
      </li>
      <li className="flex gap-2">
        <span>•</span> 
        Helping students worldwide strengthen their SAT performance and understanding.
      </li>
      <li className="flex gap-2">
        <span>•</span> 
      Starting new groups from February 6, 2026.
      </li>
    </ul>
  </div>

  {/* МЕСТО ДЛЯ ФОТО SAT / COLLEGE BOARD */}
  <div className="rounded-2xl overflow-hidden border-2 border-white/5 aspect-video bg-gray-900/50">
     <img 
       src="/sat-tutor.jpg" 
       alt="SAT Tutoring" 
       className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
     />
  </div>
</div>

</section>

{/* 7. PROJECTS — ПОЛНЫЙ ТЕКСТ */}
        <section className="mb-32 border-t border-red-900/30 pt-16">
          <div className="flex items-center gap-4 mb-12 text-emerald-400">
            <Send size={32} />
            <h2 className="text-3xl font-bold uppercase tracking-tighter text-white">Projects</h2>
          </div>
          
          <div className="space-y-12">
            
            {/* UpSAT! — ВЕСЬ ТЕКСТ ТУТ */}
            <div className="group grid md:grid-cols-2 gap-10 items-center p-6 md:p-10 bg-blue-600/10 border border-blue-500/20 rounded-[3rem] hover:bg-blue-600/15 transition-all">
              <div className="h-[250px] md:h-[350px] rounded-[2rem] overflow-hidden">
                <img src="/telega.jpg" className="w-full h-full object-cover" alt="UpSAT!" />
              </div>
              <div>
                <h4 className="text-3xl font-black uppercase text-blue-400 mb-6 tracking-tighter">UpSAT! — Telegram Bot</h4>
                <div className="space-y-4 text-gray-300 text-lg font-light leading-relaxed italic">
                  <p>An independent educational project designed to support SAT preparation.</p>
                  <p className="text-white font-medium">• Developed the program code and core materials independently.</p>
                  <p className="text-blue-300/80">• Early-stage project currently attracting 10+ new users daily.</p>
                </div>
                <div className="mt-8">
                  <a 
                    href="https://t.me/UpSAT_bot" 
                    target="_blank" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-blue-400 transition-all shadow-lg shadow-blue-500/20"
                  >
                    <Send size={16} /> Launch Bot
                  </a>
                </div>
              </div>
            </div>

            {/* UstaGuitar — ВЕСЬ ТЕКСТ ТУТ */}
            <div className="group grid md:grid-cols-2 gap-10 items-center p-6 md:p-10 bg-red-600/10 border border-red-500/20 rounded-[3rem] hover:bg-red-600/15 transition-all">
              <div className="md:order-2 h-[250px] md:h-[350px] rounded-[2rem] overflow-hidden">
                <img src="/guitar.jpg" className="w-full h-full object-cover" alt="UstaGuitar" />
              </div>
              <div className="md:order-1">
                <h4 className="text-3xl font-black uppercase text-red-500 mb-6 tracking-tighter">UstaGuitar — YouTube</h4>
                <div className="space-y-4 text-gray-300 text-lg font-light leading-relaxed italic">
                  <p>Personal educational channel created after two years of self-teaching guitar.</p>
                  <p className="text-white font-medium">• Teach popular songs through clear, beginner-friendly tutorials.</p>
                  <p className="text-red-300/80">• Focus on accessibility and practical learning for everyone.</p>
                </div>
                <div className="mt-8">
                  <a 
                    href="https://www.youtube.com/channel/UCiuNzkTnPTLwm_c61IE0lsw" 
                    target="_blank" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-full font-bold uppercase text-[10px] tracking-widest hover:bg-red-500 transition-all shadow-lg shadow-red-600/20"
                  >
                    <Youtube size={16} /> Watch Tutorials
                  </a>
                </div>
              </div>
            </div>

            {/* Easynomics — ВЕСЬ ТЕКСТ ТУТ */}
            <div className="p-8 md:p-12 bg-emerald-950/20 border border-emerald-500/30 rounded-[3rem] hover:bg-emerald-900/20 transition-all">
              <h4 className="text-3xl font-black uppercase text-emerald-400 mb-6 tracking-tighter">Easynomics — Non-Profit Initiative</h4>
              <div className="space-y-6">
                <p className="text-gray-200 text-xl font-light leading-relaxed italic">
                  A project aimed at increasing access to economics education in the <span className="text-white font-bold underline decoration-emerald-500/50 underline-offset-4">Kazakh language</span>.
                </p>
                <div className="grid md:grid-cols-2 gap-6 text-gray-400 italic text-lg border-t border-emerald-500/10 pt-6">
                  <p>• Founded and assembled a team of <span className="text-white">five contributors</span> to work on the project.</p>
                  <p>• Currently developing introductory economics books to address the lack of <span className="text-white">local resources</span> in Kazakhstan.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

    {/* 5. FUN FACTS: PHOTO - TEXT - PHOTO */}
<section className="max-w-6xl mx-auto px-6 mb-24">
<div className="flex items-center gap-4 mb-8 text-red-500 border-b border-red-900/30 pb-4">
    <Target size={28} />
    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">Lastly... Fun Facts</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
    
    {/* Левая фотка */}
    <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] border-4 border-white/5 shadow-xl">
      <img 
        src="/prime2.jpg" 
        alt="Photo 1"
        className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity"
      />
    </div>

    {/* Центральный блок с текстом */}
    <div className="bg-white/[0.03] p-6 rounded-3xl border border-white/5 shadow-2xl">
      <ul className="space-y-4 text-gray-300 text-sm md:text-base">
        <li className="flex items-start gap-2">
          <span className="text-red-500">•</span>
          <span>I can solve a <strong>12-sided</strong> cubic Rubik’s cube</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500">•</span>
          <span>Self-taught on: <strong>guitar, piano,</strong> and <strong>domra</strong> (not same as dombyra)</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500">•</span>
          <span>I had <strong>32 weeks</strong> streak in going to <strong>gym</strong></span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500">•</span>
          <span>I can code in <strong>Java, Python,</strong> and <strong>SQL</strong></span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-red-500">•</span>
          <span>I am afraid of <strong>dogs</strong></span>
        </li>
      </ul>
    </div>

    {/* Правая фотка */}
    <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] border-4 border-white/5 shadow-xl">
      <img 
        src="/prime.jpg" 
        alt="Photo 2"
        className="object-cover w-full h-full opacity-80 hover:opacity-100 transition-opacity"
      />
    </div>

  </div>
</section>

        {/* FOOTER */}
        <footer className="border-t border-red-900/30 pt-16 flex flex-col md:flex-row justify-between gap-12 text-center md:text-left">
          <div>
            <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">Connect</h3>
            <a href="https://kz.linkedin.com/in/dariya-murzakhmetova-a6b645382" target="_blank" className="inline-flex items-center gap-3 text-blue-400 hover:text-white transition-all text-sm font-bold uppercase tracking-widest">
              <Linkedin size={24} /> LinkedIn Profile
            </a>
          </div>

{/* ЦЕНТР: СЕРЫЕ ГЛАЗА ПАУКА */}
  <div className="relative flex justify-center items-center px-10">
    {/* Мягкое красное свечение вокруг (не такое яркое) */}
    <div className="absolute inset-0 bg-red-700 blur-[35px] opacity-25"></div>
    
    <svg 
      width="130" 
      height="45" 
      viewBox="0 0 140 50" 
      className="relative z-10"
    >
      <defs>
        {/* Градиент для эффекта линз (от серого к чуть более темному серебру) */}
        <linearGradient id="eyeGray" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e5e5e5" />
          <stop offset="100%" stopColor="#b0b0b0" />
        </linearGradient>
      </defs>
  
      {/* Левый глаз — агрессивный наклон внутрь */}
      <path 
        d="M10 5C40 2 65 25 60 45C35 45 5 35 10 5Z" 
        fill="url(#eyeGray)" 
        stroke="#800000" 
        strokeWidth="3"
        className="drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]"
      />
      {/* Правый глаз — зеркально */}
      <path 
        d="M130 5C100 2 75 25 80 45C105 45 135 35 130 5Z" 
        fill="url(#eyeGray)" 
        stroke="#800000" 
        strokeWidth="3"
        className="drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]"
      />
    </svg>
  </div>

          <div className="space-y-4 md:space-y-6 text-xl md:text-2xl font-light italic">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <Phone className="text-gray-600 hidden md:block" size={24} /> <span>+7 701 210 00 45</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <Mail className="text-gray-600 hidden md:block" size={24} /> <span className="break-all text-sm md:text-xl">murzakhmetovadariya21@gmail.com</span>
            </div>
          </div>
        </footer>
    </main>
    </div>
  );
}