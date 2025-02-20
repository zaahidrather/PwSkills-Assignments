import './App.css';
import Person from './Person.js';
import Button from './Button.js';
import Header from './Header.js';
import List from './List.js';

function App() {
    const clickHandler = () => {
        console.log("Button clicked!");
        
    }
    const list = ['Apple', 'Mango', 'Pear', 'Grapes'];

    return (
        <div className="App">
            <Header title="React App" />
            <Person name='Zahid' age='27' />
            <List items={list} />
            <Button text='Click here' onClick={clickHandler} />
        </div>
    );
}

export default App;
