import PhuocImage from "../../assets/phuoc.png";
import classes from "./Phuoc.module.css";

export const Phuoc = () => {
  return (
    <div className={classes.phuoc}>
      <img
        src={PhuocImage}
        alt="Phuoc"
        style={{
          height: "50vh",
        }}
      />
    </div>
  );
};
