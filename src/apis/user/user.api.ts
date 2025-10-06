import { apiFetch } from "../client";
import { DeleteUserInfoResponse, GetUserInfoResponse } from "./user.type";

// 내 정보 조회 api
export async function getUserInfo() {
  return apiFetch<GetUserInfoResponse>("/api/user/me", {
    method: "GET",
  });
}

// 회원 탈퇴 api
export async function deleteUserInfo() {
  return apiFetch<DeleteUserInfoResponse>("/api/user", {
    method: "DELETE",
  });
}
