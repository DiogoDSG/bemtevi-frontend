import Tweet from './Tweet';
import classes from './TweetList.module.css';

const TweetList = function (props) {
  return (
    <div className={classes.container}>
      {props.tweets.map(twit => {
        return (
          <Tweet
            key={twit.id}
            id={twit.id}
            img={twit.img}
            author={twit.author}
            username={twit.username}
            content={twit.content}
            likes={twit.likes}
          />
        );
      })}
    </div>
  );
};

export default TweetList;
