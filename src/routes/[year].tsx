import { useParams } from "@solidjs/router";
import { createResource } from "solid-js";
import AllHolidays from "~/components/all-holidays";
import NavigationButton from "~/components/navigation-button";
import { getHolidays } from "~/utils/fetcher";

const YearPage = () => {
  const params = useParams();
  const year: string = params.year;

  const [holidays] = createResource(async () => {
    const holidays = await getHolidays(`?year=${year}`);

    console.log("holidays", holidays);
    return holidays;
  });

  return (
    <>
      {/* <Title>{`${year} | Hari libur nasional dan hari besar di Indonesia`}</Title> */}
      <AllHolidays
        headerTitle={(new Date().getFullYear() + 1).toString()}
        holidays={holidays()}
      />
      <NavigationButton type="current" />
    </>
  );
};

export default YearPage;
