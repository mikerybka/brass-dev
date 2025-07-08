import React from 'react';

export default function List(props: { title: string; onCreate: () => void; children: React.ReactNode }) {
    return <div className=" p-2">
        <div className="font-bold">{props.title}</div>
        <div className="bg-white">
            {props.children}
            <button className="w-full p-4" onClick={props.onCreate}>+</button>
        </div>
    </div>
}
