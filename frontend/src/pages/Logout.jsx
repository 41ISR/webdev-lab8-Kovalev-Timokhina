

const Logout = () => {
    const navigate = useNavigate()
    const { clearSession } = useUserStore()
    useEffect(() => {
        clearSession()
        navigate("/")
    }, [])
    return <></>
}

export default Logout