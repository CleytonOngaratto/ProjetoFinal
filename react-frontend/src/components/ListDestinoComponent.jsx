import React, { Component } from 'react'
import DestinoService from '../services/DestinoService'

class ListDestinoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                destinos: []
        }

        this.addDestino = this.addDestino.bind(this);
        this.editDestino = this.editDestino.bind(this);
        this.deleteDestino = this.deleteDestino.bind(this);

    }



    deleteDestino(id){
        DestinoService.deleteDestino(id).then( res => {
            this.setState({destinos: this.state.destinos.filter(destino => destino.id !== id)});
        });
    }

    editDestino(id){
        this.props.history.push(`/add-destino/${id}`);
    }


    componentDidMount(){
        DestinoService.getDestinos().then((res) => {
            this.setState({ destinos: res.data});
        });
    }

    addDestino(){
        this.props.history.push('/add-destino/_add');
    }

    render() {
        return (
            <div>
                <br></br> <br></br>
                 <h2 className="text-center">Carrinho de Compras</h2>
                 <div className = "row">
                    <button className="btn btn-dark" onClick={this.addDestino}>Adicionar Novo Destino</button>
                 </div>
            
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Origem</th>
                                    <th> Destino</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.destinos.map(
                                        destino => 
                                        <tr key = {destino.id}>
                                             <td> { destino.origem} </td>   
                                             <td> {destino.destino}</td>
                                             <td>
                                                <button onClick={ () => this.editDestino(destino.id)} className="btn btn-dark" >Atualizar</button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDestino(destino.id)} className="btn btn-dark">Deletar </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListDestinoComponent