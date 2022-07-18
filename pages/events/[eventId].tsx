import { GetStaticProps, NextPage } from "next";
import EventSummary from "components/event-detail/event-summary";
import { EventLogisticsComponent } from "components/event-detail/event-logistics";
import { EventContentComponent } from "components/event-detail/event-content";
import { ErrorAlertComponent } from "components/ui/error-alert/error-alert";
import { EventInterface } from "components/events/types/event.interface";

interface IEventDetailPageProps {
  event: EventInterface;
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
      <EventSummary title={event.title} />
      <EventLogisticsComponent event={event} />
      <EventContentComponent>{event.description}</EventContentComponent>
    </>
  );
};

const getStaticProps: GetStaticProps<IEventDetailPageProps> = async () => {
  return {
    props: {},
  };
};

export default EventDetailPage;
