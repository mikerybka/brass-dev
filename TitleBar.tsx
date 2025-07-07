import React from 'react';
import popPath from './popPath';
import ActionButton from './ActionButton';

export default function TitleBar(props: {
    path: string;
}) {
    return <div className="border flex justify-between">
        <div className="text-xl font-bold">{props.path}</div>
        <ActionButton className='border' title='DELETE' description='Delete this object.' fields={[]} method='DELETE' path={props.path} onSuccess={(body: string)=> {
            console.log(body)
        }}/>
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
