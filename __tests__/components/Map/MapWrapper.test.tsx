import { render, screen, waitFor } from '@testing-library/react'
import { MapData } from '../../../src/components/Map/MapData'
import { latLng, marker, Marker } from 'leaflet'

// MOCK THE CHILD COMPONENTS
jest.mock('../../../src/components/Controls/WeatherButton', () => ({
  WeatherButton: jest.fn(({ children }) => <div data-testid="WeatherButton">{children}</div>),
}))

jest.mock('../../../src/components/Controls/RemoveButton', () => ({
  RemoveButton: jest.fn(({ children }) => <div data-testid="RemoveButton">{children}</div>),
}))

describe('MapData Snapshot', () => {
  it('Renders MapData unchanged', async () => {
    const mapMarker: Marker = marker(latLng(0, 0), {})
    const { container } = await waitFor(() =>
      render(<MapData mapMarker={mapMarker} removeMarker={async () => {}} zoomToMarker={async () => {}} />),
    )

    expect(container).toMatchSnapshot()
  })
})

describe('MapData', () => {
  it('MapData renders correct child components', async () => {
    const mapMarker: Marker = marker(latLng(0, 0), {})
    render(<MapData mapMarker={mapMarker} removeMarker={async () => {}} zoomToMarker={async () => {}} />)

    const weatherButton = screen.queryByTestId('WeatherButton')
    const removeButton = screen.queryByTestId('RemoveButton')

    expect(weatherButton).toBeTruthy()
    expect(removeButton).toBeTruthy()
  })
})
