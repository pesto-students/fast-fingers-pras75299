import React, { Component } from 'react';
import HomeCss from './home/home.module.css';
import playIcon from './assets/images/awesome-play.svg';
export default class FormDataComponent extends Component {
    userData;
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeSelect = this.onChangeSelect.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            level: ''
        }
    }

    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }
   
    onChangeSelect(e) {
        this.setState({ level: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        this.setState({
            name: '',
            level: ''
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('data'));

        if (localStorage.getItem('data')) {
            this.setState({
                name: this.userData.name,
                level: this.userData.level

            })
        } else {
            this.setState({
                name: '',
                level: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('data', JSON.stringify(nextState));
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" className={HomeCss.inputFormControl} value={this.state.name} onChange={this.onChangeName} placeholder="Type Your Name" />                        
                <select className={HomeCss.inputFormControl} onChange={this.onChangeSelect} value={this.state.level}>
                    <option>Difficulty Level</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
                <button type="submit" className={HomeCss.btnStartGame}>
                    <img src={playIcon} aria-hidden alt="Play Icon" /> Start Game
                </button>
            </form>
        )
    }
}