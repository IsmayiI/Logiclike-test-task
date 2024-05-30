import styles from './Loading.module.scss'

export const Loading = () => {
   const cards: undefined[] = Array.from({ length: 6 })

   return (
      <>
         <div style={{ flex: '0 0 264px', padding: '12px' }}>
            {cards.map((_, i) => (
               <span key={i} className={styles.loading} style={{ width: '238px', height: '42px' }}></span>
            )
            )}
         </div>
         <main className='section'>
            {cards.map((_, i) => (
               <span key={i} className={styles.loading} style={{ width: '100%', height: '210px' }}></span>
            )
            )}
         </main>
      </>
   )
}