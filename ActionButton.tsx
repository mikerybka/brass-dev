import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
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
    onSuccess: (res: Response, body: string) => void;
}) {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState();
    const [values, setValues] = useState({});

    const setValue = (k, v) => {
        setValues(old => ({ ...old, [k]: v }))
    }

    return <>
        <button className={props.className} onClick={() => setOpen(true)}>
            {props.title}
        </button>
        <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
                </Transition.Child>
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-150"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
                            <Dialog.Title className="text-lg font-bold">{props.title}</Dialog.Title>
                            <Dialog.Description className="mt-2 text-sm text-gray-600">
                                {props.description}
                            </Dialog.Description>
                            {props.fields.map(f => {
                                return <StringInput label={f.name} value={values[f.id]} onChange={v => setValue(f.id, v)} />
                            })}
                            <div>{error}</div>
                            <div className="mt-4 flex justify-end gap-2">
                                <button className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200" onClick={() => setOpen(false)}>Cancel</button>
                                <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700" onClick={() => {
                                    fetch(props.path, {
                                        method: props.method,
                                        body: JSON.stringify(values),
                                    }).then(res => {
                                        res.text().then(body => {
                                            if (res.ok) {
                                                props.onSuccess(res, body)
                                            } else {
                                                setError(body)
                                            }
                                        })
                                    }).catch(err => setError(err));
                                }}>{props.title}</button>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    </>
}
