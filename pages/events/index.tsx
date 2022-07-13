import { NextPage } from "next";
import { getAllEvents } from "dummy-data";
import { EventListComponent } from "components/events/event-list.component";
import { EventsSearchComponent } from "components/events/events-search";
import { useCallback } from "react";
import { useRouter } from "next/router";

const AllEventsPage: NextPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  const onSearchEvents = useCallback(
    (year?: string, month?: string) => {
      router.push(`/events/${year}/${month}`);
    },
    [router]
  );

  return (
    <>
      <EventsSearchComponent onSubmit={onSearchEvents} />
      <EventListComponent items={events} />
    </>
  );
};

export default AllEventsPage;
