import { GetStaticProps, NextPage } from "next";
import { EventListComponent } from "components/events/event-list.component";
import { EventsSearchComponent } from "components/events/events-search";
import { useCallback } from "react";
import { useRouter } from "next/router";
import { eventsService } from "components/events/services/events.service";
import { EventInterface } from "components/events/types/event.interface";
import { Meta } from "components/meta/meta";

interface IAllEventsPageProps {
  events: EventInterface[];
}

const AllEventsPage: NextPage<IAllEventsPageProps> = ({ events }) => {
  const router = useRouter();
  const onSearchEvents = useCallback(
    (year?: string, month?: string) => {
      router.push(`/events/${year}/${month}`);
    },
    [router]
  );

  return (
    <>
      <Meta
        title={"All Events"}
        description={"Find a lot of great events allow you to evolve"}
      />
      <EventsSearchComponent onSubmit={onSearchEvents} />
      <EventListComponent items={events} />
    </>
  );
};

export const getStaticProps: GetStaticProps<IAllEventsPageProps> = async () => {
  const events = await eventsService.getAllEvents();

  return {
    props: { events },
    revalidate: 60,
  };
};

export default AllEventsPage;
