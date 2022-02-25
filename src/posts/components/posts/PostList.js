import PostItem from "./PostItem";
import classes from "./PostList.module.css";

const PostList = function (props) {
  return (
    <div className={classes.container}>
      {props.posts.map((post) => {
        return (
          <PostItem
            key={post.id}
            id={post.id}
            img={post.img}
            owner={post.owner}
            content={post.content}
            likes={post.likes}
          />
        );
      })}
    </div>
  );
};

export default PostList;
