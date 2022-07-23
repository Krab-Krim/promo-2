import React from "react";
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    ShowButton
} from "react-admin";

const PostList = (props) => {

    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="promo"/>
                <TextField source="date.start"/>
                <TextField source="date.end"/>
                <TextField source="use_count"/>
                <TextField source="creator"/>
                <EditButton/>
                <DeleteButton/>
                <ShowButton/>
            </Datagrid>
        </List>
    );
};

export default PostList;