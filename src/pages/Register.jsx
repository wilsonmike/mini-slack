import { logo, upload } from '../assets'

const Register = () => (
    <div className="formContainer">
        <div className="formWrapper">
            <img src={logo} alt="minislack logo" className='logo' />
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder='Display Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input style={{ display: "none" }} type="file" id="file" />
                <label htmlFor="file">
                    <img src={upload} alt="upload avatar" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Already have an account? Login</p>
        </div>
    </div>
)
export default Register