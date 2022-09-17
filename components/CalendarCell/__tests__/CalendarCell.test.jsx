// __tests__/CalendarCell.test.jsx

import { render, screen, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom";

const elementProps = {
  title: { fr: "un titre en français", en: "un titre en anglais" },
  mainImage: "",
  complet: false,
  prix: 20,
  date: "2022-01-01",
  description: "",
  slug: "",
};

describe("CalendarCell", () => {
  beforeEach(() => {
    render(<CalendarCell data={elementProps} />);
  });

  afterEach(() => {
    cleanup();
  });

  it("renders title", () => {
    const title = screen.getByText(/un titre en français/i);
    expect(title).toBeInTheDocument();
  });

  it("renders day", () => {
    const date = screen.getByTestId(/date/i);
    expect(date).toBeInTheDocument();
  });

  /*   it("renders a more link", async () => {
    const plus =
      (await screen.findByText(/Voir plus/i)) || screen.findByText(/See more/i);
    expect(plus).toBeInTheDocument();
  }); */
});
