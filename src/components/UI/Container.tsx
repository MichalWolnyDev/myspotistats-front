
import styles from '../../assets/scss/UI/Container.module.scss';

interface Container {
  children?: React.ReactNode
}

const Container = (props: Container) => {
  return (
    <div className={styles.container}>
        {props.children}
    </div>
  )
}

export default Container