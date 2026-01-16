"use client";

import React from "react";
import { 
  Linkedin, Trophy, Music, Heart, Send, Youtube, 
  Star, GraduationCap, Activity, Lightbulb, Phone, Mail 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1115] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      <main className="max-w-6xl mx-auto px-4 md:px-12 pt-10 md:pt-16 pb-32 relative">
        
        {/* GLOW EFFECTS */}
        <div className="absolute top-[-5%] left-[-10%] w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        {/* HERO SECTION */}
        <section className="relative mb-24 flex flex-col md:flex-row items-center justify-between gap-10 z-10">
          <div className="flex-1 order-2 md:order-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium">
              <Star size={14} /> @yenseaq
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-[6vw] font-black tracking-tighter uppercase leading-[0.9] mb-6">
              Dariya <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400">
                Murzakhmetova
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-400 font-bold italic mb-4">Junior Student at NIS Astana</p>
            <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-xl italic mx-auto md:mx-0">
              IBDP Candidate. Highly motivated student with strong academic performance and a deep interest in economics and creative projects.
            </p>
          </div>

          <div className="relative flex-shrink-0 order-1 md:order-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 via-purple-600 to-emerald-500 rounded-full blur-2xl opacity-30"></div>
            <div className="relative w-[240px] h-[240px] md:w-[380px] md:h-[380px] p-1 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-emerald-500">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0f1115]">
                <img src="/amina.jpg" className="w-full h-full object-cover" alt="Dariya" />
              </div>
            </div>
          </div>
        </section>
        {/* 1. ACADEMICS */}
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8 text-blue-400 border-b border-white/10 pb-4">
            <GraduationCap size={28} />
            <h2 className="text-2xl md:text-3xl font-bold uppercase italic tracking-tighter">1. Academics</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/[0.03] p-6 md:p-8 rounded-3xl border border-white/5">
              <p className="text-gray-300 mb-4 text-sm md:text-base italic">I am an IBDP student approved for the following subjects:</p>
              <div className="space-y-4">
                <div>
                  <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest block mb-1">Higher Level (HL):</span>
                  <p className="text-gray-200 font-medium text-sm md:text-base">Economics, Geography, English B</p>
                </div>
                <div>
                  <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest block mb-1">Standard Level (SL):</span>
                  <p className="text-gray-400 text-sm md:text-base italic">Russian Language & Literature, Math AA, Biology</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6 bg-blue-500/5 p-6 md:p-8 rounded-3xl border border-blue-500/20 text-center md:text-left">
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">GPA</p>
                <p className="text-3xl md:text-4xl font-black italic text-white">4.96 / 5.00</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">SAT Score</p>
                <p className="text-3xl md:text-4xl font-black text-blue-500 italic">1560</p>
                <p className="text-blue-400 text-xs font-medium italic">(EBRW 770 | Math 790)</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. MUSIC */}
        <section className="mb-24 border-t border-white/10 pt-16">
          <div className="flex items-center gap-4 mb-8 text-purple-400">
            <Music size={28} />
            <h2 className="text-2xl md:text-3xl font-bold uppercase italic tracking-tighter text-white">2. School of Arts №2</h2>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.02]">
            <div className="grid md:grid-cols-3">
              <div className="md:col-span-2 p-6 md:p-10 order-2 md:order-1">
                <p className="text-purple-400 font-bold text-lg mb-3 italic">2019 – 2024</p>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed italic font-light">
                  Completed specialized music education (Dombyra). Performed as a <span className="text-white font-bold italic">Principal Musician</span> in the orchestra, showcasing Kazakh cultural heritage.
                </p>
              </div>
              <div className="md:col-span-1 h-[250px] md:h-full order-1 md:order-2">
                <img src="/muzikalka.jpg" className="w-full h-full object-cover" alt="Music" />
              </div>
            </div>
          </div>
        </section>
        {/* 3. ECONOMICS */}
        <section className="mb-24 border-t border-white/10 pt-16">
          <div className="flex items-center gap-4 mb-8 text-yellow-500 pb-2">
            <Trophy size={28} />
            <h2 className="text-2xl md:text-3xl font-bold uppercase italic tracking-tighter text-white">3. Economics Achievements</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            <div className="p-5 bg-white/5 border-l-2 border-yellow-500 text-sm md:text-base italic">Asian Economics Olympiad (2025): <span className="text-white font-bold">9th place</span></div>
            <div className="p-5 bg-white/5 border-l-2 border-yellow-500 text-sm md:text-base italic text-white font-bold">Major Economics Olympiad (2025): Finalist</div>
          </div>
          <div className="bg-blue-500/5 p-6 md:p-10 rounded-[2.5rem] border border-blue-500/10">
            <h4 className="text-blue-400 font-black uppercase text-[10px] tracking-widest mb-4">Qaz Economics (2024 – Present)</h4>
            <ul className="space-y-4 text-gray-300 text-sm md:text-base italic font-light">
              <li className="flex gap-3"><span>•</span> <span>Developing digital content for economics education platform</span></li>
              <li className="flex gap-3"><span>•</span> <span>Translating complex economic concepts into clear materials</span></li>
            </ul>
          </div>
        </section>

        {/* 4. VOLUNTEER */}
        <section className="mb-24 border-t border-white/10 pt-16">
          <div className="flex items-center gap-4 mb-8 text-red-500">
            <Heart size={28} />
            <h2 className="text-2xl md:text-3xl font-bold uppercase italic tracking-tighter text-white">4. Volunteer Experience</h2>
          </div>
          <div className="group rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.02]">
            <div className="grid md:grid-cols-3">
              <div className="md:col-span-1 h-[220px] md:h-full">
                <img src="/rfa.jpg" className="w-full h-full object-cover" alt="Volunteer" />
              </div>
              <div className="md:col-span-2 p-6 md:p-10">
                <p className="text-gray-300 text-base md:text-lg italic font-light leading-relaxed">
                  Over <span className="text-white font-bold underline decoration-red-500/30 underline-offset-4">70 hours</span> at public events like <span className="text-white">Jennifer Lopez, Comic Con, Dimash Qudaibergen, and more</span>. Developed teamwork and decision-making skills.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* 5. SPORTS & LEADERSHIP */}
        <section className="mb-24 border-t border-white/10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-8 rounded-[2.5rem] bg-orange-500/5 border border-orange-500/10">
              <Activity className="text-orange-500 mb-4" size={28} />
              <h4 className="text-xl font-bold uppercase italic text-white mb-2 underline decoration-orange-500/20 underline-offset-8">Varsity Volleyball</h4>
              <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-4">Middle Blocker | Grade 8+</p>
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

