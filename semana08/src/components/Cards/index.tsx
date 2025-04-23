import formatCurrency from '@/utils/formatCurrency';
import styles from './styles.module.css'
import { IconType } from 'react-icons'


type cardsProps = {
    icon : IconType;
    color: string
    title: string;
    value: number;
} 

export default function Cards({icon: Icon, title, value, color} : cardsProps) {
    return (
        <div className={styles.card}>
            <header className={styles.cardHeader}>
                <h1>{title}</h1>
                <Icon size={50} color={color}/>
            </header>
            <strong>{formatCurrency(value)}</strong>
        </div>
    )

}