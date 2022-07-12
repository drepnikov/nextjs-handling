import * as React from "react";
import { EventInterface } from "components/events/types/event.interface";
import Link from "next/link";
import Image from "next/image";

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
    <li>
      <img src={"/" + image} alt="" />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{humanReadableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>

        <div>
          <Link href={exploreLink}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};

export { EventItemComponent };
