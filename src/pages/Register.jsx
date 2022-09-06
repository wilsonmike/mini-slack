import { logo } from '../assets'

const Register = () => (
    <div className="formContainer">
        <div className="formWrapper">
            <img src={logo} alt="minislack logo" className='logo' />
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder='display name' />
                <input type="email" placeholder='email' />
                <input type="password" placeholder='password' />
                <input type="file" />
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
)
export default Register