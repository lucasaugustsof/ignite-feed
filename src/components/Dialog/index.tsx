import React, { DialogHTMLAttributes, forwardRef } from 'react'

import styles from './styles.module.css'

interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  onCancel(): void
  onAccept(): void
}

const DialogBase: React.ForwardRefRenderFunction<
  HTMLDialogElement,
  DialogProps
> = ({ open, onCancel, onAccept, ...props }, ref) => {
  return (
    <dialog ref={ref} className={styles.container} {...props}>
      <div>
        <h3>Excluir comentário</h3>
        <p>
          Você tem certeza que gostaria de
          <br />
          excluir este comentário?
        </p>

        <footer>
          <button onClick={onCancel}>Cancelar</button>

          <button onClick={onAccept}>Sim, excluir</button>
        </footer>
      </div>
    </dialog>
  )
}

export const Dialog = forwardRef(DialogBase)
