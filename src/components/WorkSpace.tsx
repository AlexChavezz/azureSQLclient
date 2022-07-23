import { useContext, useEffect, useState } from 'react';
import { CurrentTableContext } from '../context/CurrentTableContext';
import { WorkSpaceProps } from '../interfaces/interfaces';
import styles from '../styles/mainStyles.module.css';
import { Button } from './Button';
// import RemoveIcon from '../assets/delete_FILL0_wght400_GRAD0_opsz48.svg';
// import EditIcon from '../assets/edit_note_FILL0_wght400_GRAD0_opsz48.svg';



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
    useEffect(() => {
        if (currentTable) {
            setHeaders(Object.keys(currentTable[0]));
        }
    }, [currentTable])
    if (!currentTable) {
        return <>loading</>
    }
    return (
        <>
        <section>
            <Button onClick={() => console.log('make something')} className={styles.addRow} value={"Insert Row"} />
            <Button onClick={() => console.log('make something')} className={styles.clearButton} value={"Clear"} />
        </section>

            <table className={styles.table}>
                <thead className={styles.thead}>
                    <tr className={styles.theadRow}>
                        {
                            headers?.map(colName => <th key={colName} className={styles.theadTitle}>{colName}</th>)
                        }
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {
                        currentTable?.map(row => <TableItem {...row} headers={headers} />)
                    }
                </tbody>
            </table>
        </>
    );
}

const TableItem = (props: any) => {
    const { headers } = props;
    return (
        <tr className={styles.row}>
            {
                headers.map((col: string) =>
                    <td key={col}>{props[col]}</td>
                )

            }
            <td className={styles.actions}>
                <Button
                    value='Remove'
                    onClick={() => console.log("remove action")}
                    className={styles.removeBtn + " " + styles.btnAction}
                />
                <Button
                    value='Edit'
                    onClick={() => console.log("edit action")}
                    className={styles.editBtn + " " + styles.btnAction}
                />
            </td>
        </tr>
    );
}