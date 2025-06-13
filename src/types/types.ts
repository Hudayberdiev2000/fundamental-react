export interface PaginationType {
    limit: number;
    page: number;
}

export interface PostComment {
    postId: number;
    id: number;
    name: string
    email: string;
    body: string;
}