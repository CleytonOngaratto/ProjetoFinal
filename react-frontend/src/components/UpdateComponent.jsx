import React, { Component } from 'react';
import DestinoService from '../services/DestinoService';

class UpdateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            origem: '',
            destino: '',

        }

        this.changeOrigemHandler = this.changeOrigemHandler.bind(this);
        this.changeDestinoHandler = this.changeDestinoHandler.bind(this);
        this.updateDestino = this.updateDestino.bind(this);
    }

    componentDidMount() {
        DestinoService.getDestinoById(this.state.id).then( (res) =>{
            let destino = res.data;
            this.setState({origem: destino.origem,
                destino: destino.destino,
            });
        });
    }
    

    updateDestino = (e) => {
        e.preventDefault();
        let destino = { origem: this.state.origem, destino: this.state.destino };
        console.log('destino => ' + JSON.stringify(destino));
        console.log('id => ' + JSON.stringify(this.state.id));
        DestinoService.updateDestino(destino, this.state.id).then( res => {
            this.props.history.push('/destinos');
        });
    }

    changeOrigemHandler = (event) => {
        this.setState({ origem: event.target.value });
    }
    changeDestinoHandler = (event) => {
        this.setState({ destino: event.target.value });
    }
    cancel(){
        this.props.history.push('/destinos');
    }

    render() {
        return (

            <div className="container col-8 bg-white p-2 text-dark bg-opacity-25">

                <div className="bg-dark text-white p-4">
                    <h4>Atualizar Viagem!</h4>


                    <form>
                        <div className=" form-group mb-3 ">
                            <label for="text" className="form-label">Origem</label>
                            <input placeholder="Cidade de Embarque" name="origem" className="form-control"
                                value={this.state.origem} onChange={this.changeOrigemHandler} />
                        </div>
                        <div className=" form-group mb-3 ">
                            <label for="text" className="form-label">Destino</label>
                            <input placeholder="Cidade de Desembarque" name="destino" className="form-control"
                                value={this.state.destino} onChange={this.changeDestinoHandler} />
                        </div>
            
                        <button className="btn btn-dark border-white" onClick={this.updateDestino}>Salvar Atualização</button>
                        <button className="btn btn-dark" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                    </form>

                </div>
            </div>
                

                
           





        );
    }
}


export default UpdateComponent;