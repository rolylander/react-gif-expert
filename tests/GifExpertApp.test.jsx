import { render, screen } from "@testing-library/react"

describe('prueba <GifExpertApp/>', () => {
    test('s', () => {
        render(<GifExpertApp/>)
        screen.debug()
    })
})