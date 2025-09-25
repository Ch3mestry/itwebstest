import { apiFetch } from "@/shared/service/api-fetch";
import { Post } from "../model";

export function getPosts(options?: RequestInit) {
  return apiFetch<Post[]>("/posts", { ...options, cache: "force-cache" });
}
