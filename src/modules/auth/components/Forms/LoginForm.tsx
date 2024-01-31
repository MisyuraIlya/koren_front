'use client'
import React from 'react';
import LoginInput from '@/components/LoginInput';
import { onErrorAlert } from '@/utils/sweetAlert';
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    FormControl,
    FormControlLabel,
    Checkbox,
} from "@mui/material"
import Link from "next/link"
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { CheckBox } from "@mui/icons-material"
import CircularProgress from '@mui/material/CircularProgress';
import { useAuth } from '../../store/auth.store';
import { useRouter } from 'next/navigation';
const LoginForm = () => {
    const {loading, login} = useAuth()
    const router = useRouter();
    const {register: formRegister, handleSubmit, formState: {errors}, control, reset} = useForm<LoginForm>({
       mode: 'onChange'
    })

    const onSubmit :SubmitHandler<LoginForm> = async (data) => {
        const response = await login(data)
        if(response?.role === 'admin'){
            router.push('/admin/courses/1')
        } else if(response?.role === 'student') {
            router.push('/student/courses')
        }
        reset()
    }

    return (
        <Box>
            <Box>
                {loading ?
                    <CircularProgress/>
                :
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl fullWidth margin="normal">
                        <Typography variant='h6' fontWeight={800}>מייל</Typography>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: "מייל שדה חובה",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "מייל אינו תקין",
                                },
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    variant="outlined"
                                    placeholder="email"
                                    error={!!errors.email}
                                    helperText={errors.email?.message}
                                />
                            )}
                        />
                    </FormControl>
                    <FormControl fullWidth margin="normal">
                        <Typography variant='h6' fontWeight={800}>סיסמה</Typography>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: "סיסמא שדה חובה",
                            }}
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    variant="outlined"
                                    type='password'
                                    placeholder="סיסמא *"
                                    error={!!errors.password}
                                    helperText={errors.password?.message}
                                />
                            )}
                        />
                    </FormControl>
                    <Box sx={{display:'flex', justifyContent:'space-between', margin:'20px 0px'}}>
                        <Typography
                            variant="body1"
                            fontWeight={400}
                            fontSize={18}
                            sx={{ display:'flex', alignItems:'center'}}
                        >
                            <Link href="#" style={{ color: "#4255FF" }}>
                                {" שחכתי סיסמה "}
                            </Link>
                        </Typography>
                        <FormControlLabel
                            control={
                                <Controller
                                    name="rememberMe"
                                    control={control}
                                    defaultValue={true}
                                    render={({ field }) => (
                                        <Checkbox {...field} color="primary" />
                                    )}
                                />
                            }
                            label="זכור אותי"
                        />
                    </Box>
                    <Button
                        sx={{ borderRadius: "24px", padding:'5px 0px', color:'white', fontSize:'22px', fontWeight:700 }}
                        fullWidth={true}

                        type="submit"
                        variant="contained"
                        color="secondary"
                    >
                        כניסה
                    </Button>
                </form>
                }
            
            </Box>
        </Box>
    );
};

export default LoginForm;