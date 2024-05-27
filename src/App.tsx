import { useEffect, useState } from "react"
import { Sidebar } from "./components/Sidebar"

function App() {

   const [tags, setTags] = useState<String[]>([])
   const [courses, setCourses] = useState<Course[]>([])

   const getCourses = async (): Promise<Course[]> => {
      const res = await fetch('https://logiclike.com/docs/courses.json')
      const courses: Course[] = await res.json()

      getAllTags(courses)

      setCourses(courses)
      return courses
   }

   const getAllTags = (courses: Course[]): String[] => {
      let allTags: string[] = []

      courses.forEach((course: Course) => {
         allTags = [...allTags, ...course.tags]
      })

      const uniqueTags = [...new Set(allTags)]

      setTags(uniqueTags)
      return uniqueTags
   }

   useEffect(() => {
      getCourses()
   }, [])





   return (
      <div>
         <Sidebar tags={tags} />
      </div>
   )
}

export default App
