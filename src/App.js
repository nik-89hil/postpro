
import './App.css';
import CreatePost from './component/CreatePost';
import Delete from './component/Delete';
import Filter from './component/Filter';
import About from './component/About';
import Login from './component/Login';
import Logout from './component/Logout';
import Post from './component/Post';
import PostDetails from './component/PostDetails';
import Profile from './component/Profile';
import Search from './component/Search';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Pagenf from './component/Pagenf';
import Tester from './component/Tester';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Post/>}/>  
     <Route path="/user/login" element={<Login/>}/>
     <Route path= "/user/logout/:id" element={<Logout/>}/>
     <Route path="/search" element={<Search/>}/>
     <Route path="/posts" element={<Post/>}/>
     <Route path="/posts/:relatedtopic" element={<Filter/>}/>
     <Route path="/posts/:id/:topic" element={<PostDetails/>}/>
     <Route path="/posts/delete/:id/:topic" element={<Delete/>}/>
     <Route path="/yourPost" element={<Profile/>}/>
     <Route path="/uploadImage" element={<Tester/>}/>
     <Route path="/createPost" element={<CreatePost/>}/>
     <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Pagenf/>}/>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
