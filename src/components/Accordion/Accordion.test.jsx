import { Accordion } from "./Accordion"
import { render, screen } from "@testing-library/react"

describe("Accordion", () => {
    it("should render the component", () => {
        render(<Accordion />)
        expect(screen.getByText("Componente Accordion")).toBeInTheDocument()
    })
})
