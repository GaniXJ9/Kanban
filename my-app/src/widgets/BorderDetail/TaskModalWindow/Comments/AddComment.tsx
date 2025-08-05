import { useState } from "react";
import useBoards from "../../../../app/store/boards";
import useUsers from "../../../../app/store/users";
import useTasks from "../../../../app/store/tasks";
import useColumns from "../../../../app/store/columns";
import useComments from "../../../../app/store/comments";
import type { CommentEntity } from "../../../../features/types/comments/CommentEntity";
import SendButton from "../../../../shared/ui/buttons/SendButton";
import Textarea from "../../../../shared/ui/textareas/Textarea";

const AddComment = () => {
  const [value, setValue] = useState<string>("");
  const { currentBoard } = useBoards();
  const { currentUser } = useUsers();
  const { currentTask } = useTasks();
  const { currentColumn } = useColumns();
  const { addComment } = useComments();

  const handleAddComment = () => {
    if (currentUser && currentBoard && currentColumn && currentTask) {
      const newComment: CommentEntity = {
        id: crypto.randomUUID(),
        text: value,
        date: new Date(),
        user: currentUser,
      };

      addComment(currentBoard, currentColumn, currentTask, newComment);
      setValue("");
    }
  };

  return (
    <div className="py-5 flex flex-col items-end gap-2">
      <Textarea
        required={true}
        placeholder="Leave a comment"
        setValue={setValue}
        value={value}
      />

      <SendButton
        onClick={handleAddComment}
        padding="py-1.5 px-3"
        rounded="lg"
      />
    </div>
  );
};

export default AddComment;
