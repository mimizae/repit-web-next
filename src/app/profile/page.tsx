"use client";
import Button from "@/components/common/button";
import Header from "@/components/common/header";
import { useUserStore } from "@/stores/useUserStore";
import Image from "next/image";

export default function Page() {
  const user = useUserStore((state) => state.user); // TODO: 로그인 이후 저장된 내 정보 꺼내서 쓰기

  const handleLogout = () => {
    console.log("로그아웃 처리 로직");
    // 실제 로그아웃 처리
  };

  const handleWithdraw = () => {
    console.log("회원탈퇴 처리 로직");
    // 실제 회원탈퇴 처리
  };

  return (
    <div className="w-full flex flex-col items-center relative min-h-screen">
      <Header title="마이페이지" />
      <div className="flex flex-col items-center gap-[11px] mt-25">
        <Image
          src="/assets/profile.svg"
          width={81}
          height={81}
          alt="기본 프로필 이미지"
        />
        <span className="headline-01">{"김태현"}</span>
      </div>
      <div className="w-full flex items-center gap-[15px] px-10 mt-[31px]">
        <span className="w-12 body-01-bold">이메일</span>
        <input
          value={"mimizae@g.hongik.com"}
          className="w-full p-[10px] body-01-regular text-gray-400 border border-gray-300 rounded-[5px]"
          disabled
        />
      </div>
      <div className="absolute bottom-10 left-0 w-full flex flex-col gap-[10px] px-10">
        <Button text="로그아웃" variant="primary" onClick={handleLogout} />
        <Button text="회원탈퇴" variant="secondary" onClick={handleWithdraw} />
      </div>
    </div>
  );
}
