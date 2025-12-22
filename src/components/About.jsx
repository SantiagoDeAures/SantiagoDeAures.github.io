import { Menu } from './Menu';
import './About.scss';
import { useTranslation } from 'react-i18next';
import linkedinIcon from '../assets/linkedin.png';
import whatsappIcon from '../assets/whatsapp.png';
import emailIcon from '../assets/email.png';

export const About = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className="about">
                <div className="presentation">
                    <iframe
                        className="presentation__video"
                        width="400"
                        height="225"
                        src={t('video')}
                        title="Presentación"
                    ></iframe>

                    <div className="presentation__description">
                        <p className="presentation__description--p">
                            {t('summary')}
                        </p>
                        <div className="presentation__description--contact">
                            <p>{t('contact')}:</p>
                            <a
                                href="https://www.linkedin.com/in/santiago-gomez-pavas"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="linkedin" src={linkedinIcon} alt="LinkedIn" />
                            </a>
                            <a
                                href="https://wa.me/+573137242546"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="whatsApp" src={whatsappIcon} alt="WhatsApp" />
                            </a>
                        </div>
                        <div className="presentation__description--email">
                            <img src={emailIcon} alt="Email" />
                            <p>santiagogomezpavas42@gmail.com</p>
                        </div>
                    </div>
                </div>
                <Menu className="Menu" />
            </div>
        </>
    );
};
