import { FC } from 'react';
import './Sidebar.css';

import pockets from '../../images/icons/sales_1.svg';
import background_1 from '../../images/background_1.jpg';
import background_2 from '../../images/background_2.jpg';

export const Sidebar: FC = () => {
  return (
    <nav className='sidebar'>
        <div className="sidebar_item free">
            <h2 className="title">
                Получай товары<br />
                БЕСПЛАТНО!
            </h2>

            <a href="#" className="sidebar_item_link">Узнать подробнее</a>

            <img
                className="sidebar_item_icon"
                src={pockets}
                alt="pockets_icon"
                width="90"
                height="80"
            />
        </div>

        <a
            href="#"
            className="sidebar_item"
            style={{backgroundImage: `url(${background_1})`}}
        >
            <h2 className="title">
                Новая<br />
                коллекция
            </h2>
        </a>

        <a
            href="#"
            className="sidebar_item"
            style={{backgroundImage: `url(${background_2})`}}
        >
            <h2 className="title">
                Новая<br />
                коллекция
            </h2>
        </a>

        <a
            href="#"
            className="sidebar_item"
            style={{backgroundImage: `url(${background_1})`}}
        >
            <h2 className="title">
                Новая<br />
                коллекция
            </h2>
        </a>
    </nav>
  );
};
