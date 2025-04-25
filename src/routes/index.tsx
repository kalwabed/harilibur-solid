import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import AllHolidays from "~/components/all-holidays";
import NavigationButton from "~/components/navigation-button";
import UpcomingHolidays from "~/components/upcoming-holidays";
import dateExtractor from "~/utils/date-extractor";
import { getHolidays } from "~/utils/fetcher";

export const useHolidays = routeLoader$(async () => {
  const holidays = await getHolidays();
  const extractedHoliday = dateExtractor(holidays);

  return extractedHoliday;
});

export default component$(() => {
  const holidays = useHolidays();

  return (
    <>
      <UpcomingHolidays
        headerTitle="Bulan ini"
        upcomingHolidays={holidays.value.upcomings}
      />
      <AllHolidays
        headerTitle="Bulan depan"
        holidays={holidays.value.nextMonths}
      />
      <NavigationButton type="next" />
    </>
  );
});

export const head: DocumentHead = {
  title: "Hari libur nasional dan hari besar di Indonesia",
  meta: [
    {
      name: "description",
      content: "Daftar hari libur nasional di Indonesia.",
    },
  ],
};
