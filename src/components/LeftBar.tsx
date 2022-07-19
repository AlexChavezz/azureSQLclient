import { currentConfig, db, dbs } from '../App';
import styles from '../styles/mainStyles.module.css';

interface LeftBar {
    dataBases: dbs | null
    currentConfig: currentConfig | null
}

export const LeftBar = ({ dataBases, currentConfig }:LeftBar) => {
    console.log(dataBases)
    return (
        <aside className={ styles.leftBar }>
            {
                dataBases &&
                dataBases.map( db => <Db {...db} key={db.dbName}currentConfig={currentConfig}/>)
            }            
        </aside>
    );
}

// interface DbProps {
//     db,
//     currentConfig: currentConfig | null
// }

const Db = ({dbName, tables, currentConfig}:any) => {
    function getTable(table: string){
        window.fetch("http://localhost:8080/getTable", {
            method:'POST', 
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                table,
                currentConfig
            })
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(console.log)
    }
    return (
        <article>
            <span>{dbName}</span>
            {
                tables.map( table => <button onClick={()=>getTable(table.table_name)} key={table.table_name}>{table.table_name}</button>)
            }
        </article>
    );
}