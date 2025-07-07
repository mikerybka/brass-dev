import React from 'react';
import Dir from './Dir';
import Schema from './Schema';

export default function Data(props: {
    path: string;
    type: "dir";
    value: { name: string; type: string }[];
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
    switch (props.type) {
        case "dir":
            return <Dir path={props.path} contents={props.value} />
        case "schema":
            return <Schema path={props.path} value={props.value} />
    }
}
