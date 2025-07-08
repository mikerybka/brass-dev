import React from 'react';

export default function List(props: { title?: string; onCreate?: () => void; children: React.ReactNode }) {
    return <div className=" p-2">
        {props.title ?
            <div className="font-bold">{props.title}</div>
            : null}
        <div className="bg-white">
            {props.children}
            {props.onCreate ?
                <button className="w-full p-4" onClick={props.onCreate}>+</button>
                : null}
        </div>
    </div>
}
