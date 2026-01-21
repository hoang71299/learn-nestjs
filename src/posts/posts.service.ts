import { Injectable } from '@nestjs/common'

@Injectable()
export class PostsService {
  getPosts() {
    return 'all posts'
  }
  createPost(body: any) {
    return body;
  }
  getPost(id: string) {
    return `post with id = ${id}`
  }
  updatePost(id: string, body: any) {
    return `update post with id = ${id} `;
  }
  deletePost(id: string) {
    return `delete post with id = ${id}`;
  }
}
