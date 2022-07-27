// __tests__/Calendrier/index.test.jsx

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { createMockRouter } from "../../../createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context.js";
import { elementProps } from "../../../__mocks__/sanityClient";

import Calendrier from "../../../pages/calendrier/index";

import "@testing-library/jest-dom";

describe("Calendrier Index", () => {
  beforeEach(() => {
    render(
      <RouterContext.Provider value={(createMockRouter, { query: { i: 0 } })}>
        <Calendrier calendrier={elementProps} />
      </RouterContext.Provider>
    );
  });

  afterEach(() => jest.resetAllMocks());

  it("Check for page title", async () => {
    const pageTitle = screen.getByText(/Calendrier/i);
    expect(pageTitle).toBeInTheDocument();
  });

  it("should render a select box", async () => {
    const selectOption = await screen.findByRole("combobox");
    expect(selectOption).toBeInTheDocument();
  });

  it("should render a select box with many options", async () => {
    const selectOptions = await screen.findAllByRole("option");

    expect(selectOptions.length).toBeGreaterThanOrEqual(1);
  });

  it("should render a event", async () => {
    const eventDivElement = await screen.findByTestId("evenement-item-0");
    expect(eventDivElement).toBeInTheDocument();
  });

  it("should render multiple events", async () => {
    const eventDivElements = await screen.findAllByTestId(/evenement-item-/i);
    expect(eventDivElements.length).toBeGreaterThanOrEqual(2);
  });

  /*   it("should change filter months on click selector", async () => {
    const selector = screen.findByText(/juillet 2022/i);
    fireEvent.click(await selector, { button: 0 });
  }); */
});
