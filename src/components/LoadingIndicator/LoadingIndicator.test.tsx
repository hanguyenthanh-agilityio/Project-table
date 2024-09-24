import { render } from "@testing-library/react";
import LoadingIndicator from ".";

describe("LoadingIndicator component", () => {
  it("Should render LoadingIndicator snapshot correctly", () => {
    const loadingIndicator = render(<LoadingIndicator />);

    expect(loadingIndicator).toMatchSnapshot();
  });
});
