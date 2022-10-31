import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../../store';
import './Header.css';

import location from '../../images/icons/location.svg';
import search from '../../images/icons/search.svg';
import cart from '../../images/icons/cart.svg';
import profile from '../../images/profile.jpg';

export const Header: FC = () => {
    const [count, setCount] = useState<string>('');
    const state: any = useSelector((state: State) => state.cart);

    useEffect(() => {
        const length = state.length;
        if (!length) {
            setCount('');
        } else if (length > 10) {
            setCount('10+');
        } else {
            setCount(length);
        }
    }, [state]);

    return (
        <header className='header'>
            <Link to="/" className="main_logo">R<span className="main_logo_full">eact</span></Link>

            <div className="header_location">
                <img src={location} alt="location_icon" width="14" height="18" />
                <span className="header_location_text">Александровск-Сахалинский</span>
            </div>

            <div className="plug"></div>

            <form
                action="#"
                className="header_search plug"
                onSubmit={(e) => { e.preventDefault() }}
            >
                <input type="text" className="header_search_input" placeholder="Поиск бренда, товара, категории..." />
                <button className="header_search_submit">
                    <img src={search} alt="search_icon" width="18" height="18" />
                </button>
            </form>

            <Link to="/cart" className="header_cart">
                <img src={cart} alt="cart_icon" width="20" height="18" />
                {count && <div className="header_cart_counter">{count}</div>}
            </Link>

            <Link to="/history" className="header_profile">
                <img src={profile} alt="profile_image" width="50" height="50" />
            </Link>
        </header>
    );
};
