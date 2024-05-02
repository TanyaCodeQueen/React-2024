import React,{FC} from 'react';
import styles from './Product.module.css'
export interface IProductProps{
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[];

}
export type IProductTypeProps = IProductProps & {children?:React.ReactNode};

const Product: FC<IProductTypeProps> = ({id,title,description,price, discountPercentage,rating,stock,brand,category,thumbnail,images}) => {
    return (
        <div className={styles.outerDiv}>
            <div className={styles.infoDiv}>
                <h2 className={styles.infoDivChild}>Title: {title} <br/>Description: {description} <br/>Price: {price} Discount: {discountPercentage} <br/> Rating:{rating} <br/>In stock: {stock} <br/>Brand:{brand} <br/> Category:{category}</h2>

            </div>
            <div className={styles.thumbDiv}>
                <img className={styles.thumbnail} src={thumbnail} alt=""/>
            </div>

            <div className={styles.parentImgDiv}>
                {images.map((image, index) => <img className={styles.img} key={index} src={image} alt=""/>)}
            </div>

        </div>
    );
};

export default Product;