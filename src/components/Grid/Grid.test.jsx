import { Grid } from "./Grid"
import { render, screen } from "@testing-library/react"

describe("Grid", () => {
    it("should render the component", () => {
        render(<Grid />)
        expect(screen.getByText("Componente Grid")).toBeInTheDocument()
    })
})
