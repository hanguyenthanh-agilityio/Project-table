import { Project } from "@/types";

export const sortByColumn = (
  projects: Project[],
  sortColumn: string | null,
  sortDirection: "asc" | "desc",
): Project[] => {
  // If no sort column is selected, return the original array
  if (!sortColumn) return projects;

  return [...projects].sort((a, b) => {
    const aValue = a[sortColumn as keyof Project];
    const bValue = b[sortColumn as keyof Project];

    // Handle undefined values
    if (aValue === undefined) return sortDirection === "asc" ? 1 : -1;
    if (bValue === undefined) return sortDirection === "asc" ? -1 : 1;

    // Compare values and sort based on direction
    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;

    return 0;
  });
};
