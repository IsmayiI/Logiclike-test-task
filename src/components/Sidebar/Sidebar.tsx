import { useState } from 'react'
import styles from './Sidebar.module.scss'

interface SidebarProps {
   tags: String[]
   onFilter: (tag: String) => Course[]
}

export const Sidebar = ({ tags, onFilter }: SidebarProps) => {
   const [activeTag, setActivTag] = useState<Number>(0)

   const clickHandler = (tag: String, i: number) => {
      onFilter(tag)
      setActivTag(i)
   }


   return (
      <nav className={styles.sidebar}>
         <ul>
            {tags.map((tag, i) => {
               const tagStyle = i === activeTag ? `${styles.active}` : ''

               return (
                  <li
                     onClick={() => clickHandler(tag, i)}
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
