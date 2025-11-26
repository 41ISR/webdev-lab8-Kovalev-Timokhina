import { useUserStore } from "../store/useUserStore"

const Board = () => {
    const { session } = useUserStore()
    return (
        <>
            <h1>Board</h1>
            {session && <MessageField />}
            <Feed title="Последние товары" />
        </>
    )
}

export default Board