"use client";
import React from "react";
import { usePathname } from "next/navigation";
import LogoIcon from "@/assets/logo-black.svg";
import Image from "next/image";

//TODO: 오른쪽 아이콘도 고려

interface HeaderProps {
  title?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// 기본 왼쪽 아이콘 -> 뒤로가기
// 홈 -> 로고, 분석화면 -> 홈 아이콘
// 오른쪽 아이콘은 홈 헤더에만 존재 -> 프로필 아이콘

export default function Header({ title, leftIcon }: HeaderProps) {
  const pathname = usePathname();

  const isHome = pathname === "/home";
  const isAnalysis = pathname === "/analysis";

  return (
    <header className="w-full h-[74px] pt-[30px] grid grid-cols-3 p-5 border-b border-gray-300">
      {/* 왼쪽 */}
      <div className="flex items-center justify-start">
        {isHome ? (
          <LogoIcon />
        ) : isAnalysis ? (
          <Image
            src="/assets/home.svg"
            width={24}
            height={24}
            alt="홈 아이콘"
          />
        ) : (
          <Image
            src="/assets/left.svg"
            width={24}
            height={24}
            alt="뒤로가기 아이콘"
          />
        )}
      </div>

      {/* 가운데 */}
      <div className="flex items-center justify-center">
        {!isHome && <span className="subheadline-03-bold">{title}</span>}
      </div>

      {/* 오른쪽 */}
      <div className="flex items-center justify-end">
        {isHome && (
          <button>
            <Image
              src="/assets/profile.svg"
              width={32}
              height={32}
              alt="프로필 아이콘"
            />
          </button>
        )}
      </div>
    </header>
  );
}
