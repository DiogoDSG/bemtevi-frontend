import Message from "./CommentItem";
import NewComment from "./NewComment";

const DUMMY_MESSAGES = [
  {
    id: 1,
    owner: { fullName: "Joseph Stalin", username: "stalinho" },
    content: "dnjwadj anwjdn wajn fjawnf kjawn fjkan wfjna jwfkjwf aknf",
    likes: 7,
  },
  {
    id: 2,
    owner: { fullName: "Joseph Stalin", username: "stalinho" },
    content: "dnjwadj anwjdn wajn fjawnf kjawn fjkan wfjna jwfkjwf aknf",
    likes: 7,
  },
  {
    id: 3,
    owner: { fullName: "Joseph Stalin", username: "stalinho" },
    content: "dnjwadj anwjdn wajn fjawnf kjawn fjkan wfjna jwfkjwf aknf",
    likes: 7,
  },
  {
    id: 4,
    owner: { fullName: "Joseph Stalin", username: "stalinho" },
    content: "dnjwadj anwjdn wajn fjawnf kjawn fjkan wfjna jwfkjwf aknf",
    likes: 7,
  },
];

const MessageList = function (props) {
  return (
    <div>
      <ul>
        {DUMMY_MESSAGES.map((message) => {
          return (
            <li key={message.id} style={{ listStyle: "none" }}>
              <Message
                owner={message.owner}
                content={message.content}
                likes={message.likes}
              />
            </li>
          );
        })}
      </ul>
      <NewComment />
    </div>
  );
};

export default MessageList;
