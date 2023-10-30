import { Comment } from "@stores/projects/interfaces";

export const countNestedComments = (comments: Comment[]): number => {
  let count = comments.length;

  for (const comment of comments) {
    if (comment.comments) {
      count += countNestedComments(comment.comments);
    }
  }

  return count;
};