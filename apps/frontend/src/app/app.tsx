import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from '@project-structure/ui-guest'
import Header from '../component/header/header';
import { useSelector, useDispatch } from 'react-redux'
import { handleCurrentUser } from '../actions/userActions';
import Loading from './pages/Loading';
import MainSection from './routes/MainSection';
import './app.css'
export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.currentUser);
  const { userInfo } = currentUser;
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
    dispatch(handleCurrentUser())
    setIsLoading(true)
  }, [])
  if (isLoading) return <Loading />
  /*
  Header-- Here Nav bar with different links
  MainSection-- This is the main section here actual page shows based on there routes
  Footer-- This is the footer of page
  */
  return (
    <div className="container">
      <Router>
        <Header user={userInfo} />
        <MainSection userInfo={userInfo} />
        <Footer />
      </Router>
    </div >
  );
};

export default App;
