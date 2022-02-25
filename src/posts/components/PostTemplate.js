import { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import CommentList from "./comments/CommentList";

import CommentOptions from "./comments/CommentOptions";
import UserModalCard from "../../user/components/userModalCard/UserModalCard";
import { useModalCard } from "../../shared/hooks/user-modal-card";

const PostTemplate = function (props) {
  const [openCommentOptions, setOpenCommentOptions] = useState(false);
  const {
    isModalOpen: isProfileModalOpen,
    openModal: openProfileModal,
    closeModal: closeProfileModal,
  } = useModalCard();

  const handleOpenCommentOptions = function () {
    setOpenCommentOptions((prev) => !prev);
  };
  return (
    <div className={props.styles.container}>
      {isProfileModalOpen && (
        <UserModalCard
          owner={props.owner}
          onBlur={closeProfileModal}
          onLoseFocus={closeProfileModal}
        />
      )}
      <div className={props.styles["post-container"]}>
        <img
          alt="user profile "
          className={props.styles["profile-pic"]}
          src="https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300"
          onMouseEnter={openProfileModal}
        />
        <div className={props.styles.main}>
          <div className={props.styles["user-info"]}>
            <span
              className={props.styles.username}
              onMouseEnter={openProfileModal}
            >
              {props.owner.fullName}
            </span>
            <span className={props.styles.hashtag}>
              @{props.owner.username}
            </span>
          </div>
          <p className={props.styles.content}>{props.content}</p>
          {props.reactions}
        </div>
        <IoEllipsisVertical
          onClick={handleOpenCommentOptions}
          className={props.styles.icon}
        />
        {openCommentOptions && (
          <CommentOptions onBlur={handleOpenCommentOptions} />
        )}
      </div>
      {props.commentsOpen && <CommentList />}
    </div>
  );
};

export default PostTemplate;
