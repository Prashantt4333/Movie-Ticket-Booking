import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPgae from './pages/NoPgae';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MovieGrid from './pages/MovieGrid';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import MovieDetails2 from './pages/MovieDetails2';
import MovieTicketPlan from './pages/MovieTicketPlan';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='movie-grid' element={<MovieGrid />}></Route>
          <Route path='movie-list' element={<MovieList />}></Route>
          <Route path='movie-details' element={<MovieDetails />}></Route>
          <Route path='movie-details-2' element={<MovieDetails2 />}></Route>
          <Route path='movie-ticket-plan' element={<MovieTicketPlan />}></Route>
        </Route>
        <Route path='/sign-in' element={<SignIn />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='*' element={<NoPgae />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
