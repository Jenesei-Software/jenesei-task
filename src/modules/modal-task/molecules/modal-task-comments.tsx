import { useDispatch } from "react-redux";
import { Dispatch, useState } from "react";
import { v4 } from "uuid";
import { AnyAction } from "redux";

import "../styles/modal-task-comments.css";

import { Comment } from "../../../stores/projects/interfaces";
import { addComment } from "../../../stores/projects/actions";

interface INewComment {
  commentContent: string;
  setCommentContent: Dispatch<React.SetStateAction<string | null>>;
  projectNumber: string;
  taskNumber: string;
  listName: string;
  parentCommentNumber?: string;
  dispatch: Dispatch<AnyAction>;
}
export const newComment = (props: INewComment) => {
  props.dispatch(
    addComment(
      props.projectNumber,
      props.taskNumber,
      props.listName,
      {
        commentNumber: v4(),
        content: props.commentContent,
        comments: [],
      },
      props.parentCommentNumber
    )
  );
  props.setCommentContent(null);
};

interface IModalTaskComments {
  projectNumber: string;
  taskNumber: string;
  listName: string;
  comment?: Comment;
}
export const ModalTaskComments = (props: IModalTaskComments) => {
  const dispatch = useDispatch();
  const [commentContent, setCommentContent] = useState<string | null>(null);
  return (
    <div className="ModalTaskComments">
      {props.comment && (
        <div className="ModalTaskComments__Content">
          {props.comment.content}
        </div>
      )}
      <div className="ModalTaskComments__Content__Bar">
        <input
          placeholder="Write comment"
          className="ModalTaskComments__Input Modal__Block__Input"
          minLength={4}
          maxLength={40}
          type="text"
          value={commentContent || ""}
          onChange={(event) => setCommentContent(event.target.value)}
        />
        <button
          onClick={() => {
            if (commentContent)
              newComment({
                commentContent: commentContent,
                setCommentContent: setCommentContent,
                projectNumber: props.projectNumber,
                taskNumber: props.taskNumber,
                listName: props.listName,
                parentCommentNumber: props?.comment?.commentNumber,
                dispatch: dispatch,
              });
          }}
          className="ModalTaskComments__Button Modal__Block__Button"
        >
          Answer
        </button>
      </div>
      <div className="ModalTaskComments__SubComment">
        {props.comment &&
          props.comment.comments?.map((e) => (
            <ModalTaskComments
              key={e.commentNumber}
              projectNumber={props.projectNumber}
              taskNumber={props.taskNumber}
              listName={props.listName}
              comment={e}
            />
          ))}
      </div>
    </div>
  );
};
