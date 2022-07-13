import * as React from "react";
import classes from "./logistics-item.module.css";
import { PropsWithChildren } from "react";

interface ILogisticsItemComponentProps {
  icon: React.FC;
}

const LogisticsItemComponent: React.FC<
  PropsWithChildren<ILogisticsItemComponentProps>
> = (props) => {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
};

export { LogisticsItemComponent };
