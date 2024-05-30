import { useEffect, useState } from "react"
import { Sidebar } from "./components/Sidebar"
import { Card } from "./components/Card"

const ALL_TAGS = 'Все темы' // All topics

function App() {

   const [tags, setTags] = useState<string[]>([])
   const [courses, setCourses] = useState<Course[]>([])
   const [filteredCourses, setFilteredCourses] = useState<Course[]>([])
   const [error, setError] = useState<boolean>(false)

   // Fetch courses from the API
   const getCourses = async (): Promise<Course[]> => {
      try {
         const res = await fetch('https://logiclike.com/docs/courses.json')

         if (!res.ok) throw new Error('Error fetching courses') // Throw an error if the response is not successful

         const courses: Course[] = await res.json()


         getAllTags(courses) // Get all tags from courses

         setError(false)
         setCourses(courses)
         setFilteredCourses(courses)
         return courses
      } catch (error) {
         setError(true)
         console.log(error)
      }

      return [] // Return an empty array in case of an error
   }

   // Extract all unique tags from courses
   const getAllTags = (courses: Course[]): string[] => {
      let allTags: string[] = [ALL_TAGS]

      courses.forEach((course: Course) => {
         allTags = [...allTags, ...course.tags] // Add tags from each course
      })

      const uniqueTags = [...new Set(allTags)] // Remove duplicate tags

      setTags(uniqueTags)
      return uniqueTags
   }

   // Filter courses by selected tag
   const filterByTag = (tag: string): Course[] => {

      if (tag === ALL_TAGS) {
         setFilteredCourses(courses) // If 'All topics' is selected, show all courses
         return courses
      }

      const filteredCourses: Course[] = courses.filter((course: Course) => course.tags.includes(tag))

      setFilteredCourses(filteredCourses)
      return filteredCourses
   }

   useEffect(() => {
      getCourses() // Fetch courses when the component mounts
   }, [])

   // Display an error message if there is an error
   if (error) return <h1>Извините, что то пошло не так..</h1>

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
