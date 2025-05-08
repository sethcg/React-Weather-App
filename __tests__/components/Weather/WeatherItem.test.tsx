import { render, screen, waitFor } from '@testing-library/react'
import { WeatherItem } from '../../../src/components/Weather/WeatherItem'

describe('WeatherItem Snapshot', () => {
  it('Renders WeatherItem unchanged', async () => {
    const { container } = await waitFor(() => render(<WeatherItem header={''} value={''} />))

    expect(container).toMatchSnapshot()
  })
})

describe('WeatherItem', () => {
  it('Renders the correct information on the WeatherItem', async () => {
    render(<WeatherItem header={'header'} value={'value'} isTemperature={false} />)

    const headers = await waitFor(() => screen.getAllByRole('heading'))
    const headerElement = headers[0]
    const valueElement = headers[1]

    expect(headerElement).toBeTruthy()
    expect(headerElement).toHaveTextContent(/header(.+)$/i)
    expect(valueElement).toBeTruthy()
    expect(valueElement).toHaveTextContent(/value$/i)
  })

  it('Renders the correct temperature information on the WeatherItem', async () => {
    render(<WeatherItem header={'header'} value={'value'} isTemperature={true} />)

    const headers = await waitFor(() => screen.getAllByRole('heading'))
    const headerElement = headers[0]
    const valueElement = headers[1]

    expect(headerElement).toBeTruthy()
    expect(headerElement).toHaveTextContent(/header(.+)$/i)
    expect(valueElement).toBeTruthy()
    expect(valueElement).toHaveTextContent(/value°F$/i)
  })
})
