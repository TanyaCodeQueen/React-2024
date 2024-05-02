import React,{FC} from 'react';
import styles from './Product.module.css'
export interface IProductProps{
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage?: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail?: string,
    images: string[];

}
export type IProductTypeProps = IProductProps & {children?:React.ReactNode};

const Product: FC<IProductTypeProps> = ({id,title,description,price,rating,stock,brand,category,images}) => {
    return (
        <div>
            <h2>{title}.{description}.{price}</h2>
            <h3>{rating}.{stock}.{brand}.{category}</h3>
            <div className={styles.parentDiv}>
                {images.map((image, index) => <img className={styles.img} key={index} src={image} alt=""/>)}
            </div>

        </div>
    );
};

export default Product;