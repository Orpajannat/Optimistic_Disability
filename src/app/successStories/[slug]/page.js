import Story from '@/components/buttons/successStories/Story'
import React from 'react'

const stories = [
    {
    image: '/images/tailor.png',
    title: 'From Learning to Earning',
    description: 'After completing our skill development program, Rafiq gained confidence and now runs his own tailoring business.',
    slug: "from-learning-to-earning"
    },
    {
    image: '/images/Student.png',
    title: 'Education Changed Everything',
    description: 'With our educational support and assistive resources, Farzana is now pursuing her degree in English Literature.',
    slug: 'education-changed-everything'
    },
    {
    image: '/images/JobHolder.png',
    title: 'A New Career, A New Beginning',
    description: 'Through employment assistance and career counseling, Hasan found a job he loves as a digital marketing executive.',
    slug: 'a-new-career-a-new-beginning'
    },
   ]

export default async function page ({params}) {
   const { slug } = await params

   const story = stories.find(s => s.slug === slug)
  return (
    <div>
        <Story story={story}/>
    </div>
  )
}
