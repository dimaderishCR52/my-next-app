"use client";


import "@/app/styles/globals.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";



export default function PostsPage() {
    const router = useRouter();

    useEffect(() => {
        router.refresh();
    }, []);

    const date = new Date().toLocaleString();

    return (
        <div className="container">
            <div className="card">
                <h1>Posts</h1>

                <span className="date">{date}</span>

                <Link href="/posts/create" className="link">
                    ➕ Create Post
                </Link>
            </div>
        </div>
    );
}