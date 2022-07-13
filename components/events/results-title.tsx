import * as React from "react";
import classes from "./results-title.module.css";
import { ButtonComponent } from "components/ui/button/button";

interface IResultsTitleProps {
  date: Date;
}

const ResultsTitleComponent: React.FC<IResultsTitleProps> = ({ date }) => {
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <ButtonComponent link="/events">Show all events</ButtonComponent>
    </section>
  );
};

export { ResultsTitleComponent };
