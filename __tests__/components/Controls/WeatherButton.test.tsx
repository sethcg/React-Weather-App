import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { WeatherButton } from '../../../src/components/Controls/WeatherButton'
import { latLng, marker, Marker } from 'leaflet'

describe('WeatherButton Snapshot', () => {
  it('Renders WeatherButton unchanged', async () => {
    const mapMarker: Marker = marker(latLng(0, 0), {})
    const { container } = await waitFor(() => render(<WeatherButton handleProcess={async () => {}} mapMarker={mapMarker} />))

    expect(container).toMatchSnapshot()
  })
})

describe('WeatherButton', () => {
  it('WeatherButton on click', async () => {
    const mockCallBack = jest.fn()
    const mapMarker: Marker = marker(latLng(0, 0), {})
    render(<WeatherButton handleProcess={mockCallBack} mapMarker={mapMarker} />)

    const button = await screen.findByRole('button')
    fireEvent.click(button)

    expect(mockCallBack).toHaveBeenCalled()
  })
})
