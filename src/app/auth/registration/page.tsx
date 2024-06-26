import React from 'react'

import Wrapper from '@/shared/UI/layouts/wrapper'

import Registration from '@/widgets/registration/UI'
import Header from '@/shared/UI/header'

const Page = () => {
    return (
        <Wrapper>
            <Header />
            <Registration />
        </Wrapper>
    )
}

export default Page
