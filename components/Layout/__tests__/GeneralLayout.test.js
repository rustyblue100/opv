// __tests__/GeneralLayout/index.test.jsx

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RouterContext } from "next/dist/shared/lib/router-context.js";
import { createMockRouter } from "../../../createMockRouter";
import GeneralLayout from "../GeneralLayout";
import "@testing-library/jest-dom";

describe("Calendrier Index", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    render(
      <RouterContext.Provider value={createMockRouter}>
        <GeneralLayout />
      </RouterContext.Provider>
    );
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("Check page sliding to right on hover navigation", () => {
    const navItem = screen.queryByTestId("navigation");
    userEvent.hover(navItem);
    expect(screen.getByTestId("slideFx-true")).toBeTruthy();
  });

  it("Check page sliding to left on unhover navigation", () => {
    const navItem = screen.queryByTestId("navigation");
    userEvent.unhover(navItem);
    expect(screen.getByTestId("slideFx-false")).toBeTruthy();
  });
});
