import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Card from "./Card";

import classes from "./LoadingSpinner.module.css";

const LoadingSpinner = function () {
  return (
    <Card>
      <div className="center">
        <AiOutlineLoading3Quarters className={classes.spinner} />
      </div>
    </Card>
  );
};

export default LoadingSpinner;
