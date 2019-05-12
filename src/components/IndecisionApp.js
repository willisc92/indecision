import React from 'react';
import Action from './Action.js';
import AddOption from './AddOption.js';
import Header from './Header.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js'; 

// pull the state out of the constructor
// convert 4 even handlers to class properties using arrow functions
// delete the constructor completely

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]; 
        this.setState(() => ({selectedOption: option}));
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] })); // syntax for implicitly returning an object
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({selectedOption: undefined}));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if (options) {
                this.setState(() => ({options: options}));
            }
        } catch (e) {
            // Do nothing.
        }
    }   // Lifecycle method: Gets fired when the component is mounted to DOM.

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length != this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }   // Lifecycle method: Gets fired when the component state changes.

    componentWillUnmount() {
        console.log("Component will unmount.");
    }   // Lifecycle method: Gets fired right before component goes away from DOM.

    render() {
        const subtitle = 'Put your life in the hands of a computer';
    
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className = 'container'>
                    <Action 
                        hasOptions = {this.state.options.length > 0}
                        handlePick = {this.handlePick}                
                    />
                    <div className = "widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption = {this.handleAddOption}
                        />
                    </div>
 
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}


