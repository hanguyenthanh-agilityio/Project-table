import { render } from "@testing-library/react";
import FormInput from ".";
import { useForm } from "react-hook-form";
import { ChakraProvider } from "@chakra-ui/react";
import { ERROR_MESSAGES } from "@/constants/error-message";

const MockForm = ({ isInvalid = false }) => {
  const { register } = useForm();

  return (
    <form>
      <FormInput
        label="Name"
        inputName="name"
        placeholder="Product Name"
        register={register}
        isInvalid={isInvalid}
        type="text"
      />
    </form>
  );
};

const component = () => {
  return render(
    <ChakraProvider>
      <MockForm isInvalid={true} />
    </ChakraProvider>,
  );
};

const { getByText } = component();

describe("Render Snapshot", () => {
  it("Should render snapshot correctly", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("MyFormField Component", () => {
  it("shows error message when isInvalid is true", () => {
    render(
      <ChakraProvider>
        <MockForm isInvalid={true} />
      </ChakraProvider>,
    );

    expect(getByText(ERROR_MESSAGES.FIELD_REQUIRED)).toBeInTheDocument();
  });
});
