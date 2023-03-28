import './styles.css';
import { useState } from 'react';
import OpenEyes from '../../assets/open-eye.svg';
import CloseEyes from '../../assets/close-eye.svg';
import api from '../../services/api';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';


const SignUp = () => {

    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/')
    };

    const [users, setUsers] = useState([]);
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [visible, setVisible] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const clearForm = () => {
        setError('');
        setSuccess('');

        setForm({
            name: '',
            email: '',
            password: ''
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.name) {
            setError('o nome é obrigatório!');
            return;
        }

        if (!form.email) {
            setError('o email é obrigatório!');
            return;
        }

        if (!form.password) {
            setError('a senha é obrigatória');
            return;
        }

        if (form.password.length < 8) {
            setError('senha tem que ter no mínimo 8 caracteres');
            return
        }

        await handleAddUser();

        clearForm();

        setSuccess(true)

    };

    async function handleAddUser() {//add
        try {
            const response = await api.post('/user', {
                name: form.name,
                email: form.email,
                password: form.password
            })

            setUsers([...users, response.data]);
            // handleClearForm();
            navigate('/')
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleChangeForm = (e) => {
        const value = e.target.value;

        setForm({ ...form, [e.target.name]: value })
    };

    async function login() {

        console.log('Login')
    };

    return (
        <>
            <Header />
            <div className='container'>

                <form
                    className='form-sign-up'
                    onSubmit={handleSubmit}>
                    <h1>Cadastre-se</h1>
                    <input
                        className='input-sign-up'
                        type='text'
                        placeholder='Nome'
                        name='name'
                        value={form.name}
                        onChange={(e) => handleChangeForm(e)}
                    />

                    <input
                        className='input-sign-up'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={form.email}
                        onChange={(e) => handleChangeForm(e)}
                    />

                    <div style={{ position: 'relative' }}>
                        <input
                            className='input-sign-up'
                            type={!visible ? 'password' : 'text'}
                            placeholder='Senha'
                            name='password'
                            value={form.password}
                            onChange={(e) => handleChangeForm(e)}
                        />
                        <img className='img-close-eye'
                            onClick={() => { setVisible(!visible) }}
                            src={!visible ? CloseEyes : OpenEyes}
                        />
                    </div>
                    <span>{error}</span>

                    <div className='buttons'>
                        <button className='btn-cadastrar'>Cadastrar</button>

                        <button
                            type='button'
                            className='btn-cancelar'
                            onClick={() => clearForm()}
                        >
                            Cancelar
                        </button>

                        <span
                            className='span-login'
                            onClick={() => handleLogin()}
                        >
                            Faça o login
                        </span>
                    </div>
                </form>

                <Footer />
            </div>
        </>
    )
};

export default SignUp;