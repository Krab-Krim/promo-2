import * as React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton
} from 'react-admin';

export const UserList = props => {
    return (
        <List {...props}>
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
