"use client";
import clsx from "clsx";
import React, { useState } from "react";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function BottomSheets({
  isOpen,
  onClose,
  children,
}: BottomSheetProps) {
  const [closing, setClosing] = useState(false);
  const [startY, setStartY] = useState<number | null>(null);
  const [translateY, setTranslateY] = useState(0);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
      setClosing(false);
    }, 300);
  };

  // 드래그 시작
  const startDrag = (y: number) => setStartY(y);

  // 드래그 중
  const moveDrag = (y: number) => {
    if (startY !== null) {
      const diff = y - startY;
      if (diff > 0) setTranslateY(diff);
    }
  };

  // 드래그 종료
  const endDrag = () => {
    if (translateY > 100) {
      handleClose();
    }
    setTranslateY(0);
    setStartY(null);
  };

  if (!isOpen) return null;

  return (
    <div
      className={clsx(
        "fixed inset-0 flex items-end z-50 transition-transform duration-300",
        closing ? "translate-y-full" : "translate-y-0"
      )}
    >
      <div
        className="w-full h-30 bg-white border border-gray-200 rounded-t-2xl p-6 shadow-lg animate-slideUp"
        style={{ transform: `translateY(${translateY}px)` }}
        // 터치 이벤트
        onTouchStart={(e) => startDrag(e.touches[0].clientY)}
        onTouchMove={(e) => moveDrag(e.touches[0].clientY)}
        onTouchEnd={endDrag}
        // 마우스 이벤트
        onMouseDown={(e) => startDrag(e.clientY)}
        onMouseMove={(e) => {
          if (startY !== null) moveDrag(e.clientY);
        }}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
      >
        <div className="flex justify-end mb-2">
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-black cursor-pointer"
          >
            닫기 ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
