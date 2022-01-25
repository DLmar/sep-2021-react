import {Routes, Route} from 'react-router-dom'
import Layout from "./components/Layout/Layout";

import {AlbumsPage,PostsCommentsPage,UserPostsPage, UsersPage,UserDetailsPage,PostsPage,PostsDetailsPage} from './pages'
import PhotosPage from "./pages/PhotosPage/PhotosPage";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path={'users'} element={<UsersPage/>}>

                        <Route path={':id'} element={<UserDetailsPage/>}>
                               <Route path={':id/posts'} element={<UserPostsPage/>}/>
                        </Route>

                        <Route  path={':id/albums'} element={<AlbumsPage/>}>
                           <Route path={':albumId/photos'} element={<PhotosPage/>}/>

                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>

                        <Route path={':id'} element={<PostsDetailsPage/>}>
                            <Route path={'comments'} element={<PostsCommentsPage/>}/>
                        </Route>

                    </Route>

                </Route>
            </Routes>
        </div>
    );
}

export default App;
