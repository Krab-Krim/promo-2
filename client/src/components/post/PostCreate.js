import React from "react";
import {
    Create,
    SimpleForm,
    TextInput,
    DateInput
} from "react-admin";

const PostCreate = (props) => {
    return (
        <Create title="Create a Post" {...props}>
            <SimpleForm>
                <TextInput source="promo"/>
                <DateInput source="date.start"/>
                <DateInput source="date.end"/>
                <TextInput source="use_count"/>
                <TextInput source="creator"/>
            </SimpleForm>
        </Create>
    );
};

export default PostCreate;