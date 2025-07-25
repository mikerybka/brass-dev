import React, { useState } from 'react';
import filepathJoin from './filepathJoin';
import id from './id';
import ActionButton from './ActionButton';
import List from './List';
import ListItem from './ListItem';

export default function Folder(props: { path: string; value: { files: string[]; folders: string[] } }) {
    console.log(props)
    const [value, setValue] = useState(props.value);

    const refresh = () => {
        fetch(props.path, {
            headers: {
                'Accept': 'application/json',
            },
        }).then(res => res.json()).then(d => setValue(d.value));
    }

    return <>
        <List>
            {value.files.map((f, i) => {
                return <ListItem key={i} href={filepathJoin(props.path, id(f))}>
                    {f}
                </ListItem>
            })}
        <ActionButton
            className='p-4 border w-full bg-white'
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
        </List>
    </>
}

function hasSuffix(s: string, suffix: string) {
    return s.endsWith(suffix);
}

function trimSuffix(str, suffix) {
    if (str.endsWith(suffix)) {
      return str.slice(0, -suffix.length);
    }
    return str;
  }
