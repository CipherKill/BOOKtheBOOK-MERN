import {useState,useEffect} from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import {FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'
import {useSelector,useDispatch} from 'react-redux'
import {register,reset} from '../features/auth/authSlice'
import {useNavigate} from 'react-router-dom'
import Spinner from '../components/Spinner'

function Register() {

    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const {name,email,password,password2}=formData;

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
        if(password!==password2){
            toast.error('Passwords do not match');
        }
        else{
            const userData={
                name,
                email,
                password
            }
            dispatch(register(userData))
        }
    };

    if(isLoading){
        return (
            <Container><Spinner/></Container>
        );
    }

  return (
      <>
        <Container className='mb-5'>
            <h1 className='text-center mt-5'><FaUser/> Register</h1>
            <h5 className='text-center text-secondary'>Please create an account</h5>
        </Container>

        <Container>
            <Form onSubmit={onSubmit}>
                <Form.Group className='mb-3' controlId='forName'>
                    <Form.Control 
                        type='text' 
                        placeholder='Enter name' 
                        name='name'
                        value={name}
                        onChange={onChange}
                        required
                    />
                </Form.Group>
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
                <Form.Group className='mb-3' controlId='forCPass'>
                    <Form.Control
                        type='password'
                        name='password2'
                        value={password2}
                        onChange={onChange}
                        placeholder='Confirm Password'
                        required
                    />
                </Form.Group>
                <Button variant='dark' type='submit' className='mt-2'>Submit</Button>
            </Form>
        </Container>
      </>
  )
}

export default Register