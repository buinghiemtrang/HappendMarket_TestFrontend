import React from 'react'

import { BrowserRouter ,Route } from 'react-router-dom'

// import Routes from './routes/Routes'

import Home from './pages/Home'

import Header from './components/Header'
import Footer from './components/Footer'


function App() {
    return (
        <BrowserRouter>
            <Route render={props =>(
                <div>
                    <Header {...props}/>
                    <div className="main">
                        {/* <Routes /> */}
                        <Home/>
                    </div>
                    <Footer />
                </div>
            )}/>
        </BrowserRouter>
    );
}

export default App;

