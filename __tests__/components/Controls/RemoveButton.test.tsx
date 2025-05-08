import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { RemoveButton } from '../../../src/components/Controls/RemoveButton'

describe('RemoveButton Snapshot', () => {
  it('Renders RemoveButton unchanged', async () => {
    const { container } = await waitFor(() => render(<RemoveButton handleRemove={async () => {}} />))

    expect(container).toMatchSnapshot()
  })
})

describe('RemoveButton', () => {
  it('RemoveButton on click', async () => {
    const mockCallBack = jest.fn()
    render(<RemoveButton handleRemove={mockCallBack} />)

    const button = await screen.findByRole('button')
    fireEvent.click(button)

    expect(mockCallBack).toHaveBeenCalled()
  })
})
