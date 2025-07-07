import React, {useState} from 'react';
import { Dialog } from '@headlessui/react';
import filepathJoin from "./filepathJoin";
import StringInput from './StringInput';

export default function CreateModal({ path, isOpen, onClose }) {
    const [name, setName] = useState("")
    const [error, setError] = useState("")

    return (
        <Dialog open={isOpen} onClose={onClose} className="dialog-overlay">
            <div className="dialog-backdrop" aria-hidden="true" />
            <div className="dialog-container">
                <Dialog.Panel className="dialog-panel">
                    <Dialog.Title className="dialog-title"></Dialog.Title>
                    <Dialog.Description className="dialog-description">
                    </Dialog.Description>
                    <StringInput label='Name' value={name} onChange={setName} />
                    <div>{error}</div>
                    <button onClick={() => {
                        const p = filepathJoin(path, name)
                        fetch(p, {
                            method: "PUT",
                            body: JSON.stringify({ fields: [] }),
                        }).then(res => {
                            if (res.ok) {
                                window.location.pathname = p
                            } else {
                                res.text().then(t => setError(t))
                            }
                        }).catch(err => setError(err));
                    }}>Create</button>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}
