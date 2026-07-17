const Slots = ({clase, identificador, valor}) => {
    return (
        <div className={clase} id={identificador}>{valor}</div>
    );
}

export { Slots };