import { getProjectTasks } from "@/server/queries";
import { columns } from "./Columns";
import TasksTable from "./TasksTable";

export default async function TasksGrid({ projectId }: { projectId: number }) {
  const projectTasks = await getProjectTasks(projectId);

  const transformedData = projectTasks.data?.map((task) => {
    return {
      projectId: projectId,
      taskId: task.id,
      title: task.title,
      status: task.status,
      priority: task.priority,
      created_by: task.created_by?.name!,
    };
  });

  return <TasksTable data={transformedData!} columns={columns} />;
}
