import React, { useState } from 'react'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './styles.module.css'

import { Avatar } from '../Avatar'
import { Comment } from '../Comment'

interface PostProps {
  author: {
    name: string
    role: string
    avatarUrl: string
  }
  publishedAt: Date
  content: {
    type: string
    content: string
  }[]
}

export const Post: React.FC<PostProps> = ({ author, publishedAt, content }) => {
  const [comments, setComments] = useState(['Post muito bacana, hein?!'])
  const [newCommentText, setNewCommentText] = useState('')

  const formattedPublishedDate = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    },
  )

  const formattedPublishedTime = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBR,
  })

  function handleCreateNewComment(event: React.FormEvent) {
    event.preventDefault()

    setComments((prevComments) => [...prevComments, newCommentText])

    setNewCommentText('')
  }

  function handleCreateNewCommentChange(
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete: string) {
    const commentWithoutDeleteOne = comments.filter(
      (comment) => comment !== commentToDelete,
    )

    setComments(commentWithoutDeleteOne)
  }

  function handleNewCommentInvalid(
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    event.target.setCustomValidity('Esse campo é obrigatório.')
  }

  function renderContent() {
    return content.map((line) => {
      switch (line.type) {
        case 'paragraph':
          return <p key={line.content}>{line.content}</p>
        case 'link':
          return (
            <p key={line.content}>
              <a href="#">{line.content}</a>
            </p>
          )
        default:
          return null
      }
    })
  }

  const isNewCommentEmpty = !newCommentText.length

  return (
    <article className={styles.container}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
            alt={author.name}
            title={author.name}
            hasBorder
          />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={formattedPublishedDate}
          dateTime={publishedAt.toISOString()}
        >
          Públicado {formattedPublishedTime}
        </time>
      </header>

      <div className={styles.content}>{renderContent()}</div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          onChange={handleCreateNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={() => deleteComment(comment)}
          />
        ))}
      </div>
    </article>
  )
}
