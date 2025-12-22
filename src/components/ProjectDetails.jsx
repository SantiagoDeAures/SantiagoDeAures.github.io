import { Carousel } from './Carousel'
import './ProjectDetails.scss'
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export const ProjectDetails = ({ project }) => {
    const { t } = useTranslation()

   
    return (
        <>
            <div className="projectDetails">
                {/* <img className='projectDetails__img' src="../src/assets/world-explorer1.png" alt="Project" /> */}
                <Carousel images={project.images}/>
                <p className="projectDetails__name">{project.name}</p>
                <p className="projectDetails__description">{project.description}</p>
                <div className="projectDetails__tecnologies">
                    <p className="projectDetails__tecnologies--label">{t('technologies')}:</p>
                    <p className="projectDetails__tecnologies--content">{project.tecnologies}</p>
                </div>
                <div className="projectDetails__github">
                    <p className="projectDetails__github--label">Github:</p>
                    <p className="projectDetails__github--content" >{project.gitHub}</p>
                </div>
            </div>
        </>
    )
}

ProjectDetails.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        tecnologies: PropTypes.string,
        gitHub: PropTypes.string,
        images: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                image: PropTypes.string,
            })
        ),
    }),
};