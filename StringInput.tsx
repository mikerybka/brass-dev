import React from 'react';
export default function StringInput(props: {
    label: string;
    value: string;
    onChange: (s: string) => void;
}) {
    return <div className="w-full max-w-sm mx-auto mt-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
            {props.label}
        </label>
        <input type='text' className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={props.value} onChange={e => props.onChange(e.target.value)} />
    </div>
}