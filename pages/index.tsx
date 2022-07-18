import { GetStaticProps, NextPage } from "next";
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

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  const featuredEvents = await eventsService.getFeaturedEvents();

  return {
    props: { featuredEvents },
    revalidate: 1800,
  };
};

export default HomePage;
