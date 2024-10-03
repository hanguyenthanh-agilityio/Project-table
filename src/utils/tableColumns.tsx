import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";

// utils
import { formatDate, formatTimeline } from "@/utils";

// types
import { Project } from "@/types";

// Components
import { ActionCell } from "@/components";

// Images
import notes from "../../public/notes.svg";

const statusStyle = (status: string) => {
  switch (status) {
    case "On track":
      return {
        bg: "#e1fcef",
        color: "#14804a",
        boxBg: "#38a06c",
      };
    case "At risk":
      return {
        bg: "#ffedef",
        color: "#d1293d",
        boxBg: "#ef5466",
      };
    case "On hold":
      return {
        bg: "#e9edf5",
        color: "#5a6376",
        boxBg: "#687182",
      };
    case "Potential risk":
      return {
        bg: "#fcf2e6",
        color: "#aa5b00",
        boxBg: "#c97a20",
      };
    default:
      return {};
  }
};

export const tableColumns = () => {
  return [
    { key: "id", title: "#" },
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
      customCell: (project: Project) => {
        const { bg, color, boxBg } = statusStyle(project.status);
        return (
          <Flex
            alignItems="center"
            justifyContent="center"
            gap="2"
            bg={bg}
            maxW="120px"
            borderRadius="4px"
            color={color}
            padding="2px"
          >
            <Box w="6px" h="6px" bg={boxBg} borderRadius="2px" />
            {project.status}
          </Flex>
        );
      },
    },
    {
      key: "latestUpdate",
      title: "Latest Update",
      customCell: (project: Project) => (
        <Flex alignItems="center">
          <Image src={notes} pr="5px" />
          {formatDate(project.latestUpdate)}
        </Flex>
      ),
    },
    {
      key: "resources",
      title: "Resources",
      customCell: (project: Project) => (
        <Flex
          bg={project.resources ? "background.primary" : "#ededfc"}
          w="24px"
          h="24px"
          color="text.secondary"
          alignItems="center"
          justifyContent="center"
          borderRadius="6px"
          border={project.resources ? "none" : "1px dashed #807cea"}
          fontSize={project.resources ? "" : "20px"}
        >
          {project.resources ? project.resources : "+"}
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
            {project.createdAt ? formatTimeline(project.createdAt) : "-"}
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
            {project.createdAt ? formatTimeline(project.finishAt) : "-"}
          </Flex>
        </Flex>
      ),
    },
    {
      key: "estimation",
      title: "Estimation",
      customCell: (project: Project) => (
        <Text>{project.estimation ? `US$ ${project.estimation}k` : "-"}</Text>
      ),
    },
    {
      key: "action",
      title: "Action",
      customCell: (project: Project) => <ActionCell project={project} />,
    },
  ];
};
