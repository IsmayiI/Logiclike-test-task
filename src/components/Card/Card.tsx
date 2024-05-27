import styles from './Card.module.scss'

interface CardProps extends Course { }

export const Card = ({ name, image, bgColor }: CardProps) => {
   return (
      <article style={{ backgroundColor: bgColor }} className={styles.card}>
         <div>
            <img src={image} alt={name} />
         </div>
         <h2>{name}</h2>
      </article>
   )
}