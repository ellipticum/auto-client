import React from 'react'

import IconProps from '@/shared/interfaces/icon-props'

import Icon from '@/shared/UI/icon'

const Profile = ({ width = 24, height = 24 }: IconProps) => {
    return (
        <Icon
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z'
                fill='#202020'
            />
        </Icon>
    )
}

export default Profile
