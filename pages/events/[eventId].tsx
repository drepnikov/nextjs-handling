import { NextPage } from "next";
import { useRouter } from "next/router";
import { getEventById } from "dummy-data";
import EventSummary from "components/event-detail/event-summary";
import { EventLogisticsComponent } from "components/event-detail/event-logistics";
import { EventContentComponent } from "components/event-detail/event-content";

const EventDetailPage: NextPage = () => {
  const router = useRouter();
  const event = getEventById(router.query.eventId as string);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogisticsComponent event={event} />
      <EventContentComponent>{event.description}</EventContentComponent>
    </>
  );
};

export default EventDetailPage;
