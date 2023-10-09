import { Comment } from "../stores/projects/interfaces";

export const countNestedComments = (comments: Comment[]): number => {
  let count = comments.length;

  for (let comment of comments) {
    if (comment.comments) {
      count += countNestedComments(comment.comments);
    }
  }

  return count;
};