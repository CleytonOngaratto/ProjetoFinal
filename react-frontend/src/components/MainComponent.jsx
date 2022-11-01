
import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { Carousel } from 'bootstrap';
import CarouselComponent from './CarouselComponent';
import ListDestinoComponent from './ListDestinoComponent';





function MainComponent ()  {
  
        return (

    


            

            <div id="mtespecial">
            
                <> 
                <CarouselComponent /> 
                </>
            
                
               

                
                <div className= "row">
                </div>

                <div className="container mt-0" id="slider-container">
                    
                 


                    <div className="col-12 col-md-10 offset-md-1" id="mini-banners">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="card text-center">
                                    <i className="bi bi-person-fill"></i>
                                    <div className="card-body">
                                        <h5 className="card-title primary-color">MultiCe</h5>
                                        <p className="card-text secondary-color">
                                            A melhor página de viajens!
                                        </p>
                                        <a href="/" className="btn btn-dark">MultiCe</a>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card text-center">
                                    <i className="bi bi-exclamation"></i>
                                    <div className="card-body">
                                        <h5 className="card-title primary-color">Carrinho</h5>
                                        <p className="card-text secondary-color">
                                            Veja todos os Destinos adicionados!
                                        </p>
                                        <a href="/destinos" className="btn btn-dark">Carrinho </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="card text-center">
                                    <i className="bi bi-globe"></i>
                                    <div className="card-body primary-color">
                                        <h5 className="card-title primary-color">
                                            Adicionar Destino
                                        </h5>
                                        <p className="card-text secondary-color">
                                            Adicione sua próxima viagem ao carrinho de compras!
                                        </p>
                                        <a href="add-destino/_add" className="btn btn-dark">Adicionar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>





        )
    
    
}

export default MainComponent
