import React, { useState } from 'react';
import filepathJoin from './filepathJoin';
import id from './id';
import ActionButton from './ActionButton';
import List from './List';
import ListItem from './ListItem';
import StringInput from './StringInput';


export default function Dir(props: { path: string; contents: { name: string; type: string }[] }) {
    const [contents, setContents] = useState(props.contents);

    const refresh = () => {
        fetch(props.path, {
            headers: {
                'Accept': 'application/json',
            },
        }).then(res => res.json()).then(d => setContents(d.value));
    }

    return <>
        <List>
            {contents.map((c, i) => {
                return <ListItem key={i} href={filepathJoin(props.path, id(c.name))}>
                    {c.name}
                </ListItem>
            })}
        </List>
        <ul>
            {contents.map(c => {
                return <li key={c.name}>
                    <a href={filepathJoin(props.path, id(c.name))}><div className="border p-2">
                        {c.name}
                    </div>
                    </a>
                </li>
            })}
        </ul>
        <ActionButton
            className='p-4 border w-full'
            title='New'
            description=''
            fields={[{
                id: "id",
                name: "ID",
            }]}
            method='POST'
            path={props.path}
            onSuccess={(res, body) => {
                const l = res.headers.get("Location")
                if (l) {
                    window.location.href = l
                } else {
                    refresh();
                }
            }}
        />
    </>
}
