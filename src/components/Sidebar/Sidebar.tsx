import { useState } from 'react'
import styles from './Sidebar.module.scss'

interface SidebarProps {
   tags: string[]
   onFilter: (tag: string) => Course[]
}

export const Sidebar = ({ tags, onFilter }: SidebarProps) => {
   const [activeTag, setActivTag] = useState<number>(0) // State for storing the active tag index

   // Handle click event on a tag
   const clickHandler = (tag: string, i: number) => {
      if (i === activeTag) return // If the clicked tag is already active, do nothing
      onFilter(tag) // Filter courses by the clicked tag
      setActivTag(i) // Set the clicked tag as active
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
                     key={tag}>
                     {tag}
                  </li>
               )
            })}
         </ul>
      </nav>
   )
}