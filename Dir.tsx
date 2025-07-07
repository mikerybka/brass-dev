import React, {useState} from 'react';

export default function Dir(props: { path: string; contents: { name: string; type: string }[] }) {
    const [contents, setContents] = useState(props.contents);
    const [creating, setCreating] = useState(false);

    const refresh = () => {
        fetch(props.path, {
            headers: {
                'Accept': 'application/json',
            },
        }).then(res => res.json()).then(d => setContents(d.value));
    }

    return <>
        <ul>
            {contents.map(c => {
                return <li key={c.name}>
                    <a href={filepathJoin(props.path, id(c.name))}>{c.name}</a>
                </li>
            })}
        </ul>
        <button onClick={() => setCreating(true)}>New</button>
        <CreateModal isOpen={creating} onClose={() => {
            setCreating(false);
            refresh();
        }} />
    </>
}
