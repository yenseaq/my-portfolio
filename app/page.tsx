"use client";

import React from "react";
import { 
  Linkedin, Trophy, Music, Heart, Send, Youtube, 
  Star, BookOpen, Activity, GraduationCap, Users, Lightbulb, Phone, Mail
} from "lucide-react";

export default function Home() {
  return (
    /* 1. ТУТ ЦВЕТ ФОНА (ТЕМНО-СИНИЙ ГРАФИТ) */
    <div className="min-h-screen bg-[#0f1115] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      
      <main className="max-w-6xl mx-auto px-6 md:px-12 pt-16 pb-32 relative">
        
        {/* --- ЯРКИЕ ПЯТНА (GLOW EFFECTS) --- */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute top-[60%] left-[-5%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="absolute bottom-[0%] right-[-5%] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[130px] pointer-events-none z-0" />

        {/* --- HERO SECTION --- */}
        <section className="relative mb-32 flex flex-col md:flex-row items-center justify-between gap-10 z-10">
          <div className="flex-1 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium">
              <Star size={14} /> @yenseaq
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6vw] font-black tracking-tighter uppercase leading-[0.9] mb-6">
              Dariya <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-pulse">
                Murzakhmetova
              </span>
            </h1>
            <p className="text-xl text-blue-400 font-bold italic mb-4">Junior Student at NIS Astana</p>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-xl italic">
              IBDP Candidate. Highly motivated student with strong academic performance and a deep interest in economics and creative projects.
            </p>
          </div>

          {/* КРУГЛОЕ ПЕРЕЛИВАЮЩЕЕСЯ ФОТО */}
          <div className="relative flex-shrink-0 order-1 md:order-2">
            {/* Слой свечения (Градиент сзади) */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-purple-600 to-emerald-500 rounded-full blur-2xl opacity-50 animate-spin-slow"></div>
            
            {/* Оправа и само фото */}
            <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] p-1.5 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-emerald-500">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0f1115]">
                <img 
                  src="/amina.jpg" 
                  className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700" 
                  alt="Dariya" 
                />
              </div>
            </div>
          </div>
        </section>
        {/* 1. ACADEMICS */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-8 text-blue-400 border-b border-white/10 pb-4">
            <GraduationCap size={28} />
            <h2 className="text-3xl font-bold uppercase italic tracking-tighter">1. Academics</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 bg-white/[0.03] p-8 rounded-3xl border border-white/5">
              <p className="text-gray-300">I am an IBDP student approved for the following subjects:</p>
              <div className="space-y-4">
                <div>
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Higher Level (HL):</span>
                  <p className="text-gray-400 italic">Economics, Geography, English B</p>
                </div>
                <div>
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Standard Level (SL):</span>
                  <p className="text-gray-400 italic">Russian Language & Literature, Mathematics: Analysis & Approaches, Biology</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 bg-blue-500/5 p-8 rounded-3xl border border-blue-500/20">
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Unweighted GPA</p>
                <p className="text-4xl font-black">4.96 / 5.00</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">SAT Score</p>
                <p className="text-4xl font-black">1560</p>
                <p className="text-blue-400 text-sm font-medium italic">(EBRW 770 | Math 790)</p>
              </div>
            </div>
          </div>
        </section>
        {/* 2. SCHOOL OF ARTS */}
<section className="mb-32 border-t border-white/10 pt-16">
          <div className="flex items-center gap-4 mb-10 text-purple-400">
            <Music size={32} />
            <h2 className="text-3xl font-bold uppercase italic tracking-tighter">2. Music Background</h2>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02]">
            <div className="grid md:grid-cols-3 items-center">
              <div className="md:col-span-2 p-10 order-2 md:order-1">
                <p className="text-purple-400 font-bold text-xl mb-4 italic underline decoration-purple-500/30 underline-offset-4">
                  2019 – 2024
                </p>
                <p className="text-gray-300 text-lg leading-relaxed font-light italic">
                  I completed formal specialized music education with a focus on the <span className="text-white font-bold italic">Dombyra</span>, a traditional Kazakh folk instrument. 
                  <br/><br/>
                  During my studies, I performed as a <span className="text-white">Principal Musician</span> in the school orchestra and participated in numerous performances, showcasing Kazakh cultural heritage.
                </p>
              </div>

              {/* ФОТО: Теперь оно второе, занимает 1 часть справа */}
              <div className="md:col-span-1 h-[300px] grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden order-1 md:order-2">
                <img src="/muzikalka.jpg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Music" />
              </div>
              
            </div>
          </div>
        </section>
        {/* 3. ECONOMICS ACHIEVEMENTS */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-8 text-yellow-500 border-b border-white/10 pb-4">
            <Trophy size={28} />
            <h2 className="text-3xl font-bold uppercase italic tracking-tighter">3. Economics Achievements</h2>
          </div>
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-6 text-xl italic font-light">
               <div className="p-6 border-l-2 border-yellow-500/30 bg-white/5">Asian Economics Olympiad (2025): <span className="text-white font-bold">9th place</span></div>
               <div className="p-6 border-l-2 border-yellow-500/30 bg-white/5">Major Economics Olympiad (2025): <span className="text-white font-bold">Finalist</span></div>
            </div>
            <div className="max-w-3xl">
               <p className="text-gray-300 text-lg leading-relaxed italic border-b border-white/5 pb-8">
                 Author of an independent research paper on <span className="text-white">Market-Led Growth and the Role of Financial Aid (Development Assistance)</span>, analyzing development strategies and the effectiveness of economic policy.
               </p>
               <div className="mt-12">
                  <h4 className="text-blue-400 font-black uppercase text-sm mb-6 tracking-widest">Qaz Economics — Educational Organization</h4>
                  <p className="text-gray-500 text-xs italic mb-4">August 2024 – Present</p>
                  <ul className="space-y-4 text-gray-400 font-light">
                    <li className="flex gap-4 italic">• <span>Develop and manage digital content for an economics education platform aimed at students and young learners</span></li>
                    <li className="flex gap-4 italic">• <span>Translate complex economic concepts into clear, engaging, and accessible materials</span></li>
                  </ul>
               </div>
            </div>
          </div>
        </section>
        {/* 4. VOLUNTEER EXPERIENCE */}
        <section className="mb-32 border-t border-white/10 pt-16">
          <div className="flex items-center gap-4 mb-10 text-red-500">
            <Heart size={32} />
            <h2 className="text-3xl font-bold uppercase italic tracking-tighter">4. Volunteer Experience</h2>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/[0.02]">
            <div className="grid md:grid-cols-3 items-center">
              <div className="md:col-span-1 h-[300px] grayscale hover:grayscale-0 transition-all duration-700">
                <img src="/rfa.jpg" className="w-full h-full object-cover" alt="Volunteer" />
              </div>
              <div className="md:col-span-2 p-10">
                <p className="text-gray-300 text-lg leading-relaxed font-light italic">
                  I have volunteered <span className="text-white font-bold">over 70 hours</span> at large public events, supporting crowd coordination and safety management. Events include international concerts and festivals such as <span className="text-white">Jennifer Lopez, Backstreet Boys, Comic Con, and Dimash Qudaibergen</span>. 
                  <br/><br/>
                  Through this experience, I developed strong teamwork, responsibility, and decision-making skills in fast-paced, high-pressure environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SPORTS - ОТДЕЛЬНАЯ ЦЕЛАЯ СТРОКА */}
        <section className="mb-32 border-t border-white/10 pt-16">
          <div className="flex items-center gap-4 mb-10 text-orange-500">
            <Activity size={32} />
            <h2 className="text-3xl font-bold uppercase italic tracking-tighter">5. Sports</h2>
          </div>
          <div className="p-10 rounded-[3rem] bg-orange-500/5 border border-orange-500/20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div>
                <h4 className="text-3xl font-black italic uppercase text-white mb-2">Varsity Volleyball Team</h4>
                <p className="text-orange-500 font-bold tracking-[0.2em] uppercase text-sm">Position: Middle Blocker | Since Grade 8</p>
              </div>
              <div className="max-w-xl">
                <p className="text-gray-400 text-lg font-light italic leading-relaxed">
                  I have been a member of the school varsity volleyball team since Grade 8. This experience reflects long-term commitment, discipline, teamwork, and competitive performance in interschool competitions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SCHOOL CLUBS & LEADERSHIP - ОТДЕЛЬНАЯ ЦЕЛАЯ СТРОКА */}
        <section className="mb-32 border-t border-white/10 pt-16">
          <div className="flex items-center gap-4 mb-10 text-yellow-400">
            <Lightbulb size={32} />
            <h2 className="text-3xl font-bold uppercase italic tracking-tighter">6. School Clubs & Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-10 bg-zinc-900/50 rounded-[2.5rem] border border-white/5">
              <h4 className="text-white font-bold text-xl mb-4">Zhas & Healthy Club</h4>
              <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">Event Coordinator</p>
              <p className="text-gray-400 italic font-light leading-relaxed">
                Organized and coordinated school events, managing planning, logistics, and team collaboration.
              </p>
            </div>
            <div className="p-10 bg-zinc-900/50 rounded-[2.5rem] border border-white/5">
              <h4 className="text-white font-bold text-xl mb-4">EcoClub</h4>
              <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">Event Organizer</p>
              <p className="text-gray-400 italic font-light leading-relaxed">
                Planned and implemented environmental initiatives and school-wide activities.
              </p>
            </div>
          </div>
        </section>

        {/* 7. PROJECTS - КАЖДЫЙ ПРОЕКТ НА ВСЮ ШИРИНУ */}
        <section className="mb-32 border-t border-white/10 pt-16">
          <div className="flex items-center gap-4 mb-12 text-emerald-400">
            <Send size={32} />
            <h2 className="text-3xl font-bold uppercase italic tracking-tighter">7. Projects</h2>
          </div>
          
          <div className="space-y-12">
            {/* UpSAT! */}
<div className="group grid md:grid-cols-2 gap-10 items-center p-8 bg-blue-600/10 border border-blue-500/20 rounded-[3rem] hover:bg-blue-600/15 transition-all">
              <div className="h-[300px] rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src="/telega.jpg" className="w-full h-full object-cover" alt="UpSAT!" />
              </div>
              <div>
                <h4 className="text-3xl font-black italic uppercase text-blue-400 mb-4 tracking-tighter">UpSAT! — Telegram Bot</h4>
                <p className="text-gray-300 text-lg font-light leading-relaxed italic mb-6">An independent educational project designed to support SAT preparation.</p>
                <ul className="text-gray-500 space-y-2 text-sm italic mb-8">
                  <li>• Developed the program code and core materials independently</li>
                  <li>• Early-stage project currently attracting 10+ new users daily</li>
                </ul>
                <a 
                  href="https://t.me/UpSAT_bot" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-blue-400 transition-all shadow-lg shadow-blue-500/20"
                >
                  <Send size={16} /> Launch Bot
                </a>
              </div>
            </div>

            {/* UstaGuitar */}
          <div className="group grid md:grid-cols-2 gap-10 items-center p-8 bg-red-600/10 border border-red-500/20 rounded-[3rem] hover:bg-red-600/15 transition-all">
              <div className="md:order-2 h-[300px] rounded-[2rem] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                <img src="/guitar.jpg" className="w-full h-full object-cover" alt="UstaGuitar" />
              </div>
              <div className="md:order-1 text-right md:text-left">
                <h4 className="text-3xl font-black italic uppercase text-red-500 mb-4 tracking-tighter">UstaGuitar — YouTube</h4>
                <p className="text-gray-300 text-lg font-light leading-relaxed italic mb-6">Personal educational channel created after two years of self-teaching guitar.</p>
                <ul className="text-gray-500 space-y-2 text-sm italic mb-8">
                  <li>• Teach popular songs through clear, beginner-friendly tutorials</li>
                  <li>• Focus on accessibility and practical learning</li>
                </ul>
                <a 
                  href="https://www.youtube.com/channel/UCiuNzkTnPTLwm_c61IE0lsw" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-bold uppercase text-xs tracking-widest hover:bg-red-500 transition-all shadow-lg shadow-red-600/20"
                >
                  <Youtube size={16} /> Watch Tutorials
                </a>
              </div>
            </div>

            {/* Easynomics */}
            <div className="p-10 bg-emerald-950/10 border border-emerald-500/20 rounded-[3rem]">
              <h4 className="text-3xl font-black italic uppercase text-emerald-400 mb-4 tracking-tighter">Easynomics — Non-Profit Initiative</h4>
              <p className="text-gray-300 text-lg font-light leading-relaxed italic mb-6">A project aimed at increasing access to economics education in the Kazakh language.</p>
              <ul className="text-gray-500 space-y-2 text-sm italic">
                <li>• Founded and assembled a team of five contributors</li>
                <li>• Currently developing introductory economics books to address the lack of local resources</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FOOTER - КОНТАКТЫ */}
        <footer className="border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <h3 className="text-6xl font-black italic uppercase tracking-tighter">Connect</h3>
            <a href="https://kz.linkedin.com/in/dariya-murzakhmetova-a6b645382" target="_blank" className="inline-flex items-center gap-3 text-blue-400 hover:text-white transition-all text-sm font-bold uppercase tracking-widest">
              <Linkedin size={24} /> LinkedIn Profile
            </a>
          </div>
          <div className="space-y-6 text-2xl md:text-3xl font-light italic">
            <div className="flex items-center gap-4">
              <Phone className="text-gray-600" size={24} /> <span className="hover:text-blue-400 transition-colors cursor-pointer">+7 776 330 10 05</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-gray-600" size={24} /> <span className="hover:text-blue-400 transition-colors cursor-pointer break-all">murzakhmetovadariya21@gmail.com</span>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}
       