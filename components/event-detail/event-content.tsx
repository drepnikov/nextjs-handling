import * as React from "react";
import classes from "./event-content.module.css";
import { PropsWithChildren } from "react";

interface IEventContentComponentProps {}

const EventContentComponent: React.FC<
  PropsWithChildren<IEventContentComponentProps>
> = (props) => {
  return <section className={classes.content}>{props.children}</section>;
};

export { EventContentComponent };
