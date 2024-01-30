'use client'
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import { useAuth } from '../../store/auth.store';
import LoginInput from '@/components/LoginInput';
import { onErrorAlert } from '@/utils/sweetAlert';
import { Box } from '@mui/material';
const LoginForm = () => {
    const {login, loading} = useAuth()
    const {register: formRegister, handleSubmit, formState: {errors}, reset} = useForm<LoginForm>({
       mode: 'onChange'
    })

    const onSubmit :SubmitHandler<LoginForm> = async (data) => {
        const response = await login(data)
        if(response){
        } else {
            onErrorAlert('שגיאה','נתונים לא נכונים, נסה שנית')
        }
        reset()
    }
    return (
        <Box>
            <Box sx={{margin:'40px 0'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <LoginInput 
                    {...formRegister('email', {
                        required: 'מספר טלפון',
                        // pattern: validEmail
                    })}
                    heading='מספר טלפון'
                    placeholder='שם משתמש'
                    error={errors.email?.message}/>
                    <LoginInput  {...formRegister('password', {
                        required: 'סיסמה שדה חובה',
                        minLength: {
                            value:6,
                            message:'מינימום 6 תווים'
                        }
                    })}
                    type='password'
                    heading='סיסמה'
                    placeholder='סיסמה'
                    error={errors.password?.message}
                    />
                    <Box className='flex justify-between'>
                        <Box>
                            {/* <Link href={Links.FORGOT_PASSWORD} className='text-button_primary cursor-pointer'>שחכתי סיסמה</Link> */}
                        </Box>
                        {/* <div className='flex gap-2'>
                            <input type='checkbox' defaultChecked className='w-5 rounded-2xl' />
                            <p>זכור אותי</p>
                        </div> */}
                    </Box>
                    <button type='submit' className='mainBtn font-bold mt-10 text-center w-full rounded-3xl py-2 text-white'>כניסה</button>
                </form>
            </Box>
        </Box>
    );
};

export default LoginForm;