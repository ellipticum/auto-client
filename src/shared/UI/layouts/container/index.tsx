import React from 'react'

import styles from './styles.module.scss'

import LayoutProps from '@/shared/interfaces/layout-props'

const Container = ({ children }: LayoutProps) => {
    return <div className={styles.container}>{children}</div>
}

export default Container
