export type SelectType = {
  label: string;
  value: string;
};

export type Project = {
  id: number;
  projectName: string;
  projectManager: string;
  avatar: string;
  status: string;
  latestUpdate: string;
  resource: string;
  createAt: string;
  finishAt: string;
  estimation: string;
};

export type HeaderList = {
  title: string;
};
