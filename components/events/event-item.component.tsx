import * as React from "react";
import classes from "./event-item.module.css";
import { EventInterface } from "components/events/types/event.interface";
import { ButtonComponent } from "components/ui/button/button";
import { DateIcon } from "components/icons/date-icon";
import { AddressIcon } from "components/icons/address-icon";
import { ArrowRightIcon } from "components/icons/arrow-right-icon";

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
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <ButtonComponent link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </ButtonComponent>
        </div>
      </div>
    </li>
  );
};

export { EventItemComponent };
