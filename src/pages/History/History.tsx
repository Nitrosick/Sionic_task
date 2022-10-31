import { FC } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import './History.css';

import arrow from '../../images/icons/arrow.svg';
import layers from '../../images/icons/layers.svg';
import logo from '../../images/product_logo.svg';

export const History: FC = () => {
  const state: any = useSelector((state: State) => state.orders);

  return (
    <section className='history'>
      <h1 className="history_title">История заказов</h1>

      <div className="history_list">
        {state.map((order) => (
          <div className="item" key={order.number}>
            <div className="item_header">
              <img className="item_header_image" src={logo} alt="logo" width="50" height="50" />
              <h3 className="item_header_title">Xiaomi</h3>
              <span className="item_header_date">{order.date}</span>
              <a href="#" className="item_header_info">Подробнее</a>
            </div>

            <div className="item_status">
              <span className="item_desc">Статус заказа</span>
              <span className="item_desc">Номер заказа</span>
              <span className="item_value">{order.status}</span>
              <a href="#" className="item_status_number">
                #664-{order.number}
                <img src={layers} alt="layers_icon" width="12" height="12" />
              </a>
            </div>

            <div className="item_details">
              <span className="item_desc">Кол-во товаров</span>
              <span className="item_desc">Стоимость заказа</span>
              <span className="item_desc">Адрес доставки</span>
              <span className="item_value">{order.items_count} шт.</span>
              <span className="item_value">{order.total.toLocaleString()}₽</span>
              <span className="item_value">{order.address}</span>
            </div>

            <button className="item_close">
              <img src={arrow} alt="close_icon" width="12" height="6" />
            </button>
          </div>
        ))}

        {!state.length && <span>У Вас пока нет ни одного заказа</span>}
      </div>
    </section>
  );
};
