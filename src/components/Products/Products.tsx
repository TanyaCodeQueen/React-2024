import React, { FC, useEffect, useState } from 'react';
import Product, { IProductProps } from "../Product/Product";

const Products: FC = (props) => {
    const [products, setProducts] = useState<IProductProps[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({ products }) => {
                setProducts(products);
            });
    }, []);

    return (
        <div>
            {products.map((value: IProductProps) => (
                <Product key={value.id}
                         id={value.id}
                         title={value.title}
                         description={value.description}
                         price={value.price}
                         rating={value.rating}
                         stock={value.stock}
                         brand={value.brand}
                         category={value.category}
                         images={value.images}
                />
            ))}
        </div>
    );
}

export default Products;
