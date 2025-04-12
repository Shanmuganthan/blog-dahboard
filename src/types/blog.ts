export interface BlogPost {
    id: number;
    title: string;
    author: string;
    body: string;
    excerpt?: string;
  }
  
  export interface CreateBlogPostRequest {
    title: string;
    author: string;
    body: string;
  }