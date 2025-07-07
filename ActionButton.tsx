import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import StringInput from "./StringInput";

export default function ActionButton(props: {
    className: string;
    title: string;
    description: string;
    fields: {
        id: string;
        name: string;
    }[];
    method: string;
    path: string;
    onSuccess: (body: string) => void;
}) {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState();
    const [values, setValues] = useState({});

    const setValue = (k, v) => {
        setValues(old => ({...old, [k]: v}))
    }

    return <>
        <Dialog open={open} onClose={() => setOpen(false)} className="dialog-overlay">
            <div className="dialog-backdrop" aria-hidden="true" />
            <div className="dialog-container">
                <Dialog.Panel className="dialog-panel">
                    <Dialog.Title className="dialog-title">{props.title}</Dialog.Title>
                    <Dialog.Description className="dialog-description">
                        {props.description}
                    </Dialog.Description>
                    {props.fields.map(f => {
                        return  <StringInput label={f.name} value={values[f.id]} onChange={v => setValue(f.id, v)} />
                    })}
                    <div>{error}</div>
                    <button onClick={() => setOpen(false)}>Cancel</button>
                    <button onClick={() => {
                        fetch(props.path, {
                            method: props.method,
                            body: JSON.stringify(values),
                        }).then(res => {
                            res.text().then(body => {
                                if (res.ok) {
                                    props.onSuccess(body)
                                } else {
                                   setError(body)
                                }
                            })
                        }).catch(err => setError(err));
                    }}>{props.title}</button>
                </Dialog.Panel>
            </div>
        </Dialog>
        <button className={props.className} onClick={() => setOpen(true)}>
            {props.title}
        </button>
    </>
}
