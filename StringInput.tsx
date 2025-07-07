import React from 'react';
export default function StringInput(props: {
    label: string;
    value: string;
    onChange: (s: string) => void;
}) {
    return <div>
        <div>{props.label}:</div>
        <input type='text' value={props.value} onChange={e => props.onChange(e.target.value)} />
    </div>
}