import React from 'react'

import styles from './styles.module.css'

import { Trash, ThumbsUp } from 'phosphor-react'

import { Avatar } from '../Avatar'

export const Comment: React.FC = () => {
  return (
    <div className={styles.container}>
      <Avatar
        data={{
          src: 'https://github.com/lucasaugustsof.png',
          alt: 'Lucas Augusto',
        }}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>Lucas Augusto</strong>
              <time title="05 de Julho às 12h35" dateTime="2023-05-07 12:35:00">
                Cerca de 2h
              </time>
            </div>

            <button>
              <Trash size={24} cursor="pointer" />
            </button>
          </header>

          <p>Muito bom Delba, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir<span>03</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
