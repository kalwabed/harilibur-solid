import { createRouteData, Title, useParams, useRouteData } from 'solid-start'
import AllHolidays from '~/components/all-holidays'
import NavigationButton from '~/components/navigation-button'
import { getHolidays } from '~/utils/fetcher'

export function routeData() {
  const params = useParams()
  const year: string = params.year

  return createRouteData(async () => {
    const holidays = await getHolidays(`?year=${year}`)
    return holidays
  })
}

const YearPage = () => {
  const holidays = useRouteData<typeof routeData>()
  const params = useParams()
  const year: string = params.year

  return (
    <>
      <Title>{`${year} | Hari libur nasional dan hari besar di Indonesia`}</Title>
      <AllHolidays headerTitle={(new Date().getFullYear() + 1).toString()} holidays={holidays()} />
      <NavigationButton type="current" />
    </>
  )
}

export default YearPage
