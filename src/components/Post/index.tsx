import React from 'react'

import styles from './styles.module.css'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

export const Post: React.FC = () => {
  return (
    <article className={styles.container}>
      <header>
        <div className={styles.author}>
          <Avatar
            data={{
              src: 'https://delba.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdelba%2Fimage%2Ftwitter_name%2Fc_thumb%2Cg_face%2Ch_380%2Cw_380%2Cq_100%2Fdelba_oliveira.jpg&w=64&q=95',
              alt: 'Delba',
            }}
            hasBorder
          />

          <div className={styles.authorInfo}>
            <strong>Delba</strong>
            <span>Developer Experience at ▲Vercel</span>
          </div>
        </div>

        <time title="24 de Junho às 17:02h" dateTime="2023-06-24 17:02:30">
          Públicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <br />
        <p>
          👉 <a href="#">delba/doctorcare</a>
        </p>
        <br />
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}
