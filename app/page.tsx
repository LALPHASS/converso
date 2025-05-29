import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionCard from '@/components/CompanionCard';
import CompanionList from '@/components/CompanionList';
import CTA from '@/components/CTA';
import { recentSessions } from '@/constants';
const Page = () => {
  return (
      <main>
        <h1 className='text-2xl'> Popular Companions </h1>
        <section className='home-section'>
          <CompanionCard
            id = '123'
            name = 'Neura the Brainy Explorer'
            topic = 'Neural network of the brain'
            subjet = 'Science'
            duration = {45}
            color = '#ffda6e'
          />

          <CompanionCard
            id = '223'
            name = 'Countsy the Number Wizard'
            topic = 'Derivatives & Integrals'
            subjet = 'Math'
            duration = {30}
            color = '#e5d0ff'
          />

          <CompanionCard
            id = '323'
            name = 'Verba the Vocabulary Builder'
            topic = 'English Literature'
            subjet = 'Language'
            duration = {30}
            color = '#bde5ff'
          />



        </section>
        <section className='home-section'>
          <CompanionList
            title='Recent completed Sessions'
            companions={recentSessions}          
            classNames='w-2/3 max-lg:w-full'
            />
          <CTA/>
        </section>
      </main>


  )
}

export default Page