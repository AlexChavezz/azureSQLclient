import styles from '../styles/mainStyles.module.css';
import { Button } from './Button';

interface WorkSpaceProps {
    changeModalState: any
}

export const WorkSpace = ({ changeModalState }:WorkSpaceProps) => {
    return (
        <section className={styles.workSpace}>
            <Button
                value="Create Connection"
                onClick={changeModalState}
                className={styles.connectionButton}
            />
        </section>
    );
}