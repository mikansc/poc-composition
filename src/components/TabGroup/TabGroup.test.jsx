import { TabGroup } from "./TabGroup"
import { render, screen } from "@testing-library/react"

describe("TabGroup", () => {
    it("should render the component", () => {
        render(<TabGroup />)
        expect(screen.getByText("Componente TabGroup")).toBeInTheDocument()
    })
})
