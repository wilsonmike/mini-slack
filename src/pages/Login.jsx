import { logo, upload } from '../assets'

const Register = () => (
    <div className="formContainer">
        <div className="formWrapper">
            <img src={logo} alt="minislack logo" className='logo' />
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button>Sign In</button>
            </form>
            <p>Don't have an account? Register</p>
        </div>
    </div>
)
export default Register