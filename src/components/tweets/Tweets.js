import { useState, useContext } from "react";

import { useEffect } from "react";
import NewTweet from "./NewTweet";
import TweetList from "./tweetList/TweetList";
import { fetchPosts } from "../../utils/api";
import AuthContext from "../../store/auth-context";

import classes from "./Tweets.module.css";

const Tweets = function () {
  const [tweets, setTweets] = useState([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
    (async function () {
      const posts = await fetchPosts(auth.token);
      setTweets(posts);
    })();
  }, [auth.token]);

  const addTweetHandler = function (tweet) {
    setTweets((prevState) => [tweet, ...prevState]);
  };

  return (
    <div className={classes.container}>
      <NewTweet onAddTweet={addTweetHandler} />
      <TweetList tweets={tweets} />
    </div>
  );
};

export default Tweets;
