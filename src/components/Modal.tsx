import { ReactElement } from 'react';
import styles from '../styles/mainStyles.module.css';

interface ModalProps {
    children: ReactElement | ReactElement[]
}

export const Modal = ({ children }:ModalProps) => {
  return (
    <section className={styles.modalContainer}>
        <article className={styles.modal}>
            {
                children 
            }
        </article>
    </section>
  );
}
