import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    TextInput,
    ReferenceInput,
    SelectInput,
    EditButton,
    DeleteButton
} from 'react-admin';

export const UserList = props => {
    const postFilters = [
        <TextInput source="q" label="Search" alwaysOn/>,
        <ReferenceInput source="creator" label="promo" reference="promo">
            <SelectInput optionText="use_count"/>
        </ReferenceInput>
    ];

    return (
        <List {...props} filters={postFilters}>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="username"/>
                <TextField source="password"/>
                <EditButton/>
                <DeleteButton/>
            </Datagrid>
        </List>
    );
};
