import {useState, useEffect} from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import {FaSignInAlt} from 'react-icons/fa'
import {toast} from 'react-toastify'
import {useSelector,useDispatch} from 'react-redux'
import {login,reset} from '../features/auth/authSlice'
import {useNavigate} from 'react-router-dom'

function Login() {
    const [formData,setFormData]=useState({
        email:'',
        password:''
    });

    const {email,password}=formData;

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {user,isLoading,isSuccess,isError,message}=useSelector(state=>state.auth);

    useEffect(()=>{
        if(isError){
            toast.error(message);
        }
        if(isSuccess||user){
            navigate('/');
        }
        dispatch(reset())
    },[isError,isSuccess,user,message,navigate,dispatch]);

    //really cool function
    const onChange=(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }));
    };

    const onSubmit=(e)=>{
        e.preventDefault();
        const userData={
            email,
            password
        };
        dispatch(login(userData));
    };

  return (
      <>
        <Container className='mb-5'>
            <h1 className='text-center mt-5'><FaSignInAlt/> Login</h1>
            <h5 className='text-center text-secondary'>Please log in to access features</h5>
        </Container>

        <Container>
            <Form onSubmit={onSubmit}>
                <Form.Group className='mb-3' controlId='forEmail'>
                    <Form.Control
                        type='email'
                        name='email'
                        value={email}
                        onChange={onChange}
                        placeholder='Enter email'
                        required
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId='forPass'>
                    <Form.Control
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                        placeholder='Enter password'
                        required
                    />
                </Form.Group>
                <Button variant='dark' type='submit' className='mt-2'>Submit</Button>
            </Form>
        </Container>
      </>
  )}

export default Login