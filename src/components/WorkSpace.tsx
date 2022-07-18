import styles from '../styles/mainStyles.module.css';
import { Button } from './Button';

export const WorkSpace = () => {
    return (
        <section className={styles.workSpace}>
            <Button
                value="Create Connection"
                onClick={() => console.log("click")}
                className={styles.connectionButton}
            />
        </section>
    );
}