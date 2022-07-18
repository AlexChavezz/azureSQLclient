import React, { FormEvent } from 'react';
import styles from '../styles/mainStyles.module.css';
import { Button } from './Button';

interface FormProps {
    className?: string,
    changeModalState: () => void 
}

export const Form = ({ changeModalState }: FormProps) => {
    function connect(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }
    return (
        <form className={styles.mainForm}>
            <h3>Llena todos los campos para agregar una conexion con azure sql.</h3>
            <div className={styles.formGroup}>
                <label className={styles.formGroupLabel}>User</label>
                <input type="text" className={styles.inputForm} />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formGroupLabel} >Password</label>
                <input type="password" className={styles.inputForm} />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formGroupLabel}>Server</label>
                <input type="text" className={styles.inputForm} />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formGroupLabel}>Data base</label>
                <input type="text" className={styles.inputForm} />
            </div>
            <Button
                value='Cancel'
                onClick={changeModalState}
                className={styles.btnCancel}
            />
            <Button
                value='Try to connect'
                onClick={connect}
                className={styles.btnTryToConnect} 
            />
        </form>
    );
}
