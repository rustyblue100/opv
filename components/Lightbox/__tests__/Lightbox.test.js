// __tests__/Calendrier/index.test.jsx

import { render, screen, fireEvent } from "@testing-library/react";
import { elementPropsPhotos } from "../../../__mocks__/sanityClient";
import "@testing-library/jest-dom/extend-expect";
import Lightbox from "../Lightbox";

import "@testing-library/jest-dom";

describe("Calendrier Index", () => {
  beforeEach(() => {
    render(<Lightbox carousselData={elementPropsPhotos} />);
  });

  afterEach(() => jest.resetAllMocks());

  it("simulates user clicking image to open lightbox", async () => {
    const imageElement = screen.getAllByTestId("photos");
    fireEvent.click(imageElement[1]);
    const lightboxElement = await screen.findByTestId("open-lightbox");
    expect(lightboxElement).toBeInTheDocument();
  });
});
