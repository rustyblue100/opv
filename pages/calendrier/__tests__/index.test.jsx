// __tests__/Calendrier/index.test.jsx

import { render, screen } from "@testing-library/react";

import { createMockRouter } from "../../../createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context.js";

import Calendrier from "../../../pages/calendrier/index";

import "@testing-library/jest-dom";

const elementProps = {
  months: ["juillet 2022", "août 2022", "septembre 2022"],
};
describe("Calendrier Index", () => {
  it("should change page on click selector", async () => {
    render(
      <RouterContext.Provider value={(createMockRouter, { query: { i: 0 } })}>
        <Calendrier months={elementProps} />
      </RouterContext.Provider>
    );
  });
});
