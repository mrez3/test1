import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

//style sheet
import './css/index.css';

//components
import {Header} from './components/header.js';
import {Container} from './components/Container';
import Footer from './components/Footer.js'


class App extends Component{

    constructor(props){

        super(props);

        this.state = {
            
        }

    }

    render() 
    {
        return (
            <div>
                <Header />
                <Container chartData= {this.state.chartData}/>
                <Footer />
            </div>
        );
    }

}

ReactDOM.render(<App/>, document.querySelector("#root"));