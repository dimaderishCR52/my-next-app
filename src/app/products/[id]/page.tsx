import Link from "next/link";

export default async function ProductPage({
                                              params,
                                          }: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <div className="container">
            <div className="card">
                <h1>Страница товара</h1>
                <p><strong>ID товара:</strong> {id}</p>

                <Link href={`/products/${id}/comments`} className="button">
                    Перейти к комментариям
                </Link>
            </div>
        </div>
    );
}