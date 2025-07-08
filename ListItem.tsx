import React from 'react';
export default function ListItem(props: {
    key: string;
    onDelete: () => void;
    children: React.ReactNode;
}) {
    return (
        <div key={props.key} style={{ position: 'relative', padding: '1rem', border: '1px solid #ccc' }}>
            <button
                onClick={props.onDelete}
                style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                    background: 'transparent',
                    border: 'none',
                    fontSize: '1.25rem',
                    cursor: 'pointer',
                }}
                aria-label="Close"
            >
                X
            </button>
            {props.children}
        </div>
    );
}
