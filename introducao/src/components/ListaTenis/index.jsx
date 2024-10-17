import React, { useState, useEffect } from "react";
import styles from "../ListaTenis/styles.module.css"

function ListaTenis() {
    const [Tenis, setTenis] = useState({});

    useEffect(() => {

        async function carregarTenis () {
            const resposta = await fetch("https://api-store-do1w.onrender.com/shoes")
            const imagemTenis = resposta.json();

            setTenis(imagemTenis);
        }
        carregarTenis();
    })


    return (
        <>
        <ul>
            {Tenis.map(tenis => (
                <li
                >
                    <img src={tenis.imagem_url} className="" alt="" />
                </li>
            ))

            }
        </ul>
        
        
        </>
    );

};

export default ListaTenis;