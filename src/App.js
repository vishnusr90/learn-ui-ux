import React from 'react';

import { Brand, CTA, NavBar } from './components';
import { Header, Footer, Blog, Possibility, Features, What } from './containers';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'> 
                <NavBar />
                <Header />
            </div>
            <Brand />
            <What />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App