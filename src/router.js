import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import App from "./App";
import Greetings from "./components/Greetings";
import ListPosts from "./components/blogs/ListPosts";
import CreatePost from "./components/blogs/CreatePost";
import ViewPost from "./components/blogs/views"
import EditPost from "./components/blogs/EditPost";
import React from "react";


const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'aboutus', element: <Aboutus/> },
    { path: 'greeting/:name', element: <Greetings/>},
    { path: 'blog/posts', element: <ListPosts/>},
    { path: 'blog/posts/create', element: <CreatePost/>},
    { path: 'blog/posts/:postId', element: <ViewPost/>},
    { path: 'blog/posts/:postId/edit', element: <EditPost/>},
]);

export default router;