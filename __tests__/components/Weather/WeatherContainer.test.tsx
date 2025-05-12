import { render, screen, waitFor } from '@testing-library/react'
import { WeatherContainer } from '../../../src/components/Weather/WeatherContainer'

// MOCK THE CHILD COMPONENTS
jest.mock('../../../src/components/Weather/WeatherItem', () => ({
  WeatherItem: jest.fn(({ children }) => <div data-testid="WeatherItem">{children}</div>),
}))

jest.mock('../../../src/components/Weather/WeatherIcon', () => ({
  WeatherIcon: jest.fn(({ children }) => <div data-testid="WeatherIcon">{children}</div>),
}))

describe('WeatherContainer Snapshot', () => {
  it('Renders WeatherContainer unchanged', async () => {
    const { container } = await waitFor(() => render(<WeatherContainer weatherRef={null} />))

    expect(container).toMatchSnapshot()
  })
})

describe('WeatherContainer', () => {
  it('Renders the correct information to the WeatherContainer', async () => {
    render(<WeatherContainer weatherRef={null} />)

    const weatherIcon = screen.queryByTestId('WeatherIcon')
    const weatherItem = screen.queryAllByTestId('WeatherItem')

    expect(weatherIcon).toBeTruthy()
    expect(weatherItem).toBeTruthy()
    expect(weatherItem).toHaveLength(7)
  })
})
