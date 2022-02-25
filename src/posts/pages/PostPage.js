import { useState, useContext } from "react";

import { useEffect } from "react";
import NewPost from "../components/posts/NewPost";
import PostList from "../components/posts/PostList";
import { fetchPosts } from "../../shared/util/api-post";
import AuthContext from "../../shared/context/auth-context";
import { useHttp } from "../../shared/hooks/use-http";
import LoadingSpinner from "../../shared/components/UI/LoadingSpinner";
import Card from "../../shared/components/UI/Card";

import classes from "./PostPage.module.css";

const PostPage = function () {
  const [posts, setPosts] = useState([]);
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest } = useHttp();

  useEffect(() => {
    (async function () {
      if (!auth.token) return;
      const fetchedPosts = await sendRequest(fetchPosts, auth.token);
      setPosts(fetchedPosts);
    })();
  }, [auth.token, sendRequest]);

  const addPostHandler = function (tweet) {
    setPosts((prevState) => [tweet, ...prevState]);
  };

  return (
    <div className={classes.container}>
      <NewPost onAddTweet={addPostHandler} />
      {!isLoading && posts.length > 0 && <PostList posts={posts} />}
      {!isLoading && posts.length === 0 && (
        <Card center>
          <p>No posts yet, be the first.</p>
        </Card>
      )}
      {isLoading && <LoadingSpinner />}
    </div>
  );
};

export default PostPage;
