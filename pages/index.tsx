import { GetServerSideProps, NextPage } from "next";
import { EventListComponent } from "components/events/event-list.component";
import { eventsService } from "components/events/services/events.service";
import { EventInterface } from "components/events/types/event.interface";

interface IHomePageProps {
  featuredEvents: EventInterface[];
}

const HomePage: NextPage<IHomePageProps> = ({ featuredEvents }) => {
  return (
    <div>
      <EventListComponent items={featuredEvents} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<
  IHomePageProps
> = async () => {
  const featuredEvents = await eventsService.getFeaturedEvents();

  return {
    props: { featuredEvents },
  };
};

export default HomePage;
