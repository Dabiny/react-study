import React from "react";
import { Component } from 'react';

function App() {
    const name = '리액트';
    return <div className="react">{name}</div>
}
// ===

class App2 extends Component {
    render() {
        const name = 'react';
        return <div className="react">{name}</div>
    }
}

export default App;