export const Button = {
  baseStyle: {
    fontWeight: "500",
    h: "32px",
    borderRadius: "6px",
    border: "1px solid #e0e2e4",
  },
  size: {
    default: "14px",
  },
  variants: {
    default: {
      bg: "none",
      color: "text.default",
    },

    primary: {
      bg: "background.purple",
      color: "text.light",
      _hover: { bg: "background.purple" },
    },

    delete: {
      bg: "background.red",
      color: "text.light",
    },
  },
};
