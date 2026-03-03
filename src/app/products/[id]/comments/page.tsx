export default async function CommentsPage({
                                               params,
                                           }: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <div className="container">
            <div className="card">
                <h1>Комментарии</h1>
                <p><strong>ID товара:</strong> {id}</p>
                <p>Раздел комментариев для данного товара</p>
            </div>
        </div>
    );
}