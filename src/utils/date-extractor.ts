import type { HolidayFetcher } from './fetcher'

export interface ExtractedDate {
  upcomings: HolidayFetcher[]
  nextMonths: HolidayFetcher[]
  previousMonths: HolidayFetcher[]
}

const dateExtractor = (holiday: HolidayFetcher[]) => {
  const data: ExtractedDate = {
    upcomings: [],
    nextMonths: [],
    previousMonths: []
  }

  const thisMonth = new Date().getMonth() + 1
  holiday?.filter(res => {
    const formattedHolidayMonth = new Date(res.holiday_date).getMonth() + 1

    if (formattedHolidayMonth === thisMonth) {
      data.upcomings.push(res)
    } else if (formattedHolidayMonth > thisMonth) {
      data.nextMonths.push(res)
    } else {
      data.previousMonths.push(res)
    }
  })

  return data
}

export default dateExtractor