{/* 7. PROJECTS — ПОЛНЫЙ ТЕКСТ */}
        <section className="mb-32 border-t border-white/10 pt-16">
          <div className="flex items-center gap-4 mb-12 text-emerald-400">
            <Send size={32} />
            <h2 className="text-3xl font-bold uppercase italic tracking-tighter text-white">7. Projects</h2>
          </div>
          
          <div className="space-y-12">
            
            {/* UpSAT! — ВЕСЬ ТЕКСТ ТУТ */}
            <div className="group grid md:grid-cols-2 gap-10 items-center p-6 md:p-10 bg-blue-600/10 border border-blue-500/20 rounded-[3rem] hover:bg-blue-600/15 transition-all">
              <div className="h-[250px] md:h-[350px] rounded-[2rem] overflow-hidden">
                <img src="/telega.jpg" className="w-full h-full object-cover" alt="UpSAT!" />
              </div>
              <div>
                <h4 className="text-3xl font-black italic uppercase text-blue-400 mb-6 tracking-tighter">UpSAT! — Telegram Bot</h4>
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
                <h4 className="text-3xl font-black italic uppercase text-red-500 mb-6 tracking-tighter">UstaGuitar — YouTube</h4>
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
              <h4 className="text-3xl font-black italic uppercase text-emerald-400 mb-6 tracking-tighter">Easynomics — Non-Profit Initiative</h4>
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

        {/* FOOTER */}
        <footer className="border-t border-white/10 pt-16 flex flex-col md:flex-row justify-between gap-12 text-center md:text-left">
          <div>
            <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4">Connect</h3>
            <a href="https://kz.linkedin.com/in/dariya-murzakhmetova-a6b645382" target="_blank" className="inline-flex items-center gap-3 text-blue-400 hover:text-white transition-all text-sm font-bold uppercase tracking-widest">
              <Linkedin size={24} /> LinkedIn Profile
            </a>
          </div>
          <div className="space-y-4 md:space-y-6 text-xl md:text-2xl font-light italic">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
              <Phone className="text-gray-600 hidden md:block" size={24} /> <span>+7 776 330 10 05</span>
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