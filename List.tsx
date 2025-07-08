import React from 'react';
import Button from './Button';

export default function List(props: { title: string; onCreate: () => void; children: React.ReactNode }) {
    return <div className=" p-2">
        <div className="font-bold">{props.title}</div>
        <div className="bg-white">
            {props.children}
            <Button onClick={props.onCreate}>+</Button>
        </div>
    </div>
}
