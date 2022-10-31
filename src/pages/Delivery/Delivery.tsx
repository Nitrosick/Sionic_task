import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import { useNavigate } from 'react-router-dom';
import './Delivery.css';

import address_icon from '../../images/icons/address.svg';

export const Delivery: FC = () => {
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state: any = useSelector((state: State) => state.cart);

  const createOrder = () => {
    if (date && time && address && name && phone) {
      dispatch({ type: 'CREATE_ORDER', payload: {
        cart: state,
        data: {
          date: date,
          time: time,
          address: address,
          name: name,
          phone: phone
        }
      } });

      dispatch({ type: 'CLEAR_CART' });
      navigate("/history");
    } else {
      alert('Все поля должны быть заполнены!');
    }
  };

  return (
    <section className='delivery'>
        <h1 className="delivery_title">Доставка</h1>

        <div className="delivery_content">
          <form
            action="#"
            className="delivery_data"
            onSubmit={(e) => {e.preventDefault()}}
          >
            <div>
              <span className="delivery_content_text">Когда доставить?</span>
              <div className="delivery_dates">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <span className="delivery_content_text">Куда доставить?</span>
              <div className="delivery_address">
                <img src={address_icon} alt="address_icon" width="12" height="12" />
                <input
                  type="text"
                  placeholder="Выберите адрес доставки"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="delivery_content_text" htmlFor="name">Имя</label>
              <input
                className="delivery_input"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required />
            </div>

            <div>
              <label className="delivery_content_text" htmlFor="phone">Телефон</label>
              <input
                className="delivery_input"
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </form>

          <div className="delivery_result">
            <div className="delivery_total">
              <span>Стоимость товаров:</span>
              <span className="value">200 584₽</span>
              <span>Стоимость доставки:</span>
              <span className="value">200₽</span>
              <span>Итого</span>
              <span className="delivery_total_sum value">200 784₽</span>
            </div>

            <button
              className="delivery_order"
              onClick={createOrder}
            >
              Сделать заказ
            </button>
          </div>
        </div>
    </section>
  );
};
