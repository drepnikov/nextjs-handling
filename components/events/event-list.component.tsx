import * as React from "react";
import classes from "./event-list.module.css";
import { EventInterface } from "components/events/types/event.interface";
import { EventItemComponent } from "components/events/event-item.component";

interface IEventListComponentProps {
  items: EventInterface[];
}

const EventListComponent: React.FC<IEventListComponentProps> = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => {
        return <EventItemComponent key={event.id} event={event} />;
      })}
    </ul>
  );
};

export { EventListComponent };
