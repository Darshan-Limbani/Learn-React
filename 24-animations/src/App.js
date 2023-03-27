import React, {Component} from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import {Transition} from "react-transition-group";

class App extends Component {

    state = {
        modelIsOpen: false
    }

    showModal = () => {
        this.setState({
                modelIsOpen: true
            }
        )
    }
    closeModal = () => {
        this.setState({
                modelIsOpen: false
            }
        )
    }

    render() {
        return (
            <div className="App">
                <h1>React Animations</h1>
                <Transition in={this.state.modelIsOpen} timeout={300} mountOnEnter unmountOnExit>
                    {state => (<Modal show={state} closed={this.closeModal}/>)}
                </Transition>

                {this.state.modelIsOpen ? < Backdrop show={this.state.modelIsOpen}/> : null}

                <button className="Button" onClick={this.showModal}> Open Modal</button>
                <h3>Animating Lists</h3>
                <List/>
            </div>
        );
    }
}

export default App;
