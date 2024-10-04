function Cabecalho(props){
    return (
        <div style={props.padrao ? container:containerAlt}>
            <h1 style={{color:'red'}}>Minha pagina</h1>
            <button className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>button</button>
        </div>
        
    );
}

export default Cabecalho;

const container={
    background:'black', 
    width:'100%', 
    height: 80, 
    paddingBottom: 10, 
    scrollPaddingLeft: 10, 
    paddingRight: 10, 
    borderRight: 5,
};
const containerAlt={
    backgroundColor:'blue',
};