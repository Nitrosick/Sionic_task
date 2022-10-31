import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import facebook from '../../images/icons/facebook.svg';
import vk from '../../images/icons/vk.svg';
import instagram from '../../images/icons/instagram.svg';
import google_play from '../../images/icons/google_play.svg';
import app_store from '../../images/icons/app_store.svg';

export const Footer: FC = () => {
  return (
    <footer className='footer'>
        <div className="footer_content">
            <Link to="/" className="main_logo">React</Link>

            <div className="plug"></div>

            <div>
                <span>Присоединяйтесь к нам</span>
                <nav className="footer_social">
                    <a href="#" className="footer_social_item">
                        <img src={facebook} alt="social_icon" width="28" height="28" />
                    </a>

                    <a href="#" className="footer_social_item">
                        <img src={vk} alt="social_icon" width="28" height="28" />
                    </a>

                    <a href="#" className="footer_social_item">
                        <img src={instagram} alt="social_icon" width="28" height="28" />
                    </a>
                </nav>
            </div>

            <div>
                <span>Устанавливайте приложение</span>
                <nav className="footer_apps">
                    <a href="#" className="footer_apps_item">
                        <img src={google_play} alt="app_icon" width="100" height="32" />
                    </a>

                    <a href="#" className="footer_apps_item">
                        <img src={app_store} alt="app_icon" width="100" height="32" />
                    </a>
                </nav>
            </div>
        </div>

        <div className="footer_policy">
            <a href="#" className="footer_policy_item">© Sionic</a>
            <a href="#" className="footer_policy_item">Правовая информация</a>
            <a href="#" className="footer_policy_item">Политика конфиденциальности</a>
        </div>
    </footer>
  );
};
