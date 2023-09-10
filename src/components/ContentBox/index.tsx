import classes from "./ContentBox.module.css";

type TContentBoxProps = {
  father: string;
  mother: string;
  location: string;
  name: string;
  description: string;
  left?: boolean;
};

export const ContentBox = ({
  father,
  mother,
  location,
  name,
  description,
  left,
}: TContentBoxProps) => {
  return (
    <div
      className={classes["content-box"]}
      {...(left && { style: { flexDirection: "row-reverse" } })}
    >
      <p>
        <b className={classes.name}>{name}</b>
        <p className={classes.desc}>{description}</p>
      </p>

      <div className={classes.content}>
        <p>
          Ba: <b>{father}</b>
        </p>
        <p>
          Mẹ: <b>{mother}</b>
        </p>
        <p>Địa chỉ: {location}</p>
      </div>
    </div>
  );
};
