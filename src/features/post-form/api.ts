import { Post } from "@/entities/post/model";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export function createPostFormData(formData: FormData) {
  return fetch(`${API_URL}/posts`, {
    method: "POST",
    body: formData,
  }).then((res) => res.json() as Promise<Post>);
}
