import { useEffect, useState } from "react"
import { Sidebar } from "./components/Sidebar"
import { Card } from "./components/Card"

const ALL_TAGS = 'Все темы'

function App() {

   const [tags, setTags] = useState<string[]>([])
   const [courses, setCourses] = useState<Course[]>([])
   const [filteredCourses, setFilteredCourses] = useState<Course[]>([])

   const getCourses = async (): Promise<Course[]> => {
      const res = await fetch('https://logiclike.com/docs/courses.json')
      const courses: Course[] = await res.json()

      getAllTags(courses)

      setCourses(courses)
      setFilteredCourses(courses)
      return courses
   }

   const getAllTags = (courses: Course[]): string[] => {
      let allTags: string[] = [ALL_TAGS]

      courses.forEach((course: Course) => {
         allTags = [...allTags, ...course.tags]
      })

      const uniqueTags = [...new Set(allTags)]

      setTags(uniqueTags)
      return uniqueTags
   }

   const filterByTag = (tag: string): Course[] => {
      if (tag === ALL_TAGS) {
         setFilteredCourses(courses)
         return courses
      }

      const filteredCourses: Course[] = courses.filter((course: Course) => course.tags.includes(tag))

      setFilteredCourses(filteredCourses)
      return filteredCourses
   }

   useEffect(() => {
      getCourses()
   }, [])

   return (
      <div className="container">
         <Sidebar tags={tags}
            onFilter={filterByTag} />
         <main>
            <section className="section">
               {filteredCourses.map((course: Course) => (
                  <Card key={course.id} {...course} />
               )
               )}
            </section>
         </main>
      </div>
   )
}

export default App
