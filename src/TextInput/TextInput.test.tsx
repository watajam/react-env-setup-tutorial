import { render, screen } from '@testing-library/react'
import TextInput from './TextInput'
import userEvent from '@testing-library/user-event'

test('テキスト コンポーネントのテスト', () => {
    render(<TextInput />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
})
test("テキスト入力のテスト mod/", async () => {
    const user = userEvent.setup()
    render(<TextInput />)
    const inputElement = screen.getByRole('textbox')
    await user.type(inputElement, 'Hello, World!')
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
})
