export type SelectType = {
  label: string;
  value: string;
};

export type Project = {
  id?: number;
  projectName: string;
  projectManager?: string;
  avatar: string;
  status: string;
  latestUpdate: string;
  resources: number;
  createdAt?: string;
  finishAt?: string;
  estimation: string;
};

export type HeaderList = {
  title: string;
};

export type DropdownItemType = {
  name: string;
  action?: () => void;
};
