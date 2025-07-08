import React from 'react';
import Button from './Button';

export default function List(props: { title: string; onCreate: () => void; children: React.ReactNode }) {
    return <div className="bg-gray-200">
        <div>{props.title}</div>
        <div className="bg-white m-2">
            {props.children}
            <Button onClick={props.onCreate}>+</Button>
        </div>
    </div>
}
