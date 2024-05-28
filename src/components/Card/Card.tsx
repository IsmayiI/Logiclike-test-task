import styles from './Card.module.scss'

interface CardProps extends Course { }

export const Card = ({ name, image, bgColor }: CardProps) => (
   <article className={styles.card}>
      <div style={{ backgroundColor: bgColor }}>
         <img src={image} alt={name} />
      </div>
      <h2>{name}</h2>
   </article>
)