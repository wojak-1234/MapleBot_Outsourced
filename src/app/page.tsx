"use client";

import { motion } from "framer-motion";
import {
  Users,
  Handshake,
  Coins,
  Tag,
  Shield,
  Sparkles,
  MessageSquare,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import BackgroundGlow from "@/components/BackgroundGlow";
import Counter from "@/components/Counter";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  gridClass?: string;
  glowColor?: string;
  borderColor?: string;
}

const features: FeatureItem[] = [
  {
    icon: <Users className="w-8 h-8 text-indigo-400" />,
    title: "약 30,000명의 활발한 커뮤니티",
    desc: "메이플 월드 최대 규모의 유저들이 상시 소통하며 유용한 정보를 나누는 커뮤니티입니다.",
    gridClass: "lg:col-span-2 lg:row-span-1",
    glowColor: "rgba(99, 102, 241, 0.15)",
    borderColor: "rgba(99, 102, 241, 0.3)",
  },
  {
    icon: <Handshake className="w-8 h-8 text-purple-400" />,
    title: "제휴인을 통한 신뢰할 수 있는 메소 거래",
    desc: "보증금 제도를 거친 공식 제휴인을 통해 사기 걱정 없는 안전한 거래 환경을 제공합니다.",
    gridClass: "lg:col-span-1",
    glowColor: "rgba(139, 92, 246, 0.15)",
    borderColor: "rgba(139, 92, 246, 0.3)",
  },
  {
    icon: <Coins className="w-8 h-8 text-yellow-400" />,
    title: "다양한 거래 채널",
    desc: "메소 구매, 메소 판매, 월드코인, 계정거래, 닉네임거래, 길드명거래, 자리거래 등 안전하고 다양한 거래 채널을 제공합니다.",
    gridClass: "lg:col-span-1",
    glowColor: "rgba(234, 179, 8, 0.12)",
    borderColor: "rgba(234, 179, 8, 0.25)",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-pink-400" />,
    title: "파티 모집",
    desc: "레이드, 퀘스트, 사냥 등 목적에 맞는 파티원을 실시간으로 신속하게 찾아 드립니다.",
    gridClass: "lg:col-span-1",
    glowColor: "rgba(236, 72, 153, 0.15)",
    borderColor: "rgba(236, 72, 153, 0.3)",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
    title: "친목 및 커뮤니티",
    desc: "게임 공략 및 패치 정보 공유는 물론, 일상 소통을 자유롭게 나누는 공간입니다.",
    gridClass: "lg:col-span-1",
    glowColor: "rgba(6, 182, 212, 0.15)",
    borderColor: "rgba(6, 182, 212, 0.3)",
  },
];

const heroBadges = [
  { text: "🛡️ 안전 거래 보증", pos: "left-[calc(50%-430px)] lg:left-[calc(50%-520px)] xl:left-[calc(50%-650px)] 2xl:left-[calc(50%-760px)] top-[12%]", delay: 0.1, yRange: [-6, 6] },
  { text: "👥 3만명 활성 유저", pos: "right-[calc(50%-430px)] lg:right-[calc(50%-520px)] xl:right-[calc(50%-650px)] 2xl:right-[calc(50%-760px)] top-[25%]", delay: 0.3, yRange: [-8, 8] },
  { text: "⚡ 신속 파티 매칭", pos: "left-[calc(50%-450px)] lg:left-[calc(50%-540px)] xl:left-[calc(50%-670px)] 2xl:left-[calc(50%-780px)] bottom-[28%]", delay: 0.5, yRange: [-7, 7] },
  { text: "💰 실시간 신고 시스템", pos: "right-[calc(50%-450px)] lg:right-[calc(50%-540px)] xl:right-[calc(50%-670px)] 2xl:right-[calc(50%-780px)] bottom-[20%]", delay: 0.2, yRange: [-5, 5] },
  { text: "🕒 24시간 실시간 소통", pos: "hidden xl:flex left-[calc(50%-620px)] 2xl:left-[calc(50%-720px)] top-[45%]", delay: 0.4, yRange: [-9, 9] },
  { text: "📊 실시간 시세 정보", pos: "hidden xl:flex right-[calc(50%-620px)] 2xl:right-[calc(50%-720px)] top-[50%]", delay: 0.6, yRange: [-6, 6] }
];

