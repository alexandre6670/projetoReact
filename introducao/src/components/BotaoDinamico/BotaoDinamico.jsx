function BotaoDinamico (props){
    const estiloBotao = {
        backgroundColor : props.cor,
        color: 'white',
        Padding: '15px',
        margin: '10px',
        border: 'none',
        borderRadius: '15px',
        cursor: 'pointer',
        fontsize: '16px',
    }

    return <button style={estiloBotao}>
        {props.children}
    </button>
}

export default BotaoDinamico