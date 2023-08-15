import { UserForm } from "./UserForm"
import { render, screen } from "@testing-library/react"

describe("UserForm", () => {
    it("should render the component", () => {
        render(<UserForm />)
        expect(screen.getByText("Componente UserForm")).toBeInTheDocument()
    })
})
