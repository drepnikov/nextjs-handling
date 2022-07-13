import { NextPage } from "next";
import { useRouter } from "next/router";
import { EventListComponent } from "components/events/event-list.component";
import { getFilteredEvents } from "dummy-data";
import { ResultsTitleComponent } from "components/events/results-title";
import { ButtonComponent } from "components/ui/button/button";
import { ErrorAlertComponent } from "components/ui/error-alert/error-alert";

const FilteredEventsPage: NextPage = () => {
  const router = useRouter();
  const filters = router.query.filters;

  if (!filters) {
    return <p className={"center"}>Loading...</p>;
  }
  const [filterYear, filterMonth] = router.query.filters as string[];

  const year = +filterYear;
  const month = +filterMonth;

  if (
    Object.is(NaN, year) ||
    Object.is(NaN, month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <>
        <ErrorAlertComponent>
          <p>Invalid filter. Please adjust yout values!</p>
        </ErrorAlertComponent>

        <div className={"center"}>
          <ButtonComponent link={"/events"}>Show All events</ButtonComponent>
        </div>
      </>
    );
  }

  const events = getFilteredEvents({
    month: Number(month),
    year: Number(year),
  });

  if (!events.length)
    return (
      <>
        <ErrorAlertComponent>
          <p>No events found for the chosen filter!</p>
        </ErrorAlertComponent>

        <div className={"center"}>
          <ButtonComponent link={"/events"}>Show All events</ButtonComponent>
        </div>
      </>
    );

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitleComponent date={date} />
      <EventListComponent items={events} />
    </>
  );
};

export default FilteredEventsPage;
