// Libraries
import { render } from "@testing-library/react";
import ErrorBoundary from "./index";

describe("ErrorBoundary", () => {
  it('renders "Something went wrong." when an error is thrown', () => {
    const spy = jest.spyOn(console, "error");

    spy.mockImplementation(() => {});

    const Throw = () => {
      throw new Error("bad");
    };

    const { getByText } = render(
      <ErrorBoundary>
        <Throw />
      </ErrorBoundary>,
    );

    expect(getByText("Oops, something went wrong!")).toBeDefined();

    spy.mockRestore();
  });
});
