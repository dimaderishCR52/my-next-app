import { Metadata } from "next";
import { cache} from "react";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};


const getPost = cache(async (id: string) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    return res.json();
});


export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body,
    };
}


export default async function PostPage({
                                           params,
                                       }: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const post = await getPost(id);

    return (
        <div style={{ maxWidth: "800px", margin: "50px auto", padding: "20px" }}>
            <h1>{post.title}</h1>
            <p><strong>ID:</strong> {post.id}</p>
            <p><strong>User ID:</strong> {post.userId}</p>
            <hr />
            <p>{post.body}</p>
        </div>
    );
}