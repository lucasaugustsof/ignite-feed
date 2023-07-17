import React, { ImgHTMLAttributes } from 'react'

import styles from './styles.module.css'

type ImgElementProps = Pick<
  ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'alt' | 'title'
>

interface AvatarProps extends ImgElementProps {
  hasBorder?: boolean
}

export const Avatar: React.FC<AvatarProps> = ({
  hasBorder = false,
  ...props
}) => {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.container}
      {...props}
    />
  )
}
