// import { fetchUtils } from 'react-admin';
// import simpleRestProvider from "ra-data-simple-rest";
//
// const apiUrl = 'http://localhost:3000';
// const httpClient = fetchUtils.fetchJson;
// const dataProvider = simpleRestProvider(apiUrl, httpClient);
// const customDataProvider = {
//     ...dataProvider,
//     getList: (resource) =>
//         httpClient(`${apiUrl}/${resource}`, {
//             method: "GET",
//         }).then(({ json }) => {
//             return ({ data: json, total: json.length })
//         }),
// };
// export default customDataProvider;