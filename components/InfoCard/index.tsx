

import { cx } from 'class-variance-authority'
import React from 'react'

export const InfoCardContent: React.FC<React.ComponentProps<'div'>> = ({ className, ...props }) => {
    return (
        <div {...props} className={cx('info-card__content', className)} />
    )
}
export const InfoCardSubtitle: React.FC<React.ComponentProps<'header'>> = ({ className, ...props }) => {
    return (
        <header {...props} className={cx('info-card__subtitle', className)} />
    )
}
export const InfoCardTitle: React.FC<React.ComponentProps<'h3'>> = ({ className, ...props }) => {
    return (
        <h3 {...props} className={cx('info-card__title', className)} />
    )
}


export const InfoCard: React.FC<React.ComponentProps<'div'>> = ({ className, ...props }) => {
    return (
        <div {...props} className={cx('info-card', className)} />
    )
}

export default {
    Card: InfoCard,
    Subtitle: InfoCardSubtitle,
    Title: InfoCardTitle,
    Content: InfoCardContent
} 