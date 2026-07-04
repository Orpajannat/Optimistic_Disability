import React from 'react'
import ResourceHero from '@/components/resources/ResourceHero'
import FeaturedResources from '@/components/resources/FeaturedResources'
import ToolsGuides from '@/components/resources/ToolsGuides'

export default function resources () {
  return (
    <div>
        <ResourceHero/>
        <FeaturedResources/>
        <ToolsGuides/>
    </div>
  )
}
