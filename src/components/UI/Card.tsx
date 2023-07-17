import styles from '../../assets/scss/UI/Card.module.scss';


interface CardProps {
  title: string,
}

const Card = (props: CardProps) => {
  return (
    <div className={styles.card}>
        <div className={styles.card__content}>
            <h2 className={styles.card__title}>
                {props.title}
            </h2>
            
        </div>
    </div>
  )
}

export default Card