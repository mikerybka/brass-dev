import React, {useState} from 'react';
import List from './List';
import ListItem from './ListItem';
import StringInput from './StringInput';
import Button from './Button';

export default function Schema(props: {
    path: string;
    value: {
        fields: {
            name: string;
            type: string;
        }[];
    }
}) {
    const [error, setError] = useState("")
    const [fields, setFields] = useState(props.value.fields);
    const [saving, setSaving] = useState(false);
    const createField = () => {
        setFields([...fields, { name: "", type: "" }])
    }
    const deleteField = (index: number) => {
        setFields(fields => fields.filter((f, i) => i !== index));
    }
    const setFieldName = (index: number, name: string) => {
        setFields(fields => fields.map((f, i) => i === index ? { ...f, name } : f));
    }
    const setFieldType = (index: number, type: string) => {
        setFields(fields => fields.map((f, i) => i === index ? { ...f, type } : f));
    }
    const save = () => {
        setSaving(true);
        fetch(props.path, {
            method: "PUT",
            body: JSON.stringify({
                fields,
            })
        }).then(res => {
            if (res.ok) {
                setSaving(false);
            } else {
                console.log(res);
                res.text().then(text => {
                    setError(text);
                    console.log(text);
                });
            }
        })
    }
    return <div className=''>
        <List title="Fields" onCreate={createField}>
            {fields.map((f, i) => {
                return <ListItem key={i} onDelete={() => deleteField(i)}>
                    <StringInput label='Name' value={f.name} onChange={name => setFieldName(i, name)} />
                    <StringInput label='Type' value={f.type} onChange={type => setFieldType(i, type)} />
                </ListItem>
            })}
        </List>
        <button className="w-full bg-black text-white p-4 rounded-lg" onClick={save} disabled={saving}>Save</button>
        <div>{error}</div>
    </div>
}
