import {useState} from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import {FaSignInAlt} from 'react-icons/fa'
import {toast} from 'react-toastify'
import {useSelector,useDispatch} from 'react-redux'
import {login} from '../features/auth/authSlice'

function Login() {
    const [formData,setFormData]=useState({
        email:'',
        password:''
    });

    const {email,password}=formData;

    const dispatch=useDispatch();
    const {user,isLoading,isSuccess,message}=useSelector(state=>state.auth);

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
                    {/* <Form.Label>Email</Form.Label> */}
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
                    {/* <Form.Label>Password</Form.Label> */}
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