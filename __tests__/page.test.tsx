import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import Home from '../src/app/page.tsx'

describe('Home', () => {
  it('Renders the correct heading', async () => {
    // ARRANGE
    render(<Home />)

    // ACT
    const heading = await waitFor(() => screen.getAllByRole('heading', { level: 1 }));

    // ASSERT
    expect(heading[0]).toHaveTextContent('Weather App')
  })
})
