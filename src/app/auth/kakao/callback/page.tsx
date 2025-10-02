"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      fetch("/api/auth/kakao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("토큰 응답:", data);
          // zustand 상태에 넣어서 로그인 상태 관리 -> access 토큰은 zustand로 메모리에서 관리하고 새로고침, 페이지 이동 시 리프레시로 재요청?
        })
        .catch((err) => console.error("로그인 에러:", err));
    }
  }, [code]);

  return <p>카카오 로그인 처리중...</p>;
}
