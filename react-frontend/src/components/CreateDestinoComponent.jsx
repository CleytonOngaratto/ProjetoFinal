import React, { Component } from 'react'
import DestinoService from '../services/DestinoService';

class CreateDestinoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            origem: '',
            destino: '',
        }
        this.changeOrigemHandler = this.changeOrigemHandler.bind(this);
        this.changeDestinoHandler = this.changeDestinoHandler.bind(this);
        this.saveOrUpdateDestino = this.saveOrUpdateDestino.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '-1'){
            return
        }else{
            DestinoService.getDestinoById(this.state.id).then( (res) =>{
                let destino = res.data;
                this.setState({origem: destino.origem,
                    destino: destino.destino
                });
            });
        }        
    }
    saveOrUpdateDestino = (e) => {
        e.preventDefault();
        let destino = {origem: this.state.origem, destino: this.state.destino};
        console.log('destino => ' + JSON.stringify(destino));

        // step 5
        if(this.state.id === '_add'){
            DestinoService.createDestino(destino).then(res =>{
                this.props.history.push('/destinos');
            });
        }else{
            DestinoService.updateDestino(destino, this.state.id).then( res => {
                this.props.history.push('/destinos');
            });
        }
    }
    
    changeOrigemHandler= (event) => {
        this.setState({origem: event.target.value});
    }

    changeDestinoHandler= (event) => {
        this.setState({destino: event.target.value});
    }


    cancel(){
        this.props.history.push('/destinos');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Preencha os dados da Viagem:</h3>
        }else{
            return <h3 className="text-center">Update Destino</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <br/>
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Origem: </label>
                                            <input placeholder="Digite a Cidade de Origem" name="origem" className="form-control" 
                                                value={this.state.origem} onChange={this.changeOrigemHandler}/>
                                        </div>
                                        <br/>
                                        <div className = "form-group">
                                            <label> Destino: </label>
                                            <input placeholder="Digite a Cidade de Destino" name="destino" className="form-control" 
                                                value={this.state.destino} onChange={this.changeDestinoHandler}/>
                                        </div>
                                        <br/>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateDestino}>Salvar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateDestinoComponent