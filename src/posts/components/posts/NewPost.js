import { useState, useContext } from "react";

import { createPost } from "../../../shared/util/api-post";
import classes from "./NewPost.module.css";
import AuthContext from "../../../shared/context/auth-context";

const NewPost = function () {
  const [input, setInput] = useState("");
  const auth = useContext(AuthContext);

  const inputChangeHandler = function (e) {
    setInput(e.target.value);
  };

  const addPostHandler = async function () {
    if (input.trim() === "") return;

    await createPost({ content: input }, auth.token);

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
        <button onClick={addPostHandler} className={classes.btn}>
          Post
        </button>
      </div>
    </div>
  );
};

export default NewPost;
