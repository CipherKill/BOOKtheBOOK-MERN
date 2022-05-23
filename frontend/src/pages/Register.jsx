import {useState} from 'react'
import {Container,Form,Button} from 'react-bootstrap'
import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'

function Register() {

    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const {name,email,password,password2}=formData;

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
    };

  return (
      <>
        <Container className='mb-5'>
            <h1 className='text-center mt-5'><FaUser/> Register</h1>
            <h5 className='text-center text-secondary'>Please create an account</h5>
        </Container>

        <Container>
            <Form onSubmit={onSubmit}>
                <Form.Group className='mb-3' controlId='forName'>
                    {/* <Form.Label>Name</Form.Label> */}
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
                <Form.Group className='mb-3' controlId='forCPass'>
                    {/* <Form.Label>Confirm Password</Form.Label> */}
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