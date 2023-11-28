import React, { ReactNode } from 'react'
import Image from 'next/image';
import FullDivider from './../icons/full-divider';

const ServiceBanner = ({ image, direction, content, children }: { image: string, direction: boolean, content:{title:string, subtitle:string}, children:ReactNode }) => {
    return (
        <section className='text-center sm:text-justify relative w-full overflow-hidden my-8 sm:my-12'>
            <article className={`flex items-center justify-evenly relative z-10 md:min-h-[500px] max-w-full ${direction ? 'flex-col sm:flex-row-reverse' : 'flex-col sm:flex-row'}`}>
                <div className={`basis-[50%] xl:basis-[40%] md:mt-24 p-4 shrink-0 ${direction ? 'md:text-end' : ''}`}>
                    <h3 className='uppercase title font-bebas text-4xl lg:text-6xl xl:text-8xl'>{ content.title }</h3>
                    <h4 className='font-normal leading-10 text-2xl lg:text-4xl text-black'> {content.subtitle} </h4>
                </div>
                {children}
            </article>
            <div className={`absolute flex bottom-0 w-full sm:w-auto  ${direction ? 'sm:-left-[14%] flex-row-reverse' : 'sm:-right-[21%]'}`}>
                <FullDivider className={`relative ${direction ? 'right-[20%]' : 'left-[20%]'} h-full hidden xl:block`} fill={`${direction ? '#B7B7B7' : '#353535'}`}></FullDivider>
                <FullDivider className={`relative ${direction ? 'right-[10%]' : 'left-[10%]'} h-full hidden lg:block`} fill={`${direction ? '#B7B7B7' : '#353535'}`}></FullDivider>
                <FullDivider className='relative h-full hidden sm:block'></FullDivider>
            </div>
        </section>
    )
}

export default ServiceBanner