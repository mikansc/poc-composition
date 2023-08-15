import { ComposedTabGroup } from "./ComposedTabGroup"
import { render, screen } from "@testing-library/react"

describe("ComposedTabGroup", () => {
    it("should render the component", () => {
        render(<ComposedTabGroup />)
        expect(screen.getByText("Componente ComposedTabGroup")).toBeInTheDocument()
    })
})
