'use client'
import styles from './styles.module.css'
import Image from 'next/image'
import Logo from '@/assets/logo.webp'
import ModalNewEntry from '../ModalNewEntry'
import { useState } from 'react'

export default function Header() {

    const [openModal, setOpenModal] = useState<boolean>(false);

    function handleClose() {
        setOpenModal(false);
    }

    function handleOpen() {
        setOpenModal(true);
    }

    return (
        <section className={styles.headerComponent}>
            <ModalNewEntry open = {openModal} handleClose={handleClose}/>
            <header>
                <Image src={Logo} alt='Logo no topo indicando uma pilha de dinheiro' className={styles.logo}/>
                <button className={styles.headerButton} onClick={handleOpen}>Novo lançamento</button>
            </header>
        </section>
    )
}