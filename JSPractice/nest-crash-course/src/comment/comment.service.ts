import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  findUserComment(userId: string) {
    return 'This is the comment of the user';
  }
}
