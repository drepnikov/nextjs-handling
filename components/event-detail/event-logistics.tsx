import classes from "./event-logistics.module.css";
import { AddressIcon } from "components/icons/address-icon";
import { DateIcon } from "components/icons/date-icon";
import { LogisticsItemComponent } from "components/event-detail/logistics-item";
import { EventInterface } from "components/events/types/event.interface";

interface IEventLogisticsComponentProps {
  event: EventInterface;
}

const EventLogisticsComponent: React.FC<IEventLogisticsComponentProps> = ({
  event,
}) => {
  const { date, location, image, title } = event;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = location.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt={title} />
      </div>
      <ul className={classes.list}>
        <LogisticsItemComponent icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItemComponent>
        <LogisticsItemComponent icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItemComponent>
      </ul>
    </section>
  );
};

export { EventLogisticsComponent };
