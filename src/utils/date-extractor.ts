import type { HolidayFetcher } from "./fetcher";

export interface ExtractedDate {
  upcomings: HolidayFetcher[];
  nextMonths: HolidayFetcher[];
  previousMonths: HolidayFetcher[];
}

type HolidayResult = { [month: string]: HolidayFetcher[] };

// reverse the order of the month
// because the API returns the data in ascending order
export function reversedHolidayResult(holidayResult: HolidayResult) {
  const reversedHolidayResult: HolidayResult = {};
  Object.keys(holidayResult)
    .reverse()
    .forEach((month) => {
      reversedHolidayResult[month] = holidayResult[month];
    });

  return reversedHolidayResult;
}

export function sortDate(holidayResult: HolidayFetcher[]) {
  holidayResult.sort((a, b) => {
    const aDate = new Date(a.holiday_date);
    const bDate = new Date(b.holiday_date);
    return aDate.getDate() - bDate.getDate();
  });

  return holidayResult;
}

const dateExtractor = (holiday: HolidayFetcher[]) => {
  const data: ExtractedDate = {
    upcomings: [],
    nextMonths: [],
    previousMonths: [],
  };

  const thisMonth = new Date().getMonth() + 1;
  holiday?.filter((res) => {
    const formattedHolidayMonth = new Date(res.holiday_date).getMonth() + 1;

    if (formattedHolidayMonth === thisMonth) {
      data.upcomings.push(res);
    } else if (formattedHolidayMonth > thisMonth) {
      data.nextMonths.push(res);
    } else {
      data.previousMonths.push(res);
    }
  });

  data.upcomings = sortDate(data.upcomings);

  return data;
};

export default dateExtractor;
