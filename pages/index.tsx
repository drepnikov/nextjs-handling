import { GetStaticProps, NextPage } from "next";
import { EventListComponent } from "components/events/event-list.component";
import { eventsService } from "components/events/services/events.service";
import { EventInterface } from "components/events/types/event.interface";
import { Meta } from "components/meta/meta";

interface IHomePageProps {
  featuredEvents: EventInterface[];
}

const HomePage: NextPage<IHomePageProps> = ({ featuredEvents }) => {
  return (
    <div>
      <Meta
        title={"NextJS Events"}
        description={"Find a lot of great events allow you to evolve"}
      />
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
