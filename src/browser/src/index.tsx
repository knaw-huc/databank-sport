import React, {createElement} from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './assets/css/sport_style.css';
import {
    App,
    PageHeader,
    Search,
    Detail as BrowserDetail,
    createSearchLoader,
    createDetailLoader,
    searchUtils,
    SearchParams
} from '@knaw-huc/browser-base-react';
import {createBrowserRouter, RouteObject, RouterProvider} from 'react-router-dom';
import Facets from "./components/facets";
import ListItem from "./components/listItem";
import {Detail} from "./components/detail";
import {Header} from "./components/pageHeader";
import {Literatuur} from "./components/literatuur";
import {Colofon} from "./components/colofon";
import {DatabaseInfo} from "./components/databaseInfo";
import {Gymnastiek} from "./components/sport/gymnastiek";
import {Hockey} from "./components/sport/hockey";
import {Korfbal} from "./components/sport/korfbal";
import {Schaken} from "./components/sport/schaken";
import {Tennis} from "./components/sport/tennis";
import {Voetbal} from "./components/sport/voetbal";
import {Home} from "./components/home";
import {Inleiding} from "./components/inleiding";
import {BASE_URL} from "./misc/config";

const header = <Header/>
const searchLoader = createSearchLoader(searchUtils.getSearchObjectFromParams, '/browse', 10);
const title = 'Databank Sport';
const detailLoader = createDetailLoader(id => `/sport?rec=${id}`);
const routeObject: RouteObject = {
    path: '/',
    element: <App header={header}/>,
    children: [
        {index: true, element: <Home/> },
        {
        path:"/search",
        loader: async ({request}) => searchLoader(new URL(request.url).searchParams),
        element: <Search title={title} pageLength={30} withPaging={true}
                         hasIndexPage={false} showSearchHeader={false} updateDocumentTitle={false}
                         searchParams={SearchParams.PARAMS} FacetsComponent={Facets} ResultItemComponent={ListItem}/>
    }, {
        path: '/detail/:id',
        loader: async ({params}) => detailLoader(params.id as string),
        element: <BrowserDetail title={title} updateDocumentTitle={false} DetailComponent={Detail}/>
    },
        { path: '/literatuur', element: <Literatuur/> },
        { path: '/colofon', element: <Colofon/> },
        { path: '/gymnastiek', element: <Gymnastiek/>},
        { path: '/hockey', element: <Hockey/>},
        { path: '/korfbal', element: <Korfbal/>},
        { path: '/schaken', element: <Schaken/>},
        { path: '/tennis', element: <Tennis/>},
        { path: '/voetbal', element: <Voetbal/>},
        { path: '/inleiding', element: <Inleiding/>},
        { path: '/database', element: <DatabaseInfo/>}]
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={createBrowserRouter([routeObject])}/>
    </React.StrictMode>
);
