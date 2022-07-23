import React from "react";
import {
    Show,
    SimpleShowLayout,
    TextField
} from 'react-admin';

const PostShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id"/>
            <TextField source="promo"/>
            <TextField source="date.start"/>
            <TextField source="date.end"/>
            <TextField source="use_count"/>
            <TextField source="creator"/>
        </SimpleShowLayout>
    </Show>
);

export default PostShow;