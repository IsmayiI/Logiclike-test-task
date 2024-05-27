import { useState } from 'react'
import styles from './Sidebar.module.scss'

interface SidebarProps {
   tags: String[]
}

export const Sidebar = ({ tags }: SidebarProps) => {
   const [activeTag, setActivTag] = useState<Number>(0)

   // const onActiveTag = (i: number) => {
   //    setActivTag(i)
   // }

   return (
      <nav className={styles.sidebar}>
         <ul>
            {tags.map((tag, i) => {
               const tagStyle = i === activeTag ? `${styles.active}` : ''

               return (
                  <li
                     onClick={() => setActivTag(i)}
                     className={tagStyle}
                     key={`${tag}`}>
                     {tag}
                  </li>
               )
            })}
         </ul>
      </nav>
   )
}

// const activeItemStyle = isActive ? `${styles.active}` : ''
