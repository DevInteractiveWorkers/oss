import React from 'react'

const FullDivider = ({className, fill}:{className?:string, fill?:string}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397 406" fill="none">
        <path d="M202.77 405.843H0.521362L172.659 0.842773H396.488L202.77 405.843Z" fill={`${fill != undefined ? fill : '#E7A50F'}`}/>
    </svg>
  )
}

export default FullDivider