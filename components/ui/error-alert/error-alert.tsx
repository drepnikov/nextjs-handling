import * as React from "react";
import classes from "./error-alert.module.css";
import { PropsWithChildren } from "react";

interface IErrorAlertProps {}

const ErrorAlertComponent: React.FC<PropsWithChildren<IErrorAlertProps>> = (
  props
) => {
  return <div className={classes.alert}>{props.children}</div>;
};

export { ErrorAlertComponent };
