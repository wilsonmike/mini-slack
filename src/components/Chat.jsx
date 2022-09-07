import { cam, more, add } from "../assets"
import Input from "./Input"
import Messages from "./Messages"

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src={cam} alt="Camera" />
                    <img src={add} alt="Add User" />
                    <img src={more} alt="More" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat