import { Form } from "./Form"
import { render, screen } from "@testing-library/react"

describe("Form", () => {
    it("should render the component", () => {
        render(<Form />)
        expect(screen.getByText("Componente Form")).toBeInTheDocument()
    })
})
