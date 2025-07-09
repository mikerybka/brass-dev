import React from 'react';

export default function ListItem(props: {
    key: string;
    href?: string;
    onDelete?: () => void;
    children: React.ReactNode;
}) {
    if (props.href) {
        return (
            <a href={props.href}>
                <div key={props.key} className="relative p-4 border border-[#ccc] sm:text-4xl">
                    {props.onDelete ?
                        <button
                            onClick={props.onDelete}
                            className="absolute top-2 right-2 bg-transparent border-none text-xl cursor-pointer"
                            aria-label="Close"
                        >
                            X
                        </button>
                        : null}
                    {props.children}
                </div>
            </a>
        );
    }
    return (
        <div key={props.key} className="relative p-4 border border-[#ccc] sm:text-4xl">
            {props.onDelete ?
                <button
                    onClick={props.onDelete}
                    className="absolute top-2 right-2 bg-transparent border-none text-xl cursor-pointer"
                    aria-label="Close"
                >
                    X
                </button>
                : null}
            {props.children}
        </div>
    );
}
