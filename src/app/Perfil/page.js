"use client"
import style from './page.module.css'
import React, { useState, useEffect } from 'react'
import '../globals.css'
import Navbar from '@/components/Navbar'
import Cards from '@/components/Cards/Cards'

const url = 'http://localhost:3000/diagnosticos';

const menuOpt = ['exames', 'agendamentos']

const Perfil = () => {
    const [info, setInfo] = useState([])
    const [menu, setMenu] = useState()

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);
            const data = await res.json();

            setInfo(data)
        }
        fetchData()
    }, [])

    const menuSelect1 = () => {
        setMenu(menuOpt[0])
    }

    const menuSelect2 = () => {
        setMenu(menuOpt[1])
    }

    return (
        <main className={'main'}>
            <Navbar perfillogado={true} />

            <section className={style.mainSection}>
                <div className={style.sideMenu}>
                    <ul>
                        <li onClick={menuSelect1}>
                            Exames
                        </li>
                        <li onClick={menuSelect2}>
                            Agendamentos
                        </li>
                    </ul>
                </div>

                <div className={style.rightSideMenu}>
                    {menu == 'exames' &&
                        info.map((resultados) => (
                            <section>
                                <h2>Lista de exames</h2>
                            <div className={style.diagnosticBar} key={resultados.id}>
                                <div className={style.diagnosticInfo}>

                                    {info != '' && <p>Data: {resultados.data}</p>}
                                    {info != '' && <p>Exame: {resultados.exame}</p>}
                                    {info != '' && <p>Diagnostico: {resultados.diagnostico}</p>}

                                </div>
                            </div>
                            </section>
                        ))}
                </div>
            </section>

        </main>
    )
}

export default Perfil