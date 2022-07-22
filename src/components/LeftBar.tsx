import { useContext } from 'react';
import { CurrentConfigContext } from '../context/CurrentConfigContext';
import { CurrentTableContext } from '../context/CurrentTableContext';
import { db, dbs, Table } from '../interfaces/interfaces';
import styles from '../styles/mainStyles.module.css';

interface LeftBar {
    dataBases: dbs | null,
}

export const LeftBar = ({ dataBases }: LeftBar) => {
    return (
        <aside className={styles.leftBar}>
            {
                dataBases &&
                dataBases.map(db => <Db db={db} key={db.dbName} />)
            }
        </aside>
    );
}

interface DbProps {
    db: db
}

const Db = ({ db }: DbProps) => {
    const { dbName, tables } = db;
    
    return (
        <article className={styles.dbContainer}>
            <span className={styles.dbTitle}>{dbName}</span>
            <ul>
                {
                    tables.map(table => <ListItem {...table} key={table.create_date} />)
                }
            </ul>
        </article>
    );
}


const ListItem = ({ table_name, schema_name, }: Table) => {
    const { currentConfig } = useContext(CurrentConfigContext);
    const { setCurrentTable } = useContext(CurrentTableContext);
    function getTable(table: string) {
        window.fetch("http://localhost:8080/getTable", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                table,
                currentConfig,
            })
        })
            .then(res => res.json())
            .then(res => {
                setCurrentTable(res);
            })
            .catch(console.log)
    }
    return (
        <li 
            className={styles.listItem}
            onClick={() => getTable(table_name)}
        >{table_name}</li>
    );
}