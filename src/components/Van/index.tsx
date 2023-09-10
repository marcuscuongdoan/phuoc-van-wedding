import VanImage from "../../assets/van.png";
import classes from "./Van.module.css";

export const Van = () => {
  return (
    <div className={classes.van}>
      <img
        src={VanImage}
        alt="Van"
        style={{
          height: "50vh",
        }}
      />
    </div>
  );
};
