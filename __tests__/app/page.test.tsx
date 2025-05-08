import { render, screen, waitFor } from '@testing-library/react'
import Home from '../../src/app/page.tsx'

describe('Home Snapshot', () => {
  it('Renders home page unchanged', async () => {
    const { container } = await waitFor(() => render(<Home />))

    expect(container).toMatchSnapshot()
  })
})

describe('Home', () => {
  it('Renders the correct header on the Home page', async () => {
    render(<Home />)

    const heading = await waitFor(() => screen.getAllByRole('heading', { level: 1 }))

    expect(heading[0]).toHaveTextContent('Weather App')
  })
})
