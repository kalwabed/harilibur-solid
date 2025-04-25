import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import AllHolidays from "~/components/all-holidays";
import NavigationButton from "~/components/navigation-button";
import { getHolidays } from "~/utils/fetcher";

export const useHolidays = routeLoader$(async (req) => {
  const year = req.params.year;
  const holidays = await getHolidays(`?year=${year}`);

  return holidays;
});

const YearPage = component$(() => {
  const holidays = useHolidays();
  // const location = useLocation();
  // const year: string = location.params.year;

  return (
    <>
      {/* <Title>{`${year} | Hari libur nasional dan hari besar di Indonesia`}</Title> */}
      <AllHolidays
        headerTitle={(new Date().getFullYear() + 1).toString()}
        holidays={holidays.value}
      />
      <NavigationButton type="current" />
    </>
  );
});

export default YearPage;
