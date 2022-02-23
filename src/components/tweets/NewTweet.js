import { useState, useContext } from "react";
import classes from "./NewTweet.module.css";
import UserContext from "../../store/user-context";

const NewTweet = function (props) {
  const [input, setInput] = useState("");
  const userContext = useContext(UserContext);

  const inputChangeHandler = function (e) {
    setInput(e.target.value);
  };

  const addTweetHandler = async function () {
    if (input.trim() === "") return;

    const new_post = {
      author: `${userContext.firstName} ${userContext.lastName}`,
      username: userContext.username,
      content: input,
    };

    await fetch(`${process.env.REACT_APP_BACKEND_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(new_post),
    });

    props.onAddTweet(new_post);
    setInput("");
  };

  return (
    <div className={classes.container}>
      <img
        className={classes["profile-pic"]}
        src="https://cdn.dribbble.com/users/2878951/screenshots/14013747/media/603f0b853c409547dfa51cba996f375c.png?compress=1&resize=400x300"
        alt="post owner"
      />
      <div className={classes["input-container"]}>
        <textarea
          className={classes["text-input"]}
          rows={4}
          placeholder="What's happening?"
          value={input}
          onChange={inputChangeHandler}
          maxLength={512}
        />
        <button onClick={addTweetHandler} className={classes.btn}>
          Post
        </button>
      </div>
    </div>
  );
};

export default NewTweet;
