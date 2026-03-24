import TaskList from "@/components/TaskList";
import { cacheLife } from "next/cache";

type Task = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};


async function getTasks(): Promise<Task[]> {
    "use cache";

    cacheLife("minutes");

    const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );

    if (!res.ok) {
        throw new Error("Ошибка загрузки задач");
    }

    return res.json();
}

export default async function TasksPage() {
    const tasks = await getTasks();

    return (
        <div style={{ maxWidth: "800px", margin: "40px auto" }}>
            <h1>Список задач</h1>

            <TaskList tasks={tasks} />
        </div>
    );
}