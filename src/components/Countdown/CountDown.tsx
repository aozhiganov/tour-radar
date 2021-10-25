import moment from "moment";
import React, { useEffect, useMemo, useState } from "react";
import { CountdownItem, CountdownItemProps } from "./CountdownItem";
import { createUseStyles } from "react-jss";

export type CountdownConfig = Array<{
  format: moment.unitOfTime.Base;
  unit: string;
}>;

type CountdownProps = {
  config: CountdownConfig;
  dateEnd: string;
};

const useStyles = createUseStyles<string, { count: number }>({
  container: {
    display: "grid",
    columnGap: 10,
    gridTemplateColumns: ({ count }) => `repeat(${count}, 90px)`,
  },
});

export const Countdown: React.FC<CountdownProps> = ({ config, dateEnd }) => {
  const [tick, setTick] = useState(0);
  const styles = useStyles({ count: config.length });

  const items: CountdownItemProps[] = useMemo(() => {
    const diff = moment(dateEnd).diff(moment());
    const duration = moment.duration(diff);
    return config.map(({ format, unit }) => ({
      value: duration.get(format).toString(),
      unit,
    }));
  }, [dateEnd, config, tick]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick((prevTick) => prevTick + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <CountdownItem {...item} key={item.unit} />
      ))}
    </div>
  );
};
