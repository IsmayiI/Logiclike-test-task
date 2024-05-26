import styles from './Sidebar.module.scss'

interface SidebarProps { }

interface Tag {
   title: string,
   isActive: boolean,
   id: string
}

const tags: Tag[] = [
   {
      title: 'Все темы',
      isActive: true,
      id: crypto.randomUUID()
   },
   {
      title: 'Логика и мышление',
      isActive: false,
      id: crypto.randomUUID()
   }
]

export const Sidebar = ({ }: SidebarProps) => {


   return (
      <nav className={styles.sidebar}>
         <ul>
            {tags.map(({ title, id, isActive }) => {
               const activeItemStyle = isActive ? `${styles.active}` : ''
               return (
                  <li key={id} className={activeItemStyle}>{title}</li>
               )
            })}
         </ul>
      </nav>
   )
}

