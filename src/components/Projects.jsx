import { Menu } from './Menu';
import './Projects.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import { ProjectDetails } from './ProjectDetails';
import { useTranslation } from 'react-i18next';
import airTicket1 from '../assets/air-ticket1.png';
import airTicket2 from '../assets/air-ticket2.png';
import airTicket3 from '../assets/air-ticket3.png';
import shelfScape1 from '../assets/shelfScpe1.png';
import shelfScape2 from '../assets/shelfScape2.png';
import shelfScape3 from '../assets/shelfScape3.png';
import worldExplorer1 from '../assets/world-explorer1.png';
import worldExplorer2 from '../assets/world-explorer2.png';

export const Projects = () => {
    const [modalState, setModalState] = useState(false);
    const { t } = useTranslation()

    const projects = [
        {
            id: 1,
            name: "Air Ticket",
            images: [
                { id: 1, image: airTicket1 },
                { id: 2, image: airTicket2 },
                { id: 3, image: airTicket3 },
            ],
            description: t('airTicketDescription'),
            tecnologies: "React, styled components, local storage",
            gitHub: "https://github.com/SantiagoDeAures/Air-ticket",
        },
        {
            id: 2,
            name: "ShelfScape",
            images: [
                { id: 1, image: shelfScape1 },
                { id: 2, image: shelfScape2 },
                { id: 3, image: shelfScape3 },
            ],
            description: t('shelfScapeDescription'),
            tecnologies: "TypeScript, React, Sass, NodeJs, MongoDB, Mongoose, Vitest",
            gitHub: "https://github.com/SantiagoDeAures/ShelfScape",
        },
        {
            id: 3,
            name: "World Explorer",
            images: [
                { id: 1, image: worldExplorer1 },
                { id: 2, image: worldExplorer2 },
            ],
            description: t('worldExplorerDescription'),
            tecnologies: "React",
            gitHub: "https://github.com/SantiagoDeAures/World-explorer",
        },
    ];

    const [projectSelected, setProjectSelected] = useState({});
    const changeModalState = () => {
        setModalState((prevState) => !prevState);
    };

    const [settings, setSettings] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    const updateSettings = () => {
        const width = window.innerWidth;
        if (width > 1000) {
            setSettings({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 3,
            });
        } else if (width > 500 && width < 1000) {
            setSettings({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
                slidesToScroll: 2,
            });
        } else {
            setSettings({
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
            });
        }
    };

    const handleProject = (id) => {
        setProjectSelected(projects.find((project) => project.id === id));
        setModalState((prevState) => !prevState);
    };

    useEffect(() => {
        updateSettings();
        window.addEventListener('resize', updateSettings);

        return () => {
            window.removeEventListener('resize', updateSettings);
        };
    }, []);

    return (
        <>
            <div className="projects">
                <div className="projects__carrusel">
                    <Slider {...settings} className="Slider">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="projects__carrusel--card"
                                onClick={() => {
                                    handleProject(project.id);
                                }}
                            >
                                <div>
                                    <img
                                        src={project.images[0].image}
                                        alt="project"
                                        className="card__image"
                                    />
                                </div>
                                <div className="card__name">
                                    <p>{project.name}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                {modalState && (
                    <div className="projectDetails__container" onClick={changeModalState}>
                        <div
                            className="projectDetails__modal"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ProjectDetails project={projectSelected} />
                        </div>
                    </div>
                )}

                <Menu className="Menu" />
            </div>
        </>
    );
};
