import { ApiResponse } from "../common-type";

// 운동 기록 상세 조회 result
export interface RecordDetail {
  record_id: number;
  pose_type: string;
  recorded_at: string; // ISO Date string
  duration: string; // "HH:mm:ss"
  score: number;
  video_name: string;
  deleted_at?: string | null;
  scoreDetails: string;
}
// 운동 상세 조회
export type GetRecordDetailResponse = ApiResponse<RecordDetail>;
