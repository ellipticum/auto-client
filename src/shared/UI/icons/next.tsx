import React from 'react'

import IconProps from '@/shared/interfaces/icon-props'

const Next = ({ width = 24, height = 24 }: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'
                fill='#202020'
            />
        </svg>
    )
}

export default Next
