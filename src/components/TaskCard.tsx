"use client";

import { useState } from "react";

type Task = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export default function TaskCard({ task }: { task: Task }) {
    const [isCompleted, setIsCompleted] = useState(task.completed);

    function toggleStatus() {
        setIsCompleted(!isCompleted);
    }

    return (
        <div
            onClick={toggleStatus}
            style={{
                padding: "15px",
                borderRadius: "10px",
                border: "1px solid #ddd",
                cursor: "pointer",
                backgroundColor: isCompleted ? "#d1fae5" : "#fee2e2",
            }}
        >


            <h3>{task.title}</h3>

            <p>
                Статус:{" "}
                <strong>
                    {isCompleted ? "Completed" : "In Progress"}
                </strong>
            </p>
            <p><strong>ID:</strong> {task.id} <strong>User:</strong> {task.userId}</p>

        </div>
    );
}