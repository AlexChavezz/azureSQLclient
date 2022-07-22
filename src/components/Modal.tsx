import { ReactElement } from 'react';
import { ModalProps } from '../interfaces/interfaces';
import styles from '../styles/mainStyles.module.css';

export const Modal = ({ children }: ModalProps) => {
  return (
    <section
      className={styles.modalContainer}
      // onClick={}
    >
      <article className={styles.modal}>
        {
          children
        }
      </article>
    </section>
  );
}
