import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  getPost() {
    return 'all posts';
  }
  createPost(body: any) {
    return body;
  }
  updatePost(id: string, body: any) {
    return `update post with id = ${id} `;
  }
  deletePost(id: string) {
    return `delete post with id = ${id}`;
  }
}
