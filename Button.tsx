import React from 'react';

export default function Button(props: {
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}) {
    return <button onClick={props.onClick} disabled={props.disabled}>{props.children}</button>
}
