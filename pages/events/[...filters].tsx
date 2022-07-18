import { GetServerSideProps, NextPage } from "next";
import { EventListComponent } from "components/events/event-list.component";
import { ResultsTitleComponent } from "components/events/results-title";
import { ButtonComponent } from "components/ui/button/button";
import { ErrorAlertComponent } from "components/ui/error-alert/error-alert";
import { EventInterface } from "components/events/types/event.interface";
import { eventsService } from "components/events/services/events.service";

interface IFilteredEventsPage {
  events: EventInterface[];
  hasError: boolean;
  month: number;
  year: number;
}

const FilteredEventsPage: NextPage<IFilteredEventsPage> = ({
  hasError,
  events,
  month,
  year,
}) => {
  if (hasError) {
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

  return (
    <>
      <ResultsTitleComponent year={year} month={month} />
      <EventListComponent items={events} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps<
  IFilteredEventsPage
> = async ({ params }) => {
  const [filterYear, filterMonth] = params?.filters as string[];

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
    return {
      props: {
        hasError: true,
        events: [],
        month,
        year,
      },
    };
  }

  const filteredEvents = await eventsService.getFilteredEvents(year, month);

  return {
    props: {
      hasError: false,
      events: filteredEvents,
      month,
      year,
    },
  };
};

export default FilteredEventsPage;
