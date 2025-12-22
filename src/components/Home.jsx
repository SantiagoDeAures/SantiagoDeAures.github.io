import './Home.scss';
import { Menu } from './Menu';
import { useTranslation } from 'react-i18next';
import me from '../assets/me.jpg';
import marco1 from '../assets/marco1.png';
import marco2 from '../assets/marco2.png';

export const Home = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    return (
        <div className="Home">
            <main className='Home__main'>
                <section className='Home__main--section'>
                    <figure className="Home__profile">
                        <img src={me} alt="Santiago Gómez" className="Home__profile--img" />
                        <img src={marco1} alt="" className='Home__profile--frame' />
                    </figure>
                    <div className='Home__name'>
                        <p>Santiago Gómez Pavas</p>
                    </div>

                    <div className='Home__container'>
                        <p className='Home__container--p'>
                            {t('welcome')}
                        </p>
                    </div>
                    <img className='Home__frame' src={marco2} alt="frame" />
                </section>

                <Menu className='Menu' />

                <div className="language-switcher">
                    <button onClick={() => changeLanguage('es')}>Español</button>
                    <button onClick={() => changeLanguage('en')}>English</button>
                </div>
            </main>
        </div>
    );
};
