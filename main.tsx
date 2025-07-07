import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import TitleBar from './TitleBar';
import Data from './Data';
import './dialog.css'

const data = JSON.parse(document.getElementById('data')!.textContent!);
const path = window.location.pathname;

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<div>
    <TitleBar path={path} />
    <Data path={path} {...data}  />
</div>
);
