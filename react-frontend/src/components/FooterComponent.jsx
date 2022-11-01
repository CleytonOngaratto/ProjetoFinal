import React, { Component } from 'react';

class FooterComponent extends Component {
constructor(props) {
    super(props)

    this.state = {
             
    }
}

    render() {
        return (

            <footer className="boder-top  text-muted bg-light bottom">
                <div className="container">
                    <div className="row py-3">
                        <div className="col-12 col-md-4 text-center text-md-left">
                            &copy; 2022 - MultiCe Agência de Viagens
                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <a href="#" className="text-decoration-none text-dark">Política de privacidade </a>
                        </div>
                        <div className="col-12 col-md-4 text-center text-md-right">
                            <a href="#" className="text-decoration-none text-dark">Administrar</a>
                        </div>
                    </div>
                </div>

            </footer>

        );
    }
}

export default FooterComponent;
