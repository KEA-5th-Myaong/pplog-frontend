import Icons from '../../../../../../../_components/ui/Icon';
import { ReplyIcon } from '../../../../../../../_components/ui/iconPath';
import { CommentProps } from '../../_types/post';
import EditCommentInput from './EditCommentInput';

interface CommentItemProps {
  comment: CommentProps;
  onReplyClick: (id: number) => void;
  onEditClick: (id: number) => void;
  onEditSubmit: (id: number, content: string) => void;
  isReply?: boolean;
  isEditing?: boolean;
}

export default function CommentItem({
  comment,
  onReplyClick,
  onEditClick,
  onEditSubmit,
  isReply = false,
  isEditing,
}: CommentItemProps) {
  return (
    <div className={`flex flex-col py-6 px-[6px] border-b ${isReply && 'pl-6'}`}>
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-[10px]">
          {isReply && <Icons name={ReplyIcon} />}
          <div id="프로필 사진" className="min-w-[29px] min-h-[29px] bg-pink-300 rounded-full" />
          <p>{comment.userName}</p>
        </div>
        <div className="flex gap-2 text-xs text-gray-0">
          <button type="button" onClick={() => onReplyClick(comment.id)}>
            답글
          </button>
          <button type="button" onClick={() => onEditClick(comment.id)}>
            수정
          </button>
          <div>삭제</div>
          <div>신고</div>
        </div>
      </div>
      {isEditing ? (
        <EditCommentInput initialContent={comment.comment} onSubmit={(content) => onEditSubmit(comment.id, content)} />
      ) : (
        <>
          <div className={`${isReply ? 'ml-16' : 'ml-10'} mb-[18px] py-2 text-[13px] break-words`}>
            {comment.comment}
          </div>
          <div className={`${isReply ? 'ml-16' : 'ml-10'} text-xs text-gray-0`}>{comment.updatedAt}</div>
        </>
      )}
    </div>
  );
}
