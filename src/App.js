import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Components/Loader";
import AppLayout from "./Layout/AppLayout";
import './Style.css';

const Home = lazy(() => import("./Pages/Home"));
const Post  = lazy(() => import("./Pages/Post"));
const Error = lazy(() => import("./Pages/Error"));

const App = () =>{ 
    return(<Suspense fallback={<Loader/>}>
        <Routes>
            <Route element={<AppLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/post/:post_id" element={<Post/>}/>
                <Route path="*" element={<Error/>}/>
            </Route>
        </Routes> 
    </Suspense>);
};

export default App;
