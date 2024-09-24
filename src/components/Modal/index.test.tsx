import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";

// Components
import Modal from ".";

describe("BaseModal render", () => {
  const props = {
    modalTitle: "Update",
    children: <>Modal</>,
    isOpen: true,
    onClose: jest.fn(),
  };

  const loading = () => {
    return render(<Modal {...props} />);
  };

  it("Should render snapshot correctly", () => {
    const component = loading();

    expect(component).toMatchSnapshot();
  });

  it("Should render BaseModal with modalTitle prop", () => {
    const { getByTestId } = loading();
    const title = getByTestId("title");

    expect(title).toHaveTextContent(props.modalTitle);
  });

  it("Should render BaseModal correctly with isOpen prop", () => {
    const { getByTestId } = loading();
    const modal = getByTestId("modal-overlay").parentElement;

    expect(modal).toBeTruthy();
  });

  it("Should render BaseModal correctly with onClose prop", () => {
    const { getByTestId } = loading();
    const onCloseModal = getByTestId("modal-close-button");
    fireEvent.click(onCloseModal);

    expect(props.onClose).toHaveBeenCalled();
  });
});
