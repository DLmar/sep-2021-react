import React from 'react';
import './components/index'
import Cars from "./components/Cars/Cars";
import Form from "./components/Form/Form";


const App = () => {
    return (
        <div>
            <Form/>
            <Cars/>
        </div>
    );
};

export default App;