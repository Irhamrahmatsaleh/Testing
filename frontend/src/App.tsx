
import { ChakraProvider, useToast } from "@chakra-ui/react";
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { SET_USER } from "./features/auth/authSlice";
import theme from './libs/chakra-theme';
import Follow from './pages/follow';
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';
import Register from './pages/register';
import Search from './pages/search';
import Status from './pages/status';
import { RootState } from "./redux/store";


export default function App() {
  const currentUser = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const PrivateRoute = () => {
      if(!isLoading) {
        
        if (currentUser.email) return <Outlet />;

        return <Navigate to={"/login"} />;
      }
  };

  async function authCheck() {
    try {
      const token = localStorage.token;
      const response = await Axios({
        method: "post",
        url: `http://localhost:5000/api/v1/check`,
        headers: { 
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${token}`
         },
    })

      dispatch(SET_USER(response.data));
      setIsLoading(false);
      PrivateRoute();
    } catch (error) {
      PrivateRoute();
      console.log(error)
      toast({
        title: "User not authenticated!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  useEffect(() => {
    const token = localStorage.token;
    
    if (token) authCheck();
    else {
      setIsLoading(false);
      PrivateRoute();
    }
  }, []);



  return (
    <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
          </Route>
          <Route path="/search" element={<Search />} />
          <Route path="/follow" element={<Follow />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/threads" element={<Status/>} />
        </Routes>
    </ChakraProvider>
  )
}