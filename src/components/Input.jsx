import { img, attach } from '../assets'

const Input = () => {
    return (
        <div className='input'>
            <input type="text" placeholder='Type something...' />
            <div className="send">
                <img src={attach} alt="Attach File" />
                <input type="file" style={{ display: "none" }} id="file" />
                <label htmlFor="file">
                    <img src={img} alt="Add Image" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input