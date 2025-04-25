import { createAsync, query } from "@solidjs/router";

import AllHolidays from "~/components/all-holidays";
import NavigationButton from "~/components/navigation-button";
import UpcomingHolidays from "~/components/upcoming-holidays";
import dateExtractor from "~/utils/date-extractor";
import { getHolidays } from "~/utils/fetcher";

const getCurrentHolidays = query(async () => {
  const holidays = await getHolidays();
  const extractedHoliday = dateExtractor(holidays);
  // console.log("ex", extractedHoliday);

  return extractedHoliday;
}, "holidays");

export const route = {
  preload: () => getCurrentHolidays(),
};

export default function Home() {
  const holidays = createAsync(() => getCurrentHolidays());

  console.log("ho", holidays());

  return (
    <>
      <UpcomingHolidays
        headerTitle="Bulan ini"
        upcomingHolidays={holidays()?.upcomings}
      />
      <AllHolidays
        headerTitle="Bulan depan"
        holidays={holidays()?.nextMonths}
      />
      <NavigationButton type="next" />
    </>
  );
}
