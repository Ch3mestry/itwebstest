import { apiFetch } from "../../shared/api/client";
import { Post } from "./model";

export function getPosts(options?: RequestInit) {
  return apiFetch<Post[]>("/posts", { ...options, cache: "force-cache" });
}
