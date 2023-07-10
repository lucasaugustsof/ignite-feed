import React from 'react'

import styles from './styles.module.css'

import igniteLogoSvg from '../../assets/ignite-logo.svg'

export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <img src={igniteLogoSvg} alt="Logo do Ignite Feed" />

      <strong>Ignite Feed</strong>
    </header>
  )
}
