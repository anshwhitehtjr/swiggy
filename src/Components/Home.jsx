import React from 'react';
import Menu from './HomeComponents/Menu';

const Home = ({ showAlert }) => {

    const handleAlert = () => {
        showAlert('Hello, World!', 'green');
    };

    return (
        <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <h1>Hello, World!</h1>
                <button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700" onClick={ handleAlert }>Show Alert</button>
            </div>
            <Menu />
        </main>
    );
};

export default Home;