const statistics = [
  { target: 30000, suffix: "+", title: "압도적 유저 수", desc: "활성화 누적 유저수" },
  { target: 100, suffix: "%", title: "검증 완료된 제휴인들", desc: "신뢰 안전 거래율" },
  { target: 24, suffix: "/7", title: "24시간 활성화 커뮤니티", desc: "24시간 실시간 소통" },
  { target: 12000, suffix: "+", title: "일평균 파티 매칭", desc: "일간 매칭 요청 수" },
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between overflow-x-hidden pb-16">
      <BackgroundGlow />

      {/* 1. Header Section */}
      <header className="w-full max-w-7xl px-6 md:px-12 py-6 flex items-center justify-between z-10 border-b border-white/5 backdrop-blur-md sticky top-0 bg-[#030408]/30">
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 neo-inset">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="tracking-wide">서버 상태: <strong className="text-emerald-300 font-bold ml-0.5">온라인</strong></span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#statistics" className="hover:text-white transition-colors">실시간 통계</a>
          <a href="#features" className="hover:text-white transition-colors">주요 기능</a>
          <a href="#community" className="hover:text-white transition-colors">커뮤니티 채널</a>

        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://discord.gg/YB8JqJgQvu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#5865F2] hover:bg-[#4752c4] border border-[#5865F2]/40 transition-all duration-300 shadow-[0_0_15px_rgba(88,101,242,0.3)] hover:shadow-[0_0_30px_rgba(88,101,242,0.85)] flex items-center gap-1.5"
          >
            메이플 플래닛 디스코드
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://discord.com/channels/@me/1518473912474927124/1519976391528153118"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#5865F2] hover:bg-[#4752c4] border border-[#5865F2]/40 transition-all duration-300 shadow-[0_0_15px_rgba(88,101,242,0.3)] hover:shadow-[0_0_30px_rgba(88,101,242,0.85)] flex items-center gap-1.5"
          >
            메이플 랜드 디스코드
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="w-full max-w-7xl px-6 md:px-12 pt-20 pb-24 text-center flex flex-col items-center justify-center z-10 relative overflow-visible">
        {/* Floating Advantages Badges (Desktop) */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-visible">
          {heroBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: badge.yRange,
              }}
              transition={{
                y: {
                  duration: 4 + idx * 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                },
                opacity: { duration: 0.5, delay: badge.delay },
                scale: { duration: 0.5, delay: badge.delay }
              }}
              className={`absolute ${badge.pos} px-4 py-2.5 rounded-xl bg-[#0d0e12]/80 border border-white/10 text-xs md:text-sm font-semibold text-white/90 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] backdrop-blur-md flex items-center gap-2 neo-btn pointer-events-auto`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              {badge.text}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 mb-8 neo-inset"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          Maple World & Maple Land
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-100 to-gray-500"
        >
          메이플 월드 최대 규모<br /> 디스코드 커뮤니티
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
        >
          약 30,000명의 모험가들이 선택한 안전하고 쾌적한 교류의 장. <br />
          실시간 메소 거래부터 길드 모집, 닉네임 교환, 파티 매칭까지 완벽 지원.
        </motion.p>

        {/* Mobile Advantages Badges Grid (Mobile Only) */}
        <div className="grid grid-cols-2 gap-3 mb-8 lg:hidden w-full max-w-md mx-auto">
          {heroBadges.map((badge, idx) => (
            <div
              key={idx}
              className="px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 flex items-center justify-center gap-1.5 neo-inset"
            >
              {badge.text}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
        >
          <a
            href="https://discord.gg/YB8JqJgQvu"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl font-bold text-white bg-[#5865F2] hover:bg-[#4752c4] border border-[#5865F2]/40 flex items-center justify-center gap-3 group transition-all duration-300 shadow-[0_0_25px_rgba(88,101,242,0.45)] hover:shadow-[0_0_55px_rgba(88,101,242,0.9)] hover:-translate-y-0.5 transform"
          >
            Discord 공식 커뮤니티 입장
            <ExternalLink className="w-5 h-5 text-white/90 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </section>

      {/* 5. Statistics Section */}
      <section id="statistics" className="w-full max-w-7xl px-6 md:px-12 pt-24 pb-6 z-10 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">"업계 1위" 는 다릅니다.</h2>
          <p className="text-gray-400">모든 메이플 월드 모험가들이 필요로 하는 핵심 기능과 방대한 거래 / 파티 채널을 제공합니다.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="text-4xl md:text-5xl font-black text-indigo-400 mb-2 tracking-tight">
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="text-white text-sm md:text-base font-semibold mb-1 uppercase tracking-wider">{stat.title}</div>
              <div className="text-gray-500 text-xs">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Feature Section */}
      <section id="features" className="w-full max-w-7xl px-6 md:px-12 pt-6 pb-24 z-10">


        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
        >
          {features.map((feat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: `0 20px 40px ${feat.glowColor}`,
                borderColor: feat.borderColor
              }}
              style={{
                transition: "background-color 0.3s, border-color 0.3s, transform 0.2s"
              }}
              className={`spatial-card p-8 rounded-2xl flex flex-col justify-between ${feat.gridClass || ""}`}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 neo-inset">
                  {feat.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{feat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4. Community Section */}
      <section id="community" className="w-full max-w-6xl px-6 md:px-12 py-24 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">커뮤니티 소속 채널</h2>
          <p className="text-gray-400">자신의 선호도와 서버 유형에 맞춰 최적화된 다양한 독립 디스코드 서버를 제공합니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Maple Planet */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
            className="spatial-card p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden group border border-indigo-500/20"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors" />
            <div>
              <div className="text-4xl mb-6">🍁</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">메이플 플래닛 디스코드</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                메이플스토리 월드의 메소/아이템 실시간 거래와 시세 정보 분석에 특화되어 있습니다. 안전 거래 보증 제휴인 제도를 운영하여 거래 안전성을 보장합니다.
              </p>
            </div>
            <a
              href="https://discord.gg/YB8JqJgQvu"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn w-full py-4 rounded-2xl font-bold text-indigo-300 hover:text-white flex items-center justify-center gap-2 text-center text-sm"
            >
              플래닛 디스코드 입장하기
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Maple Land */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80 }}
            className="spatial-card p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden group border border-purple-500/20"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors" />
            <div>
              <div className="text-4xl mb-6">🌎</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">메이플 랜드 디스코드</h3>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                직업별 유용한 육성 정보, 랭커들의 공략 가이드, 그리고 유저 간 실시간 사냥터 파티 매칭이 주축을 이루는 친목과 육성 도우미 커뮤니티 채널입니다.
              </p>
            </div>
            <a
              href="https://discord.com/channels/@me/1518473912474927124/1519976391528153118"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn w-full py-4 rounded-2xl font-bold text-purple-300 hover:text-white flex items-center justify-center gap-2 text-center text-sm"
            >
              랜드 디스코드 입장하기
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>



      {/* 6. CTA Section */}
      <section className="w-full max-w-5xl px-6 md:px-12 py-20 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="spatial-card p-12 md:p-20 rounded-[2.5rem] text-center relative overflow-hidden border border-white/10"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />

          <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            지금 메이플 월드 최고의<br />커뮤니티에 참여하세요.
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            클릭 한 번으로 30,000명의 모험가들이 활동하는 광장으로 이동합니다. <br />
            실시간 시세 파악, 신뢰 중심의 제휴인 거래를 바로 즐겨보세요.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://discord.gg/YB8JqJgQvu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 rounded-2xl font-bold text-white bg-[#5865F2] hover:bg-[#4752c4] border border-[#5865F2]/40 inline-flex items-center gap-3 transition-all duration-300 hover:-translate-y-1 shadow-[0_0_30px_rgba(88,101,242,0.4)] hover:shadow-[0_0_55px_rgba(88,101,242,0.95)] text-base"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
              메이플 디스코드 지금 참여하기
              <ChevronRight className="w-5 h-5 text-white/90" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-7xl px-6 md:px-12 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 z-10 text-gray-500 text-xs">
        <div>
          <p className="font-semibold text-gray-400 mb-1">MAPLE PLANET & LAND COMMUNITY</p>
          <p>이 웹페이지는 비공식 디스코드 커뮤니티 랜딩 페이지이며, MapleStory World와 관련이 없습니다.</p>
        </div>
        <div>
          <p>© 2026 Maple Planet. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
