import Link from "next/link";

export default function ProductsPage() {
    const products = [
        { id: "1", name: "Товар 1" },
        { id: "2", name: "Товар 2" },
        { id: "3", name: "Товар 3" },
    ];

    return (
        <div className="container">
            <div className="card">
                <h1>Список товаров</h1>

                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <Link href={`/products/${product.id}`}>
                                {product.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}