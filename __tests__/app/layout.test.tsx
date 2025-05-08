import { render, waitFor } from '@testing-library/react'
import RootLayout from '../../src/app/layout.tsx'

// THIS IGNORES THE "validateDOMNesting" CONSOLE.ERROR,
// THIS IS AN EXPECTED ERROR, BECAUSE RENDER() PUTS THE <HTML> ROOT IN A <DIV> TAG
jest.spyOn(global.console, 'error').mockImplementation(() => jest.fn())

describe('Root Snapshot', () => {
  it('Renders root layout unchanged', async () => {
    const mockChildren = <div>Children component</div>
    const { container } = await waitFor(() => render(<RootLayout>{mockChildren}</RootLayout>))

    expect(container).toMatchSnapshot()
  })
})
