import { render, waitFor } from '@testing-library/react'
import { WeatherIcon } from '@/components/Weather/WeatherIcon'
import { WeatherCode } from '@/components/Weather/WeatherIcon'

describe('WeatherIcon Snapshot', () => {
  it('Renders WeatherIcon unchanged', async () => {
    const { container } = await waitFor(() => render(<WeatherIcon iconCode={undefined} />))

    expect(container).toMatchSnapshot()
  })
})

const iconTests: string[] = []
for (const key in WeatherCode) {
  iconTests.push(WeatherCode[key].DayIcon)
  iconTests.push(WeatherCode[key].NightIcon)
}

describe('WeatherItem', () => {
  test.each(iconTests)('Given IconCode %p, returns the correct Icon component', async (iconCode: string) => {
    const container = render(<WeatherIcon iconCode={iconCode} />)
    const icon = await waitFor(() => container.getByTestId(iconCode))
    expect(icon).toBeTruthy()
  })
})
