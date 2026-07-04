import AboutHero from '@/components/aboutUs/AboutHero'
import OurApproach from '@/components/aboutUs/OurApproach'
import OurCoreValue from '@/components/aboutUs/OurCoreValue'
import OurStory from '@/components/aboutUs/OurStory'
import VisionMission from '@/components/aboutUs/VisionMission'
import WhatWeDo from '@/components/aboutUs/WhatWeDo'
import WhyWeExist from '@/components/aboutUs/WhyWeExist'
import React from 'react'

export default function page () {
  return (
    <div>
        <AboutHero/>
        <OurStory/>
        <VisionMission/>
        <OurCoreValue/>
        <WhatWeDo/>
        <WhyWeExist/>
        <OurApproach/>
    </div>
  )
}
