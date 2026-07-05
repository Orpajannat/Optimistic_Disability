import Resource from '@/components/buttons/viewResources/Resource'
import React from 'react'

const resources = [
  {
    image: '/images/resource1.png',
    badge: 'GUIDE',
    backgroundColor:'bg-orange-100/40',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-400',
    title: 'Guide to Disability Rights',
    description: 'A simple guide to understanding your legal rights, protections, and available support services.',
    slug: "1"
  },
  {
    image: '/images/resource2.png',
    badge: 'ARTICLE',
    backgroundColor:'bg-blue-100/40',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-400',
    title: 'Building Confidence Every Day',
    description: 'Practical tips and inspiring ideas to help build self-esteem, resilience, and independence.',
    slug: "2"
  },
  {
    image: '/images/resource3.png',
    badge: 'WEBINAR',
    backgroundColor:'bg-green-100/40',
    borderColor: 'border-green-200',
    textColor: 'text-green-400',
    title: 'Inclusive Education for All',
    description: 'Watch our expert webinar on creating accessible and inclusive learning environments.',
    slug: "3"
  },
  {
    image: '/images/resource4.png',
    badge: 'CHECKLIST',
    backgroundColor:'bg-purple-100/40',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-400',
    title: 'Accessibility Checklist',
    description: 'Download a practical checklist to help make workplaces, schools, and public spaces more accessible.',
    slug: "4"
  },
]

export default async function page ({params}) {
    const { slug } = await params

    const resource = resources.find(r => r.slug === slug)
  return (
    <div>
        <Resource resource={resource}/>
    </div>
  )
}
