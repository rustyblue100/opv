// __tests__/CalendarCell.test.jsx

import { render, screen } from "@testing-library/react";
import CalendarCell from "../components/CalendarCell";
import "@testing-library/jest-dom";

it("renders a more link", () => {
  render(<CalendarCell />);

  const plus = screen.getAllByText(/En savoir plus/i);

  expect(plus).toBeInTheDocument();
});
