import * as React from 'react';
import authProvider from './authProvider';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';
import {Admin, Resource} from 'react-admin';
import {UserList} from './components/user/UserList';
import Dashboard from './tables/Dashboard';
import PostEdit from "./components/post/PostEdit";
import PostCreate from "./components/post/PostCreate";
import PostShow from "./components/post/PostShow";
import PostList from "./components/post/PostList";
import UserEdit from "./components/user/UserEdit";
import UserCreate from "./components/user/UserCreate";
import myDataProvider from "./myDataProvider";
import {fetchJson as httpClient} from './httpClient'

const dataProvider = myDataProvider('http://localhost:3000', httpClient);

const App = () => (
    <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        dashboard={Dashboard}
    >
        <Resource
            name="promo"
            icon={PostIcon}
            list={PostList}
            edit={PostEdit}
            show={PostShow}
            create={PostCreate}
        />
        <Resource
            name="users"
            icon={UserIcon}
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
        />
    </Admin>
);
export default App;
