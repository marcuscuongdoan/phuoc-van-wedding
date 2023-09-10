import classes from "./Banner.module.css";

export const Banner = () => (
  <div className={classes.banner}>
    <p
      style={{
        fontSize: 72,
        fontWeight: 600,
        position: "absolute",
        top: "30%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
        color: "white",
      }}
    >
      Wedding
    </p>
    <div className={classes.avatar} />
  </div>
);
