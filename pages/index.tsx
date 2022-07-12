import { NextPage } from "next";
import { getFeaturedEvents } from "dummy-data";
import { EventListComponent } from "components/events/event-list.component";

const HomePage: NextPage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventListComponent items={featuredEvents} />
    </div>
  );
};

export default HomePage;
