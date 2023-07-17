import React, { useState } from 'react'

import styles from './styles.module.css'

import { Trash, ThumbsUp } from 'phosphor-react'

import { Avatar } from '../Avatar'

interface CommentProps {
  content: string
  onDeleteComment(): void
}

export const Comment: React.FC<CommentProps> = ({
  content,
  onDeleteComment,
}) => {
  const [linkCount, setLikeCount] = useState(0)

  function handleLikeComment() {
    setLikeCount((prevLinkCount) => prevLinkCount + 1)
  }

  const isCommentLiked = linkCount > 0

  return (
    <div className={styles.container}>
      <Avatar
        src="https://github.com/lucasaugustsof.png"
        alt="Lucas Augusto"
        title="Lucas Augusto"
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

            <button onClick={onDeleteComment}>
              <Trash size={24} cursor="pointer" />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button data-active={isCommentLiked} onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir<span>{linkCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
