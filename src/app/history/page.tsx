"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "/style/globals.css";
import Header from "@/components/common/header";
import BottomSheets from "@/components/common/bottom-sheets";

export default function Page() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="w-full">
      <Header title="운동 분석 히스토리" />
      <Calendar
        locale="ko-KR"
        onClickDay={(date) => setSelectedDate(date)} // 날짜 클릭 시 바텀시트 열기
      />

      <BottomSheets
        isOpen={!!selectedDate}
        onClose={() => setSelectedDate(null)}
      >
        <h2 className="text-lg font-bold mb-4">
          {selectedDate?.toLocaleDateString("ko-KR")} 운동 기록
        </h2>
        <p className="text-gray-600">아직 기록이 없습니다.</p>
      </BottomSheets>
    </div>
  );
}
