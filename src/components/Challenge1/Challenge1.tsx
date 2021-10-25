import { Countdown, CountdownConfig } from "../Countdown/CountDown";
import React, { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";

export const Challenge1 = () => {
  const { t, i18n } = useTranslation();
  const countDownConfig: CountdownConfig = useMemo(() => {
    return [
      {
        format: "d",
        unit: t("countdown:days"),
      },
      {
        format: "h",
        unit: t("countdown:hours"),
      },
      {
        format: "m",
        unit: t("countdown:minutes"),
      },
      {
        format: "s",
        unit: t("countdown:seconds"),
      },
    ];
  }, [i18n.language]);

  return <Countdown config={countDownConfig} dateEnd="2021-10-29 22:30:26" />;
};
