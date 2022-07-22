import { useContext, useEffect, useState } from 'react';
import { CurrentTableContext } from '../context/CurrentTableContext';
import { WorkSpaceProps } from '../interfaces/interfaces';
import styles from '../styles/mainStyles.module.css';
import { Button } from './Button';

export const WorkSpace = ({ changeModalState, currentTable }: WorkSpaceProps) => {
    return (
        <section className={styles.workSpace}>
            {
                currentTable ?
                    (
                        <MainTable />
                    ) : (
                        <Button
                            value="Create Connection"
                            onClick={changeModalState}
                            className={styles.connectionButton}
                        />
                    )
            }
        </section>
    );
}

export const MainTable = () => {
    const { currentTable } = useContext(CurrentTableContext);
    const [headers, setHeaders] = useState<string[] | []>([]);
    useEffect(()=>{
        if(currentTable){
            setHeaders(Object.keys(currentTable[0]));
        }
    },[])
    console.log(currentTable);
    console.log(headers);
    if(!currentTable){
        return <>loading</>
    }
    return (
        <table>
            <thead>
                <tr>
                    {
                        headers?.map( colName => {
                            console.log(colName);
                            return <th key={colName}>{colName}</th>
                    } )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    currentTable?.map(row => <TableItem {...row} headers={headers}/>)
                }
            </tbody>
        </table>
    );
}


const TableItem = (props:any) => {
    console.log(props)
    const {headers} = props;
    
    return (
        <tr>
            {
                headers.map( col => <td key={col}>{props[col]}</td>)
            }
            {/* <td>{id}</td>
            <td>{age}</td>
            <td>{email}</td>
            <td>{name}</td> */}
        </tr>
    );
}