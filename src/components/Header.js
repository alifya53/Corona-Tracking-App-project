import React from 'react'
import logo from './logo.jpg';
export const Header = () => {
    return (
        <div>
        <h1>Bootcamp Project 2 Corona Tracking App</h1>
        <h4>Github<a href="www.github.com/alifya53/Corona-Tracking-app/">Repo</a></h4>
        <div className="log"><img src={logo} alt="Logo" /></div>
        </div>
    )
}