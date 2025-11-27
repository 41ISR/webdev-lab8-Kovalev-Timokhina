import { useEffect, useState } from "react"
import { api } from "../api/api"
import { useUserStore } from "../store/useUserStore"


const Feed = ({ title = "Сообщения", myOwn = false }) => {
    const { items, getItems } = useItemsStore()
    const [timerId, setTimerId] = useState(undefined)
    const {session} = useUserStore()

    useEffect(() => {
        getItems()
        setTimerId(setInterval(() => {
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
                        {messages && myOwn ?  
                        messages.filter((items) => items.userId == session.user.id)
                        .map((message, i) => (
                            <ItemsList key={i} {...message} />
                        ))
                        : messages.map((message, i) => (
                            <ItemsList key={i} {...message} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Feed