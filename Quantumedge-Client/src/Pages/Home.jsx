import React from 'react';
import SearchBar from '../Components/SearchBar';
import Jobs from './Jobs';

const Home = () => {
    return (
        <div>
            <SearchBar/>
            <Jobs/>
        </div>
    );
};

export default Home;