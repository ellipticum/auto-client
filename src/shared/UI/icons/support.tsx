import React from 'react'

import IconProps from '@/shared/interfaces/icon-props'

const Support = ({ width = 24, height = 24 }: IconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path d='M4 6H2V20C2 21.1 2.9 22 4 22H18V20H4V6Z' fill='#202020' />
            <path
                d='M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM14.01 15C13.42 15 12.96 14.53 12.96 13.95C12.96 13.36 13.43 12.91 14.01 12.91C14.6 12.91 15.05 13.36 15.05 13.95C15.04 14.53 14.6 15 14.01 15ZM16.51 8.83C15.88 9.76 15.28 10.04 14.95 10.64C14.82 10.88 14.77 11.04 14.77 11.82H13.25C13.25 11.41 13.19 10.74 13.51 10.17C13.92 9.44 14.69 9.01 15.14 8.37C15.62 7.69 15.35 6.43 14 6.43C13.12 6.43 12.68 7.1 12.5 7.66L11.13 7.09C11.51 5.96 12.52 5 13.99 5C15.22 5 16.07 5.56 16.5 6.26C16.87 6.87 17.08 7.99 16.51 8.83Z'
                fill='#202020'
            />
        </svg>
    )
}

export default Support
