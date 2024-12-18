import { loginForm } from "@/libs/type";
import Axios from 'axios';
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_USER } from "../auth/authSlice";
import { useToast } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validators/login-form";

export const useLoginForm = () => {
    const toast = useToast();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<loginForm>({
        mode: "onChange",
        resolver: zodResolver(loginSchema),
      });

      useEffect(() => {
        localStorage.removeItem('token');
      },[])

        const onSubmit: SubmitHandler<loginForm> = async(data) => {
        try {
            const response = await Axios({
                method: "post",
                url: "http://localhost:5000/api/v1/login",
                data: objectToFormData(data),
                headers: { "Content-Type": "multipart/form-data" },
                })
            // handle success
            const token = response.data.user.token;
            const user = response.data.user.user;
            if (token) {
                localStorage.setItem("token", response.data.user.token);
            }
            if(user)
                {
                    dispatch(SET_USER(user));
                    toast({
                        title: "Login success!",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                      });
                    navigate("/");
                }
            } catch (error) {
            // handle error
            toast({
                title: "Email / password is wrong!",
                status: "error",
                duration: 3000,
                isClosable: true,
              });
            console.log(error);
            }
        }

        function objectToFormData(obj: Record<string, any>): FormData{
            const formData = new FormData();
            for (const key in obj) {
                formData.append(key, obj[key]);
            }
            return formData;
          }
    
          return {
            register,
            handleSubmit,
            onSubmit,
            errors
          }
}
