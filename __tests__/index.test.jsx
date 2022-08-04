// __tests__/Calendrier/index.test.jsx

import { render, screen, fireEvent } from "@testing-library/react";
import { createMockRouter } from "../createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context.js";
import { elementProps } from "../__mocks__/sanityClient";
import Calendrier from "../pages/calendrier/index";

describe("Calendrier Index", () => {
  /*   beforeEach(() => {
    useTranslation.mockReturnValue({ t: (key) => key });
  }); */
  beforeEach(() => {
    jest.mock("react-i18next", () => ({
      // this mock makes sure any components using the translate hook can use it without a warning being shown
      useTranslation: () => {
        return {
          t: (str) => str,
        };
      },
    }));
    render(
      <RouterContext.Provider value={(createMockRouter, { query: { i: 0 } })}>
        <Calendrier calendrier={elementProps} />
      </RouterContext.Provider>
    );
  });

  afterEach(() => jest.resetAllMocks());

  it("Check for page title", async () => {
    const pageTitle = await screen.findByText(/evenement:title/i);
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

  it("simulates selection of a month", async () => {
    fireEvent.click(await screen.findByRole("combobox"), {
      target: { id: "month-0" },
    });

    let options = await screen.findAllByRole("option");
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
  });
});
