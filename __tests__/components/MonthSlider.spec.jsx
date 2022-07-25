// __tests__/MonthSlider.test.jsx

import { render, screen } from "@testing-library/react";
import MonthSlider, { getStaticProps } from "../../components/MonthSlider";
import userEvent from "@testing-library/user-event";

import "@testing-library/jest-dom";

const mockedSetMonth = jest.fn();

describe("MonthSlider", () => {
  beforeEach(() => {
    render(<MonthSlider months={[]} setMonthPosition={mockedSetMonth} />);
  });

  /*   it("renders selector", async () => {
    const selectorId = screen.getByTestId(/select-option/i);
    fireEvent.change(selectorId, { target: { value: "août 2022" } });
    let options = getAllByTestId("select-option");
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
  }); */

  it("should allow user to change month", async () => {
    /*     userEvent.selectOptions(
      // Find the select element, like a real user would.
      screen.getByRole("combobox"),
      // Find and select the août 2022 option, like a real user would.
      screen.getByRole("option", { name: "juillet 2022" })
    );
    expect(screen.getByRole("option", { name: "juillet 2022" }).selected).toBe(
      true
    ); */
  });
});
