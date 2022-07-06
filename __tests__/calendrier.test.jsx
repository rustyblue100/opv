// __tests__/calendrier.test.jsx

import { render, screen } from "@testing-library/react";
import Calendrier, { getStaticProps } from "../pages/calendrier";
import "@testing-library/jest-dom";
import { createMockRouter } from "../createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context.js";

describe("Calendrier", () => {
  it("renders a more link", () => {
    render(
      <RouterContext.Provider value={createMockRouter}>
        <Calendrier />
      </RouterContext.Provider>
    );

    const plus = screen.getByText(/Jest Test/i);

    expect(plus).toBeInTheDocument();
  });
});
