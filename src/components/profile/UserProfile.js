import { useState, useEffect, useContext } from "react";
import UserProfileInfo from "./UserProfileInfo";
import TweetList from "../tweets/tweetList/TweetList";
import { fetchUserPosts } from "../../utils/api";
import UserContext from "../../store/user-context";

import classes from "./UserProfile.module.css";

const UserProfile = function () {
  const { id } = useContext(UserContext);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    (async function () {
      const posts = await fetchUserPosts(id);
      setTweets(posts);
    })();
  }, [id]);
  return (
    <section className={classes.container}>
      <UserProfileInfo />
      <TweetList tweets={tweets} />
    </section>
  );
};

export default UserProfile;
