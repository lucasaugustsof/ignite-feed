import React from 'react'

import styles from './styles.module.css'

import { Avatar } from '../Avatar'

import { PencilLine } from 'phosphor-react'

export const Sidebar: React.FC = () => {
  return (
    <aside className={styles.container}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        alt=""
      />

      <div className={styles.profile}>
        <Avatar
          src="https://github.com/lucasaugustsof.png"
          alt="Lucas Augusto"
          title="Lucas Augusto"
          hasBorder
        />

        <strong>Lucas Augusto</strong>
        <span>Software Developer at RD</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
