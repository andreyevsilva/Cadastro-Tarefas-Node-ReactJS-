import React from 'react'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
        <a className="navbar-brand" href="#"><i className="fa fa-calendar-check-o"></i> Tarefa</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Alterna navegação">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/todos">Tarefa <span className="sr-only">(Página atual)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">Sobre</a>
                </li>
            </ul>
        </div>
    </nav>
)

