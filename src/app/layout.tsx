import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "메이플 월드 최대 규모 디스코드 커뮤니티",
  description: "약 30,000명의 활발한 유저가 참여하는 국내 최대 규모 메이플 월드 커뮤니티. 안전한 메소 거래, 닉네임 및 길드 거래, 파티 모집 및 친목 소통을 지원합니다.",
  openGraph: {
    title: "메이플 월드 최대 규모 디스코드 커뮤니티",
    description: "약 30,000명의 활발한 유저가 참여하는 국내 최대 규모 메이플 월드 커뮤니티. 안전한 메소 거래, 닉네임 및 길드 거래, 파티 모집 및 친목 소통을 지원합니다.",
    type: "website",
    locale: "ko_KR",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030408] text-[#f3f4f6]">
        {children}
      </body>
    </html>
  );
}
