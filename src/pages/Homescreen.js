import React,{Component} from 'react';
import Card from '../components/Card';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';

class Homescreen extends Component {
    constructor(){
        super()
        this.state ={
            robots:[],
            searchField:'',
        }
    }
    componentDidMount(){
        
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({robots:users}));
    }

    onSearchChange = (event) =>{
        
        this.setState({searchField:event.target.value});
    }
    render(){
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
            
            <div className='tc' >
                
                <h1 className='f1'>Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    
                    {filteredRobots &&  filteredRobots.map(robot => 
                        <Card key={robot.id} attributes={robot} />
                    )}
                </Scroll>
            </div>
        )
    }
}

export default Homescreen;