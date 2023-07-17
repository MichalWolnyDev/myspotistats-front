import Container from '../components/UI/Container'
import styles from '../assets/scss/Home.module.scss'
import { getAuthToken } from '../helpers/spotify'
import Login from '../components/Login'

const Home = () => {
    const token = getAuthToken();

    return (
        <Container>
            <div className={styles.home}>
                <div className={styles.home__content}>
                    <h1 className={styles.home__title}>
                        MySpotiStats
                    </h1>
                    <p className={styles.home__subtitle}>
                        All your Spotify statistics in one place.
                    </p>
                    {!token && <Login />}
                </div>
            </div>
        </Container>
    )
}

export default Home