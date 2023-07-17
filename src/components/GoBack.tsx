import { useNavigate } from 'react-router-dom'
import BackArrow from './Svg/BackArrow';
import styles from '../assets/scss/components/GoBack.module.scss';

const GoBack = () => {
    const navigate = useNavigate();
    return (
        <button className={styles.back} onClick={(e) => {
            e.preventDefault();
            navigate(-1);
        }}>
            <BackArrow />
            Back
        </button>
    )
}

export default GoBack