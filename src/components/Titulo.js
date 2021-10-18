import React from 'react';
import { Link } from 'react-router-dom';

const Titulo = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <span className="navbar-toggler-icon"></span>
            <Link className="navbar-brand" to="/">
                <img src="leilao.png" alt="Logo do Leilão" width="40" />
                Leilão Beneficente
            </Link>
        </nav>
    );
}

export default Titulo;