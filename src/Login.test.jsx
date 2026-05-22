import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Login from "./Login";

describe("Login Component", () => {
  it("renders login form", () => {
    render(<Login />);

    expect(
      screen.getByRole("heading", { name: /login/i })
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Enter email")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Enter password")
    ).toBeInTheDocument();
  });

  it("shows validation errors on empty submit", async () => {
    render(<Login />);
    const user = userEvent.setup();

    const button = screen.getByRole("button", { name: /login/i });

    await user.click(button);

    expect(await screen.findAllByText("Required")).toHaveLength(2);
  });

  it("validates email format", async () => {
    render(<Login />);
    const user = userEvent.setup();

    const emailInput = screen.getByPlaceholderText("Enter email");
    const button = screen.getByRole("button", { name: /login/i });

    await user.type(emailInput, "invalidemail");
    await user.click(button);

    expect(
      await screen.findByText("Invalid email address")
    ).toBeInTheDocument();
  });

  it("accepts valid form submission", async () => {
    render(<Login />);
    const user = userEvent.setup();

    const emailInput = screen.getByPlaceholderText("Enter email");
    const passwordInput = screen.getByPlaceholderText("Enter password");
    const button = screen.getByRole("button", { name: /login/i });

    await user.type(emailInput, "test@gmail.com");
    await user.type(passwordInput, "123456");
    await user.click(button);

    expect(screen.queryByText("Required")).not.toBeInTheDocument();
  });
});