import React from 'react';
import { currentConfig, dbs } from '../App';
import { useForm } from '../hooks/useForm';
import styles from '../styles/mainStyles.module.css';
import { Button } from './Button';

interface FormProps {
    className?: string,
    setModal: any,
    setDataBases: React.Dispatch<React.SetStateAction<dbs | null>>
    setCurrentConfig: React.Dispatch<React.SetStateAction<currentConfig | null>>
}

interface ConnectionForm {
    user: string,
    server: string,
    password: string,
    database: string
}

const initialState = {
    user: "",
    server: "",
    password: "",
    database: ''
}


export const Form = ({ setModal, setDataBases, setCurrentConfig }: FormProps) => {
    const { values, handleChange } = useForm<ConnectionForm>(initialState);
    const { user, password, server, database } = values;
    function connect(e: React.FormEvent) {
        e.preventDefault();
        window.fetch("http://localhost:8080", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
        .then( res => res.json())
        .then( res => {
            console.log(res)
            setModal(false);
            setDataBases([{dbName: database, tables: [...res]}])
            setCurrentConfig({...values});
        })
    }
    return (
        <form className={styles.mainForm}>
            <h3 className={styles.headingTitle}>Llena todos los campos para agregar una conexion con azure sql.</h3>
            <div className={styles.formGroup}>
                <label className={styles.formGroupLabel}>User</label>
                <input
                    type="text"
                    className={styles.inputForm}
                    name="user"
                    value={user}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formGroupLabel} >Password</label>
                <input
                    type="password"
                    className={styles.inputForm}
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formGroupLabel}>Server</label>
                <input
                    type="text"
                    className={styles.inputForm}
                    name="server"
                    value={server}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formGroupLabel}>Data base</label>
                <input
                    type="text"
                    className={styles.inputForm}
                    name="database"
                    value={database}
                    onChange={handleChange}
                />
            </div>
            <Button
                value='Cancel'
                onClick={() => setModal(false)}
                className={styles.btnCancel}
            />
            <Button
                value='Try to connect'
                onClick={(e: any) => connect(e)}
                className={styles.btnTryToConnect}
            />
        </form>
    );
}
