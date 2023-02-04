export interface HolidayFetcher {
  holiday_date: string
  holiday_name: string
  is_national_holiday: boolean
}

export const getHolidays = async (query = '') => {
  const data = await fetch(`https://api-harilibur.vercel.app/api${query}`)
  const holidays: HolidayFetcher[] = await data.json()

  return holidays
}
