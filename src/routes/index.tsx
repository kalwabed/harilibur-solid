import RootLayout from '~/components/layout/root-layout'
import UpcomingHolidays from '~/components/upcoming-holidays'

export default function Home() {
  return (
    <RootLayout>
      <UpcomingHolidays headerTitle="Bulan ini" upcomingHolidays={[]} />
    </RootLayout>
  )
}
