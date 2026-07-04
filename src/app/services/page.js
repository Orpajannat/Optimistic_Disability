import ServiceHero from '@/components/services/ServiceHero'
import OurServices from '@/components/services/OurServices'
import HowWeDeliver from '@/components/services/HowWeDeliver'
import OurImpact from '@/components/services/OurImpact'
import React from 'react'

export default function services () {
  return (
    <div>
        <ServiceHero/>
        <OurServices/>
        <OurImpact/>
        <HowWeDeliver/>
    </div>
  )
}
