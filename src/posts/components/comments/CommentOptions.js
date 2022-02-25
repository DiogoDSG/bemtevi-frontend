import OptionsCard from "../../../shared/components/UI/OptionsCard";
import { IoFlagOutline } from "react-icons/io5";
import classes from "./CommentOptions.module.css";
import { useHttp } from "../../../shared/hooks/use-http";

const CommentOptions = function (props) {
  const { isLoading, sendRequest } = useHttp();
  return (
    <OptionsCard onBlur={props.onBlur} translate={classes.container}>
      <div>
        <IoFlagOutline />
        <span>Report Comment</span>
      </div>
    </OptionsCard>
  );
};

export default CommentOptions;
