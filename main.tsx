import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import TitleBar from './TitleBar';
import Data from './Data';
import './tailwind.css'

const data = JSON.parse(document.getElementById('data')!.textContent!);
const path = window.location.pathname;

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(<div className='bg-gray-200 min-h-screen'>
    <TitleBar path={path} />
    <Data path={path} {...data}  />
</div>
);
