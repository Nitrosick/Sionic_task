import { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { CONFIG } from '../../config';
import './Products.css';

import product_image from '../../images/product.jpg';

interface ProductsProps {
  request: (url: string) => object | null;
}

interface CategoryInterface {
  id: number;
  name: string;
}

interface ProductInterface {
  id: number;
  name: string;
  category_id: number;
  description: string;
}

export const Products: FC<ProductsProps> = ({ request }) => {
  const [categories, setCategories] = useState<CategoryInterface[]>([]);
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [category, setCategory] = useState<number>(1);

  const dispatch = useDispatch();

  const getCategories = async () => {
    const result: any = await request(CONFIG.urls.categories);
    setCategories(result);
  }

  const getProducts = async (categoryId: number = 1) => {
    setCategory(categoryId);
    const result: any = await request(CONFIG.urls.products + `?filter={"category_id":${categoryId}}&range=[0,19]`);
    setProducts(result);
  }

  const moreProducts = async () => {
    const range: number[] = [products.length, products.length + 19];
    const result: any = await request(
      CONFIG.urls.products +
      `?filter={"category_id":${category}}` +
      `&range=[${range.join(',')}]`
    );
    setProducts([...products, ...result]);
  }

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  return (
    <section className='products'>
        <div className="products_header">
          <h1 className="products_header_title">Категории товаров</h1>
          <a href="#" className="products_header_settings">Настройки</a>
        </div>

        <div className="products_categories">
          {categories && categories.map((category) => (
            <button
              key={category.id}
              className="products_categories_item"
              onClick={() => { getProducts(category.id) }}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="products_list">
          {products && products.map((product) => (
            <div className="product" key={product.id}>
              <img className="product_image" src={product_image} alt="product_image" />
              <h2 className="product_name">{product.name}</h2>
              <span className="product_price">от 350 000 ₽</span>
              <div className="product_old_price">
                <span className="product_old_price_value">450 500 ₽</span>
                <span className="product_old_price_percent">-10%</span>
              </div>
              <button
                className="product_add"
                onClick={() => { dispatch({type: 'ADD_TO_CART', payload: {
                  id: product.id,
                  name: product.name,
                  price: 350000,
                  old_price: 450000,
                  count: 1,
                  total: 350000
                }})}}
              >
                Добавить в корзину
              </button>
            </div>
          ))}
        </div>

        <button
          className="products_more"
          onClick={() => { moreProducts() }}
        >
          Показать больше товаров
        </button>
    </section>
  );
};
