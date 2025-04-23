
import styles from './styles.module.css'
import Cards from '../Cards'
import { PiArrowCircleDown, PiArrowCircleUp } from 'react-icons/pi'

import { MdOutlineAttachMoney } from 'react-icons/md'


export default function Summary() {
    return (
        <section className={styles.summaryComponent}>
            <section className={styles.cardArea}>
                <div className={styles.greenCard}>
                    <Cards icon={PiArrowCircleUp} color='green' title='Entradas' value={20000} />
                </div>
                <div className={styles.redCard}>
                    <Cards icon={PiArrowCircleDown} color='red' title='Saídas' value={10000} />
                </div>
                <div className={styles.totalCard}>
                    <Cards icon={MdOutlineAttachMoney} color='white' title='Total' value={10000} />
                </div>
            </section>
        </section>
    )
}