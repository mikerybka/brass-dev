import React from 'react';
import Button from './Button';

export default function List(props: { title: string; onCreate: () => void; children: React.ReactNode }) {
    return <div>
        <div>{props.title}</div>
        {props.children}
        <Button onClick={props.onCreate}>+</Button>
    </div>
}
