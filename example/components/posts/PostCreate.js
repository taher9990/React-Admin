import React from 'react';
import Create from '../../../src/components/material-ui/detail/Create';
import TextInput from '../../../src/components/material-ui/input/TextInput';
import LongTextInput from '../../../src/components/material-ui/input/LongTextInput';

const PostCreate = (props) => (
    <Create title="Create a Post" {...props}>
        <TextInput label="Title" source="title" />
        <TextInput label="Teaser" source="teaser" options={{ multiLine: true }} />
        <LongTextInput label="Body" source="body" />
        <TextInput label="Publication date" source="published_at" />
        <TextInput label="Average note" source="average_note" />
    </Create>
);

export default PostCreate;