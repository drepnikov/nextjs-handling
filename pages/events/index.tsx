import { NextPage } from "next";
import { getAllEvents } from "dummy-data";
import { EventListComponent } from "components/events/event-list.component";

const AllEventsPage: NextPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventListComponent items={events} />
    </div>
  );
};

export default AllEventsPage;
