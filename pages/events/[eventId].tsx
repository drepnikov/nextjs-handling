import { NextPage } from "next";
import { useRouter } from "next/router";

const EventDetailPage: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Event Detail: {router.query.eventId}</h1>
    </div>
  );
};

export default EventDetailPage;
