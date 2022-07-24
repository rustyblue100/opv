// __tests__/CalendarCell.test.jsx

import { render, screen } from "@testing-library/react";
import CalendarCell, { getStaticProps } from "../../components/CalendarCell";
import "@testing-library/jest-dom";
import { createMockRouter } from "../../createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context.js";

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

  it("renders title", () => {
    const title = screen.getByText(/un titre en français/i);
    expect(title).toBeInTheDocument();
  });

  it("renders day", () => {
    const date = screen.getByTestId(/date/i);
    expect(date).toBeInTheDocument();
  });

  it("renders a more link", () => {
    const plus = screen.getByTestId("see more");
    expect(plus).toBeInTheDocument();
  });
});
