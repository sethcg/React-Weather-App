import { render, waitFor } from '@testing-library/react'
import { MapComponent } from '../../../src/components/Map/MapComponent'

describe('MapComponent Snapshot', () => {
  it('Renders MapComponent unchanged', async () => {
    const { container } = await waitFor(() => render(<MapComponent />))

    expect(container).toMatchSnapshot()
  })
})

describe('MapComponent', () => {
  it('Renders the correct div with map ID on the MapComponent', async () => {
    const result = render(<MapComponent />)

    const mapElement = result.container.querySelector('#map')

    expect(mapElement).toBeTruthy()
  })
})
