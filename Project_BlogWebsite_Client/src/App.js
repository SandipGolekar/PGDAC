import React from 'react';
//import {Box} from '@material-ui/core'
import {BrowserRouter} from 'react-router-dom';
//import './App.css';
import AppWithRouterAccess from './AppWithRouterAccess';
// import Header from './Components/Header';
// import Home from './Components/Home/Home';
// import DetailView from './Components/post/DetailView';
// import CreateView from './Components/post/CreateView';
// import UpdateView from './Components/post/UpdateView';
function App() {
  return (
    <BrowserRouter>
    <AppWithRouterAccess/>
   {/* <Header/>
   <Box style={{marginTop:64}}>
     <Switch>
     <Route exact path='/' component={Home}/>
   <Route exact path='/details/:id' component={DetailView}/>
    <Route exact path='/create' component={CreateView}/>
    <Route exact path='/update/:id' component={UpdateView}/>
     </Switch>
  
   </Box> */}
   </BrowserRouter>
  )
}

export default App;
