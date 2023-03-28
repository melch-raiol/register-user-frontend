import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../services/api';
import { setItem } from '../../utils/storage';

const Login = () => {

    const navigate = useNavigate()

    const [error, setError] = useState();
    const [form, setForm] = useState(
        {
            email: '',
            password: ''
        }
    );

    function handleChangeForm(e) {
        const value = e.target.value;
        setForm({ ...form, [e.target.name]: value })
    };

    async function handleSubmit(e) {
        e.preventDefault();

        if (!form.email) {
            setError('Email é obrigatório')
            return;
        };

        if (!form.password) {
            setError('Senha é obrigatório')
            return;
        };

        handleLogin()
    };

    async function handleLogin() {
        console.log(form.email);
        try {

            const response = await api.post('/login', {
                email: form.email,
                password: form.password
            });
            console.log(response);
            //const { token, user } = response.data;

            // setItem('token', token);
            // setItem('userName', user.name);
            // setItem('userId', user.id);

            navigate('/SignUp');

        } catch (error) {
            console.log(error);
        }

    };

    function handleNavigate() {
        navigate('/SignUp')
    };

    return (
        <div className='container-login'>

            <Header />

            <form className='form-login'
                onSubmit={handleSubmit}
            >
                <h1>Login</h1>


                <input
                    className='input-login'
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={form.email}
                    onChange={(e) => handleChangeForm(e)}
                />


                <div style={{ position: 'relative' }}>
                    <input
                        className='input-login'
                        placeholder='Senha'
                        name='password'
                        value={form.password}
                        onChange={(e) => handleChangeForm(e)}
                    />

                </div>

                <span className='error'>{error}</span>
                <button className='btn-enter'>Entrar</button>

                <span
                    className='span-register'
                    onClick={() => handleNavigate()}
                >Cadastre-se
                </span>
            </form>

            <Footer />
        </div>
    )
};

export default Login;