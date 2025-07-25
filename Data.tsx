import React from 'react';
import Folder from './Folder';
import Schema from './Schema';

export default function Data(props: {
    path: string;
    type: "folder";
    value: {
        files: string[];
        folders: string[];
    };
} | {
    path: string;
    type: "schema";
    value: {
        fields: {
            name: string;
            type: string;
        }[];
    };
}) {
    console.log(props)
    switch (props.type) {
        case "folder":
            return <Folder path={props.path} value={props.value} />
        case "schema":
            return <Schema path={props.path} value={props.value} />
    }
}
