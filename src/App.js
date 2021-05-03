import React , {Component} from 'react';

import './App.css';


var marked = require('../node_modules/marked/lib/marked')

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            markdown : ""
        }
        this.markdownChange = this.markdownChange.bind(this);
    }

    markdownChange(event){
        this.setState({
            markdown : event.target.value
        });
    }

    render(){
        
        return(
            <div>
                <div className="App container">
                    <div className="row py-5 ">
                        <div className="input" >
                            <header>Editor</header>
                            <textarea id="editor" type="text" componentClass="textarea" placeholder="Enter Markdown" value={this.state.markdown} onChange={this.markdownChange}></textarea>
                        </div>
                        
                        <div className="output">
                            <header>Previewer</header>
                            <div id="preview" dangerouslySetInnerHTML = {{__html : marked(this.state.markdown)}}></div>                            
                        </div>
                    </div>
                </div>
            </div>
            
        );
    
    }
}

export default App;