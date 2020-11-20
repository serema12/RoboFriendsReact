import React,{useState,useEffect} from 'react';
import Card from '../components/Card';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import robotArrays from '../dataType/robot';

const Homescreen = (props) =>{
    const [robots,setRobots] = useState([]);
    const [searchField,setSearchField] = useState('');
    useEffect(()=>{
        const takerobotData = ()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => setRobots(users));

        }
        takerobotData()
    },[])
    const onSearchChange = (event) =>{
        
        setSearchField(event.target.value);
        setRobots(robotArrays.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
            
        }))
    }
    
    return (
        
        <div className='tc' >
            
            <h1 className='f1'>Robo Friends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                
                {robots &&  robots.map(robot => 
                    <Card key={robot.id} attributes={robot} />
                )}
            </Scroll>
        </div>
    )
}

export default Homescreen;