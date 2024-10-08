export type SelectType = {
  label: string;
  value: string;
};

export type HeaderList = {
  title: string;
  key: string;
};

export type DropdownItemType = {
  name: string;
  action?: () => void;
};

export type SortOption = "asc" | "desc";
