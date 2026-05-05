"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { postSchema } from "@/app/lib/validation";
import { useRouter } from "next/navigation";
import "@/app/styles/globals.css";

export default function CreatePostPage() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(postSchema),
    });

    const onSubmit = async (data: any) => {
        await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });

        router.push("/posts");
    };

    return (
        <div className="container">
            <div className="card">
                <h1>Создать пост</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("title")} placeholder="Title" />
                    <p className="error">{errors.title?.message}</p>

                    <input {...register("body")} placeholder="Body" />
                    <p className="error">{errors.body?.message}</p>

                    <button type="submit">Создать</button>
                </form>
            </div>
        </div>
    );
}