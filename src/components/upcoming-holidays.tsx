import { For } from 'solid-js'

import { HolidayFetcher } from '~/utils/fetcher'
import Card from './card'
import CardPreview from './card/card-preview'
import GridWrapper from './grid-wrapper'

interface UpcomingHolidaysProps {
  headerTitle: string
  upcomingHolidays: HolidayFetcher[]
}

const UpcomingHolidays = ({ headerTitle, upcomingHolidays }: UpcomingHolidaysProps) => {
  const filteredHolidays = upcomingHolidays?.filter(upcome => upcome.is_national_holiday)

  return (
    <GridWrapper headerTitle={headerTitle}>
      {filteredHolidays.length === 0 && (
        <Card isAfterEvent holidayDate={new Date().toISOString()}>
          <p>Tidak ada</p>
        </Card>
      )}

      <For each={filteredHolidays} fallback={<p>Loading...</p>}>
        {holiday => <CardPreview holidayDate={holiday.holiday_date} holidayName={holiday.holiday_name} />}
      </For>
    </GridWrapper>
  )
}

export default UpcomingHolidays
