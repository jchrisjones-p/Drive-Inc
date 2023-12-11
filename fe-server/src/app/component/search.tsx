import { Button } from 'antd'
import styles from './search.module.scss'

export const EVSearch = ({}) => {
    return (
        <Button className={styles.button}>Search &nbsp;
            <span style={{ transform: "rotate(30deg)"}}>&#9906;</span>
        </Button>
    )
}