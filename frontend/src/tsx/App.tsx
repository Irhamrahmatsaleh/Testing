import Forgot from './auth/forgot';
import Login from "./auth/login";
import Register from './auth/register';
import Follow from './sidebarButton/follow';
import Home from './sidebarButton/home';
import Profile from './sidebarButton/profile';
import Search from './sidebarButton/search';
import Status from './sidebarButton/status';

import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

export default function App() {

  // const bgColor = '#1D1D1D'
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/follow" element={<Follow />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/threads" element={<Status />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </ChakraProvider>
  )
}
