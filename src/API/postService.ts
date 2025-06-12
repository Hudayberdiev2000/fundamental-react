import { fetchPosts } from "../api";

export class PostService {
  static async getAll() {
    return await fetchPosts();
  }
}
