import React, {Component} from 'react';
import List  from './list';

class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event)=>{
        this.setState({term: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            term: '',
            items: [...this.state.items, this.state.term]
        });
    }

    handleDelete(itemToDelete) {
        console.log(itemToDelete);
        const newItems = this.state.items.filter((_item)=>{
            return _item != itemToDelete;
        });
        this.setState({items: newItems});
    }

    render(){
        return (
            <div>
                <p>Hello Adetola!</p>
                <form className="Index" onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange}/>
                    <button>Submit</button>
                </form>
                
                <List handleDelete={this.handleDelete.bind(this)} items={this.state.items} />
                

            </div>
        );
    }
}

export default Index;