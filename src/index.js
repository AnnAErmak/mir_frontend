import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import {PageMain} from "./components/pages/page-main";
import {PageAuth} from "./components/pages/page-auth";
import {PageReg} from "./components/pages/page-reg";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <PageAuth/>
        <PageReg/>
    </div>
);

