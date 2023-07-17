import React from 'react'

import styles from './App.module.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      name: 'Delba',
      role: 'Developer Experience at ▲Vercel',
      avatarUrl:
        'https://delba.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdelba%2Fimage%2Ftwitter_name%2Fc_thumb%2Cg_face%2Ch_380%2Cw_380%2Cq_100%2Fdelba_oliveira.jpg&w=64&q=95',
    },
    publishedAt: new Date('2023-07-11 09:00:00'),
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'delba.vercel/doctorcare',
      },
    ],
  },
  {
    id: 2,
    author: {
      name: 'Fernando Rojo',
      role: 'Co-Founder @ BeatGig',
      avatarUrl: 'https://github.com/nandorojo.png',
    },
    publishedAt: new Date('2023-07-11 09:00:00'),
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'fernando.rojo/doctorcare',
      },
    ],
  },
]

const App: React.FC = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              publishedAt={post.publishedAt}
              content={post.content}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
