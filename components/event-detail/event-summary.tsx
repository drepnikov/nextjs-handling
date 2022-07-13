import * as React from "react";
import classes from "./event-summary.module.css";

interface IEventSummaryProps {
  title: string;
}

const EventSummary: React.FC<IEventSummaryProps> = (props) => {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;
