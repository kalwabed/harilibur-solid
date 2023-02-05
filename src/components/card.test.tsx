import { render } from '@solidjs/testing-library'
import Card from './card'

describe('Card sider', () => {
  it('show when date is provided', async () => {
    const { queryByTestId, unmount } = render(() => (
      <Card isAfterEvent holidayDate={new Date().toISOString()}>
        <div></div>
      </Card>
    ))
    const cardSider = (await queryByTestId('card-sider')) as HTMLDivElement
    expect(cardSider).toBeInTheDocument()
    unmount()
  })

  it('not show when date is not provided', async () => {
    const { queryByTestId, unmount } = render(() => (
      <Card isAfterEvent>
        <div></div>
      </Card>
    ))
    const cardSider = (await queryByTestId('card-sider')) as HTMLDivElement
    expect(cardSider).not.toBeInTheDocument()
    unmount()
  })
})
