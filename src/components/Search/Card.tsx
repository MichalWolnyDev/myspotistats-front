import styles from '../../assets/scss/search/Card.module.scss'


interface CardProps {
  className?: string,
  children?: React.ReactNode
}

const Card = (props: CardProps) => {
  return (
    <div className={`${styles.card} ${props.className ? props.className : ''}`}>
        {props.children}
    </div>
  )
}

export default Card