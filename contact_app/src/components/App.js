import React from 'react';

const TodoList = () =>{

    const items = ['Drink Coffee', 'Build Awesome App'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

const AppHeader = () => {
    return(
        <h1>My Todo List</h1>
    );
};

const SearchPanel =() =>{
    return(
        <input placeholder="search" />
    );
};

const App = () =>{

    const loginBox = <span>Log in please</span>;
    return(
        <div>
            {loginBox}
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    );
};
export default App;