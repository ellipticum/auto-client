import React from 'react'

import IconProps from '@/shared/interfaces/icon-props'

const Home = ({ width = 24, height = 24 }: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z' fill='#202020' />
        </svg>
    )
}

export default Home
