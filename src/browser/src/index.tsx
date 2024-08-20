import React, {createElement} from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/sport_style.css';
import {
    App,
    Search,
    Detail as BrowserDetail,
    createSearchLoader,
    createDetailLoader,
    searchUtils,
    SearchParams
} from '@knaw-huc/browser-base-react';
import {createHashRouter, RouteObject, RouterProvider} from 'react-router-dom';
import Facets from "./components/facets";
import ListItem from "./components/listItem";
import {Detail} from "./components/detail";
import {BASE_URL} from "./misc/config";

const header = <></>
const searchLoader = createSearchLoader(searchUtils.getSearchObjectFromParams, BASE_URL + '/browse', 10);
const title = 'Databank Sport';
const detailLoader = createDetailLoader(id => `${BASE_URL}/sport?rec=${id}`);
const routeObject: RouteObject = {
    path: '/',
    element: <App header={header}/>,
    children: [
        {
            index: true,
            loader: async ({request}) => searchLoader(new URL(request.url).searchParams),
            element: <Search title={title} pageLength={30} withPaging={true}
                             hasIndexPage={false} showSearchHeader={false} updateDocumentTitle={false}
                             searchParams={SearchParams.PARAMS} FacetsComponent={Facets} ResultItemComponent={ListItem}/>
        }, {
            path: '/detail/:id',
            loader: async ({params}) => detailLoader(params.id as string),
            element: <BrowserDetail title={title} updateDocumentTitle={false} DetailComponent={Detail}/>
        },
    ]
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={createHashRouter([routeObject])}/>
    </React.StrictMode>
);
