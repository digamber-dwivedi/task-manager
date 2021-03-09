import logo from './logo.svg';
import './App.css';

import TodoList from "./components/TodoList";
import TodoApp from "./components/TodoList";
import TodoListItem from "./components/TodoList";
import TodoForm from "./components/TodoList";
import Home from "./components/Home";
import Listing from "./components/Listing";
import About from "./components/About";
import Auth from "./components/Auth";
import Signup from "./components/Signup";
/*import TodoList, TodoApp, TodoForm, TodoHeader, TodoListItem,Todo  from "./components/TodoList"; */
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <>
    <div id="app"/>

    {/* <TodoList /> */}
    <Router>
     <Link to="home" >Home</Link>
     <Link to="About" >About</Link>
     <Link to="Login" >Login</Link>
     <Switch>
     
          <BrowserRouter>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
             <Auth />
          </Route>
          <Route exact path="/signup">
            <Signup />  
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
         
          </BrowserRouter>
        </Switch>
        
  
    
    <Listing />
    <About />
    </Router>
      </>
  );
}

export default App;
