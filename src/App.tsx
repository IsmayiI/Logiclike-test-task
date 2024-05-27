import { useEffect, useState } from "react"
import { Sidebar } from "./components/Sidebar"

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
      let allTags: string[] = []

      courses.forEach((course: Course) => {
         allTags = [...allTags, ...course.tags]
      })

      const uniqueTags = [...new Set(allTags)]

      setTags(uniqueTags)
      return uniqueTags
   }

   const filterByTag = (tag: string): Course[] => {
      const filteredCourses: Course[] = courses.filter((course: Course) => course.tags.includes(tag))

      setFilteredCourses(filteredCourses)
      return filteredCourses
   }

   useEffect(() => {
      getCourses()
   }, [])


   console.log(filteredCourses)


   return (
      <div>
         <Sidebar tags={tags}
            onFilter={filterByTag} />
      </div>
   )
}

export default App
