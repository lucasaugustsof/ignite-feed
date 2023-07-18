import React, { createContext, useState, useRef } from 'react'

import { Dialog } from '../components/Dialog'

interface CommentContextData {
  comments: string[]
  addNewComment(newComment: string): void
  openDialogDeleteComment(comment: string): void
}

interface CommentProviderProps {
  children: React.ReactNode
}

export const CommentContext = createContext({} as CommentContextData)

export const CommentProvider: React.FC<CommentProviderProps> = ({
  children,
}) => {
  const [comments, setComments] = useState<string[]>([])

  const dialogRef = useRef<HTMLDialogElement>(null)

  let commentToDelete = ''

  function openDialogDeleteComment(comment: string) {
    dialogRef.current?.showModal()
    document.body.style.overflow = 'hidden'

    commentToDelete = comment
  }

  function closeDialogDeleteComment() {
    dialogRef.current?.close()
    document.body.style.overflowY = 'scroll'
  }

  function addNewComment(newComment: string) {
    setComments((prevComment) => [...prevComment, newComment])
  }

  function deleteComment() {
    const commentWithoutDeleteOne = comments.filter(
      (comment) => comment !== commentToDelete,
    )

    setComments(commentWithoutDeleteOne)

    closeDialogDeleteComment()
  }

  return (
    <CommentContext.Provider
      value={{
        comments,
        addNewComment,
        openDialogDeleteComment,
      }}
    >
      {children}

      <Dialog
        ref={dialogRef}
        onCancel={closeDialogDeleteComment}
        onAccept={deleteComment}
      />
    </CommentContext.Provider>
  )
}
