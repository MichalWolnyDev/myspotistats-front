import styles from '../../assets/scss/svg/BackArrow.module.scss'

const BackArrow = () => {
    return (
        <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
            <g id="surface1">
                <path className={styles.path} d="M 11.001562 6 L 5.001562 12 L 11.001562 18 M 18 6 L 12 12 L 18 18 " transform="matrix(0.833333,0,0,0.833333,0,0)" />
            </g>
        </svg>
    )
}

export default BackArrow