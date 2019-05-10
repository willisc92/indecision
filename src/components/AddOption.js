import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined,
    };
   
    handleAddOption = (e) => {    // e to find referenced event
        e.preventDefault();  // prevents default behaviour of rerendering entire page. 

        const option = e.target.elements.option.value.trim(); // elements in form referenced by name 
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error: error}));
        
        if (!error) {
            e.target.elements.option.value = '';
        }
    };
    
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.handleAddOption}> 
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}