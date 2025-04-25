import type { HolidayFetcher } from "~/utils/fetcher";
import Card from "./card";
import CardPreview from "./card/card-preview";
import GridWrapper from "./grid-wrapper";
import { component$ } from "@builder.io/qwik";

interface UpcomingHolidaysProps {
  headerTitle: string;
  upcomingHolidays: HolidayFetcher[];
}

const UpcomingHolidays = component$(
  ({ headerTitle, upcomingHolidays }: UpcomingHolidaysProps) => {
    const filteredHolidays = upcomingHolidays.filter(
      (upcome) => upcome.is_national_holiday,
    );

    return (
      <GridWrapper headerTitle={headerTitle}>
        {filteredHolidays.length === 0 ? (
          <Card isAfterEvent>
            <p>Tidak ada</p>
          </Card>
        ) : null}

        {filteredHolidays.map((holiday) => (
          <CardPreview
            key={holiday.holiday_date}
            holidayDate={holiday.holiday_date}
            holidayName={holiday.holiday_name}
          />
        ))}
      </GridWrapper>
    );
  },
);

export default UpcomingHolidays;
