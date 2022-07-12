import { NextPage } from "next";
import { useRouter } from "next/router";

const FilteredEventsPage: NextPage = () => {
  const router = useRouter();
  let slug: string[] = [];

  if (Array.isArray(router.query.filters)) {
    slug = slug.concat(router.query.filters);
  }

  return (
    <div>
      <h1>Filtered Events: {slug.join(",")}</h1>
    </div>
  );
};

export default FilteredEventsPage;
