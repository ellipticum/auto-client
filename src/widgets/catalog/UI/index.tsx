'use client'

import React from 'react'

import Image from 'next/image'

import { useRouter } from 'next/navigation'

import styles from './styles.module.scss'

import Container from '@/shared/UI/layouts/container'

import { ICar } from '@/shared/store/auth'

interface Props {
    cars: ICar[] | undefined
}

const Catalog = ({ cars }: Props) => {
    const router = useRouter()

    return (
        <section className={styles.section}>
            <Container>
                {cars ? (
                    <div className={styles.cars}>
                        {cars.map((car, index) => (
                            <div
                                className={styles.car}
                                key={index}
                                onClick={() => router.push(`/catalog/${car.id}`)}
                            >
                                <img
                                    className={styles.image}
                                    src={car.images[0]}
                                    alt={car.name}
                                    width={400}
                                    height={400}
                                />
                                <div className={styles.info}>
                                    <h3 className={styles.name}>{car.name}</h3>
                                    <p className={styles.description}>{car.description}</p>
                                    <div className={styles.properties}>
                                        {car.properties.map((property, index) => (
                                            <div className={styles.property} key={index}>
                                                <p className={styles.propertyName}>
                                                    {property.name}
                                                </p>
                                                <p>•</p>
                                                <p className={styles.propertyValue}>
                                                    {property.value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>Что-то пошло не так</div>
                )}
            </Container>
        </section>
    )
}

export default Catalog