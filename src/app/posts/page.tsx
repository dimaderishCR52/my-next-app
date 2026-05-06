import "@/app/styles/globals.css";
import Link from "next/link";

const PostsPage = () => {
    const date = new Date().toISOString();

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
};
export default PostsPage;
