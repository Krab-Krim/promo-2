import React from "react";
import {
    Edit,
    SimpleForm,
    TextInput
} from "react-admin";

const PostEdit = (props) => {
    return (
        <Edit title="Edit Post" {...props}>
            <SimpleForm>
                <TextInput disabled source="id"/>
                <TextInput source="promo"/>
                <TextInput disabled source="date.start"/>
                <TextInput disabled source="date.end"/>
                <TextInput disabled source="use_count"/>
                <TextInput disabled source="creator"/>
            </SimpleForm>
        </Edit>
    );
};

export default PostEdit;