import { NextPage } from "next";
import { getAllEvents } from "dummy-data";
import { EventListComponent } from "components/events/event-list.component";
import { EventsSearchComponent } from "components/events/events-search";

const AllEventsPage: NextPage = () => {
  const events = getAllEvents();

  return (
    <>
      <EventsSearchComponent />
      <EventListComponent items={events} />
    </>
  );
};

export default AllEventsPage;
