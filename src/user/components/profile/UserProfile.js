import { useState, useEffect, useContext } from "react";
import UserProfileInfo from "./UserProfileInfo";
import PostList from "../../../posts/components/posts/PostList";
import { fetchUserPosts } from "../../../shared/util/api-post";
import UserContext from "../../../shared/context/user-context";
import { useHttp } from "../../../shared/hooks/use-http";
import AuthContext from "../../../shared/context/auth-context";
import classes from "./UserProfile.module.css";
import Card from "../../../shared/components/UI/Card";
import LoadingSpinner from "../../../shared/components/UI/LoadingSpinner";

const UserProfile = function () {
  const { id } = useContext(UserContext);
  const { token } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const { isLoading, sendRequest } = useHttp();

  useEffect(() => {
    (async function () {
      if (!id || !token) return;
      const posts = await sendRequest(fetchUserPosts, id, token);
      setPosts(posts);
    })();
  }, [id, sendRequest, token]);
  return (
    <section className={classes.container}>
      <UserProfileInfo />
      {!isLoading && posts.length > 0 && <PostList posts={posts} />}
      {!isLoading && posts.length === 0 && (
        <Card center>
          <p>No posts yet, be the first.</p>
        </Card>
      )}
      {isLoading && <LoadingSpinner />}
    </section>
  );
};

export default UserProfile;
