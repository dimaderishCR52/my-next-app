import TaskList from "@/components/TaskList";

async function getTasks() {
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