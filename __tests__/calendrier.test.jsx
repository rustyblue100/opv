// __tests__/calendrier.test.jsx

import { render, screen } from "@testing-library/react";
import Calendrier from "../pages/calendrier";
import "@testing-library/jest-dom";
import { createMockRouter } from "../createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context.js";

it("renders a more link", () => {
  render(
    <RouterContext.Provider value={createMockRouter}>
      <Calendrier />
    </RouterContext.Provider>
  );

  const plus = screen.getByText("Jest Test");

  expect(plus).toBeInTheDocument();
});
