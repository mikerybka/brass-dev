import React from 'react';
import popPath from './popPath';

export default function TitleBar(props: {
    path: string;
}) {
    return <div>
        <div style={{fontWeight: "bold"}}>{props.path}</div>
        <button onClick={() => {
            fetch(props.path, {
                method: "DELETE",
            }).then(res => {
                if (res.ok) {
                    window.location.pathname = popPath(props.path)
                } 
            })
        }}>Delete</button>
    </div>
}
