"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "/style/globals.css";
import Header from "@/components/common/header";
import BottomSheets from "@/components/common/bottom-sheets";

// TODO: 캘린더 스타일
// TODO: 선택한 날짜의 운동 기록 데이터 받아와서 바텀 시트 children에 전달
export default function Page() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="w-full h-screen relative">
      <Header title="운동 분석 히스토리" />
      <Calendar
        locale="ko-KR"
        onClickDay={(date) => setSelectedDate(date)} // 날짜 클릭 시 바텀시트 열기
      />

      <BottomSheets
        isOpenBottomSheets={!!selectedDate}
        onCloseBottomSheets={() => setSelectedDate(null)}
      >
        <h2 className="subheadline-03-bold mb-4 px-[5px]">
          {selectedDate &&
            `${
              selectedDate.getMonth() + 1
            }월 ${selectedDate.getDate()}일의 운동 기록`}
        </h2>
        <p className="text-gray-600">아직 기록이 없습니다.</p>
      </BottomSheets>
    </div>
  );
}
