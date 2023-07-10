import React from 'react'

import styles from './styles.module.css'

interface AvatarProps {
  data: {
    src: string
    alt: string
  }
  hasBorder?: boolean
}

export const Avatar: React.FC<AvatarProps> = ({ data, hasBorder = false }) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.container}
      src={data.src}
      alt={data.alt}
      title={data.alt}
    />
  )
}
