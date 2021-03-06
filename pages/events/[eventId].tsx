import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import EventSummary from "components/event-detail/event-summary";
import { EventLogisticsComponent } from "components/event-detail/event-logistics";
import { EventContentComponent } from "components/event-detail/event-content";
import { ErrorAlertComponent } from "components/ui/error-alert/error-alert";
import { EventInterface } from "components/events/types/event.interface";
import { eventsService } from "components/events/services/events.service";
import { Meta } from "components/meta/meta";

interface IEventDetailPageProps {
  event: EventInterface | null;
}

const EventDetailPage: NextPage<IEventDetailPageProps> = ({ event }) => {
  if (!event) {
    return (
      <ErrorAlertComponent>
        <p>No event found!</p>
      </ErrorAlertComponent>
    );
  }

  return (
    <>
      <Meta title={event.title} description={event.description} />
      <EventSummary title={event.title} />
      <EventLogisticsComponent event={event} />
      <EventContentComponent>{event.description}</EventContentComponent>
    </>
  );
};

export const getStaticProps: GetStaticProps<IEventDetailPageProps> = async (
  context
) => {
  const event = await eventsService.getEventById(
    context.params?.eventId as string
  );

  return {
    props: {
      event: event || null,
    },
    revalidate: 30,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const events = await eventsService.getFeaturedEvents();

  return {
    paths: events.map((event) => ({
      params: { eventId: event.id },
    })),
    fallback: "blocking",
  };
};

export default EventDetailPage;
