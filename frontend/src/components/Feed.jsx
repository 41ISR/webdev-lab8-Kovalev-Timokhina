import { useEffect, useState } from "react"
import { api } from "../api/api"

const Feed = ({ title = "товары" }) => {
    const {messages, getMessages} = useItemStore()
    const [timerId, stTimerId] = useState(undefined)
    useEffect(() => {
        getMessages()
        setTimeId(setinterval(()=>{
            getMessages()
        }, 5000))

        return () => {clearInterval(timerId)}
    }, [])

    return (
        <>
            <div className="messages-section">
                <div className="container">
                    <h2 className="section-title">{title}</h2>
                    <div className="messages-grid">
                        {messages.map((el, i) => (
                            <MessageCard key={i} {...el} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feed