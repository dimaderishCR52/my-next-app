"use client";

import TaskCard from "./TaskCard";

type Task = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export default function TaskList({ tasks }: { tasks: Task[] }) {
    return (
        <div style={{ display: "grid", gap: "15px", marginTop: "20px" }}>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}