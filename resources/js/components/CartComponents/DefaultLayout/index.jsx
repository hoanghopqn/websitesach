import React from 'react'; 
import './style.scss'
import HeaderComponent from '../../Header/HeaderComponent';

function DefaultLayout({ children }) {
    return (
        <>
            <HeaderComponent />
               {children}
        </>
    );
}

export default DefaultLayout;