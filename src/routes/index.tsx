import { createRouteData, useRouteData } from 'solid-start'

import RootLayout from '~/components/layout/root-layout'
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
    <RootLayout>
      <UpcomingHolidays headerTitle="Bulan ini" upcomingHolidays={extractedHoliday()?.upcomings} />
    </RootLayout>
  )
}
