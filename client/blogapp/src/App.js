import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

//Import style
import "./stylessheets/index.css";

//Import all components
 import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";

import Post from "./components/Post";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Postlist from './components/Postlist';
import EditPost from './components/EditPost';
// const EditPost = lazy(() => import("./components/EditPost"));
// const PostsList = lazy(() => import("./components/PostsList"));
// const Login = lazy(() => import("./components/Login"));
import About from './components/About';




const App = () => (
    <div className="container">
        <Router>
            <Navbar />
            
            
                <Switch>
                    
                    
                    <Route path="/" exact component={Landing}/>
                    <Route path="/posts/:id" exact component={Post} />
                    <Route path="/posts" exact component={Postlist} />
                    <Route path="/posts/new/" exact component={CreatePost} />
                    <Route path="/posts/:id/edit" exact component={EditPost} />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                </Switch>
            
          <Footer/>  
        </Router>
    </div>
);

export default App;


