import { reversedHolidayResult, sortDate } from "~/utils/date-extractor";

import { toMonth } from "~/utils/date-formatter";
import type { HolidayFetcher } from "~/utils/fetcher";
import CardPreview from "./card/card-preview";
import GridWrapper from "./grid-wrapper";
import Month from "./month";
import { useLocation } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

interface AllHolidaysProps {
  headerTitle: string;
  holidays?: HolidayFetcher[];
}

const AllHolidays = component$(
  ({ headerTitle, holidays }: AllHolidaysProps) => {
    const holidayResult: { [month: string]: HolidayFetcher[] } = {};
    const location = useLocation();
    const filteredHolidays = holidays?.filter(
      (holiday) => holiday.is_national_holiday,
    );

    filteredHolidays?.forEach((holiday) => {
      const month = toMonth(holiday.holiday_date);

      if (holidayResult[month]) {
        holidayResult[month].push(holiday);
        holidayResult[month] = sortDate(holidayResult[month]);
      } else {
        holidayResult[month] = [holiday];
      }
    });

    const finalHolidayResult = reversedHolidayResult(holidayResult);

    return (
      <GridWrapper headerTitle={headerTitle}>
        {Object.keys(finalHolidayResult).length === 0 ? (
          <p class="not_available" />
        ) : null}

        {Object.keys(finalHolidayResult).map((month, index) => (
          <Month
            key={`${month}-${index}-${location.params.year ?? "0"}`}
            month={month}
          >
            {Object.values(finalHolidayResult)[index].map((data) => (
              <CardPreview
                key={data.holiday_name}
                holidayDate={data.holiday_date}
                holidayName={data.holiday_name}
              />
            ))}
          </Month>
        ))}
      </GridWrapper>
    );
  },
);

export default AllHolidays;
