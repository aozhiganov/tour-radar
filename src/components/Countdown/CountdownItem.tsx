import React from "react";
import { createUseStyles } from "react-jss";

export const itemWidth = 90;

const useStyles = createUseStyles({
  container: {
    border: {
      width: 1,
      color: "#000",
      style: "solid",
    },
    width: itemWidth,
    height: 120,
    padding: 5,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  value: {
    fontSize: 40,
    lineHeight: 1,
    width: "100%",
    textAlign: "center",
    fontWeight: "bold",
  },
  unit: {
    fontSize: 14,
    textTransform: "uppercase",
  },
});

export type CountdownItemProps = {
  value: string;
  unit: string;
};

export const CountdownItem: React.FC<CountdownItemProps> = ({
  value,
  unit,
}) => {
  const style = useStyles();

  return (
    <div className={style.container}>
      <div className={style.value}>{value}</div>
      <div className={style.unit}>{unit}</div>
    </div>
  );
};
