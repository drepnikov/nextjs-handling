import classes from "./event-logistics.module.css";
import { AddressIcon } from "components/icons/address-icon";
import { DateIcon } from "components/icons/date-icon";
import { LogisticsItemComponent } from "components/event-detail/logistics-item";
import { EventInterface } from "components/events/types/event.interface";
import Image from "next/image";

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
        <Image src={`/${image}`} alt={title} width={350} height={340} />
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
