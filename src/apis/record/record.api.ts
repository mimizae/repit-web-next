import { apiFetch } from "../client";
import { GetRecordDetailResponse } from "./record.type";

// 운동 기록 상세 조회 api
export async function getRecordDetail(recordId: number) {
  return apiFetch<GetRecordDetailResponse>(`/api/record/${recordId}`, {
    method: "GET",
  });
}
