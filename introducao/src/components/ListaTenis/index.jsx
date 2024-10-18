import React, { useState, useEffect } from "react";
import styles from "../ListaTenis/styles.module.css"

function ListaTenis() {
    const [Tenis, setTenis] = useState({});

    useEffect(() => {

        async function carregarTenis () {
            const resposta = await fetch("https://api-store-do1w.onrender.com/shoes")
            const imagemTenis = await resposta.json();

            setTenis(imagemTenis);
        }
        carregarTenis();
    })


    return (
        <>
        <ul>
            {Tenis.map(Tenis => (
                <li key={Tenis.id}>
                    <img src={Tenis.imagem_url} className="" alt="" />
                </li>
            ))

            }
        </ul>
        
        
        </>
    );

};

export default ListaTenis;