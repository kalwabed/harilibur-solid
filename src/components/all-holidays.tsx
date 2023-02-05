import { For, Show } from 'solid-js'
import { reversedHolidayResult, sortDate } from '~/utils/date-extractor'

import { toMonth } from '~/utils/date-formatter'
import { HolidayFetcher } from '~/utils/fetcher'
import CardPreview from './card/card-preview'
import GridWrapper from './grid-wrapper'
import Month from './month'

interface AllHolidaysProps {
  headerTitle: string
  holidays: HolidayFetcher[]
}

const AllHolidays = ({ headerTitle, holidays }: AllHolidaysProps) => {
  const holidayResult: { [month: string]: HolidayFetcher[] } = {}
  const filteredHolidays = holidays?.filter(holiday => holiday.is_national_holiday)

  filteredHolidays?.forEach(holiday => {
    const month = toMonth(holiday.holiday_date)

    if (holidayResult[month]) {
      holidayResult[month].push(holiday)
      holidayResult[month] = sortDate(holidayResult[month])
    } else {
      holidayResult[month] = [holiday]
    }
  })

  const finalHolidayResult = reversedHolidayResult(holidayResult)

  return (
    <GridWrapper headerTitle={headerTitle}>
      <Show when={Object.keys(finalHolidayResult)?.length === 0}>
        <p class="not_available" />
      </Show>

      <For each={Object.keys(finalHolidayResult)} fallback={<p>Loading...</p>}>
        {(month, index) => {
          return (
            <Month month={month}>
              <For each={Object.values(finalHolidayResult)[index()]} fallback={<p>Loading...</p>}>
                {data => <CardPreview holidayDate={data.holiday_date} holidayName={data.holiday_name} />}
              </For>
            </Month>
          )
        }}
      </For>
    </GridWrapper>
  )
}

export default AllHolidays
