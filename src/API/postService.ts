import axios from "axios";
import type {PaginationType} from "../types/types.ts";

export class PostService {
  static async getAll(args: PaginationType) {
    return await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: args.limit,
        _page: args.page,
      }
    });
  }

  static async getById(id: number) {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
