import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

import cart from '../../images/icons/sales_2.svg';
import pocket from '../../images/icons/sales_3.svg';
import sale from '../../images/icons/sales_4.svg';
import remove from '../../images/icons/remove.svg';
import product from '../../images/product.jpg';

export const Cart: FC = () => {
  const [total, setTotal] = useState<number>(0);
  const dispatch = useDispatch();
  const state: any = useSelector((state: State) => state.cart);
  const navigate = useNavigate();

  const getTotal = () => {
    let result = 0;

    state.forEach(el => {
      result += el.total;
    });

    setTotal(result);
  };

  useEffect(() => {
    getTotal();
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  return (
    <section className='cart'>
      <div className="cart_header">
        <h1 className="cart_header_title">Корзина</h1>
        <button
          className="cart_header_settings"
          onClick={() => { dispatch({ type: 'CLEAR_CART' }) }}
        >
          Очистить корзину
        </button>
      </div>

      <div className="cart_content">
        <div className="control">
          <h2 className="control_title">Xiaomi</h2>

          <div className="control_total">
            <span>Стоимость корзины:</span>
            <span className="control_total_value">{total.toLocaleString()}₽</span>
          </div>

          <button
            className="control_order"
            onClick={() => {if (total) navigate("/delivery")}}
          >
            Оформить
          </button>

          <img className="control_image" id="image_1" src={pocket} alt="cart_icon" width="80" height="100" />
          <img className="control_image" id="image_2" src={sale} alt="cart_icon" width="57" height="57" />
          <img className="control_image" id="image_3" src={cart} alt="cart_icon" width="60" height="54" />
        </div>

        <div className="cart_content_list">
          {state.map((item) => (
            <div className="item" key={item.id}>
              <img src={product} alt="product_image" className="item_image" height="65" />

              <h3 className="item_name">{item.name}</h3>

              <div className="item_counter">
                <button
                  className="item_counter_control"
                  onClick={() => { dispatch({ type: 'DECREASE_COUNT', payload: item.id }) }}
                >-</button>
                <span className="item_counter_value">{item.count}</span>
                <button
                  className="item_counter_control"
                  onClick={() => { dispatch({ type: 'INCREASE_COUNT', payload: item.id }) }}
                >+</button>
              </div>

              <div className="item_price">
                <span className="item_price_new">от {item.price.toLocaleString()} ₽</span>
                <span className="item_price_old">{item.old_price.toLocaleString()} ₽</span>
              </div>

              <button
                className="item_remove"
                onClick={() => { dispatch({ type: 'REMOVE_FROM_CART', payload: item.id }) }}
              >
                <img src={remove} alt="trash_icon" width="20" height="20" />
              </button>
            </div>
          ))}

          {!state.length && <span>В корзине пока пусто</span>}
        </div>
      </div>
    </section>
  );
};
