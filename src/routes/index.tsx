import { createRouteData, useRouteData } from 'solid-start'

import AllHolidays from '~/components/all-holidays'
import RootLayout from '~/components/layout/root-layout'
import NavigationButton from '~/components/navigation-button'
import UpcomingHolidays from '~/components/upcoming-holidays'
import dateExtractor from '~/utils/date-extractor'
import { getHolidays } from '~/utils/fetcher'

export function routeData() {
  return createRouteData(async () => {
    const holidays = await getHolidays()
    const extractedHoliday = dateExtractor(holidays)
    return extractedHoliday
  })
}

export default function Home() {
  const extractedHoliday = useRouteData<typeof routeData>()

  return (
    <>
      <UpcomingHolidays headerTitle="Bulan ini" upcomingHolidays={extractedHoliday()?.upcomings} />
      <AllHolidays headerTitle="Bulan depan" holidays={extractedHoliday()?.nextMonths} />
      <NavigationButton type="next" />
    </>
  )
}
