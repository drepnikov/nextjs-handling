import * as React from "react";
import Link from "next/link";
import classes from "./event-item.module.css";
import { EventInterface } from "components/events/types/event.interface";

interface IEventItemComponentProps {
  event: EventInterface;
}

const EventItemComponent: React.FC<IEventItemComponentProps> = ({ event }) => {
  const { title, image, date, location, id } = event;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", " ");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export { EventItemComponent };
