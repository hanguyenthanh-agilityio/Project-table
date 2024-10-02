import { Avatar, Flex } from "@chakra-ui/react";

// utils
import { formatDate, formatTimeline } from "@/utils";

// types
import { Project } from "@/types";

// Components
import { ActionCell } from "@/components";

export const tableColumns = () => {
  return [
    { key: "projectName", title: "Project Name" },
    {
      key: "avatar",
      title: "Avatar",
      customCell: (project: Project) => (
        <Avatar
          borderRadius="6px"
          name={project.projectName}
          src={project.avatar}
        />
      ),
    },
    {
      key: "status",
      title: "Status",
    },
    {
      key: "latestUpdate",
      title: "Latest Update",
      customCell: (project: Project) => formatDate(project.latestUpdate),
    },
    {
      key: "resources",
      title: "Resources",
      customCell: (project: Project) => (
        <Flex
          bg="background.primary"
          w="24px"
          h="24px"
          color="text.secondary"
          alignItems="center"
          justifyContent="center"
          borderRadius="6px"
        >
          {project.resources}
        </Flex>
      ),
    },
    {
      key: "timeLine",
      title: "Timeline",
      customCell: (project: Project) => (
        <Flex flexDir="row" gap="2" alignItems="center">
          <Flex
            bg="background.primary"
            borderRadius="6px"
            p="5px 10px"
            color="text.secondary"
            minW="100px"
            justifyContent="center"
          >
            {formatTimeline(project.createdAt)}
          </Flex>
          {">"}
          <Flex
            bg="background.primary"
            borderRadius="6px"
            p="5px 10px"
            color="text.secondary"
            minW="100px"
            justifyContent="center"
          >
            {formatTimeline(project.finishAt)}
          </Flex>
        </Flex>
      ),
    },
    {
      key: "estimation",
      title: "Estimation",
      customCell: (project: Project) => `US$ ${project.estimation}`,
    },
    {
      key: "action",
      title: "Action",
      customCell: (project: Project) => <ActionCell project={project} />,
    },
  ];
};
