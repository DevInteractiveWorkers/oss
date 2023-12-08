import React, { ReactNode } from 'react'
import Image from 'next/image';
import FullDivider from './../icons/full-divider';

const ServiceBanner = ({direction, content, children }: { direction: boolean, content:{title:string, subtitle:string}, children:ReactNode }) => {
    return (
        <article className={`relative flex flex-col  ${direction ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center overflow-hidden`}>
        <div className={`relative md:w-5/12 z-10 p-4 ${direction ? '' : 'md:text-end'}`}>
          <h2 className='title text-8xl font-bebas'>{content.title}</h2>
          <h3 className='text-4xl'>{content.subtitle}</h3>
        </div>
        {children}
        <FullDivider className={`absolute bottom-0 ${direction ? 'right-64 hidden xl:block' : 'left-64 hidden xl:block'}`}></FullDivider>
        <FullDivider className={`absolute bottom-0 ${direction ? '-right-64 hidden md:block ' : ' hidden md:block -left-64'}`}></FullDivider>
        <FullDivider className={`absolute bottom-0 ${direction ? 'right-0 hidden md:block' : ' hidden md:block left-0'}`}></FullDivider>
      </article>
    )
}

export default ServiceBanner