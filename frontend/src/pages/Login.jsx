import "../styles/Login.css"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUserStore } from "../store/useUserStore"

const Logout = () => {
    const navigate = useNavigate()
    const { clearSession } = useUserStore()
    useEffect(() => {
        clearSession()
        navigate("/")
    }, [])
    return (
        <>
            <div className="auth-container">
                <div className="auth-header">
                    <div className="auth-icon">🔐</div>
                    <h1 className="auth-title">Вход</h1>
                    <p className="auth-subtitle">Войдите в свой аккаунт</p>
                </div>

                <div className="alert alert-error" id="error-alert">
                    Неверное имя пользователя или пароль
                </div>

                <form id="login-form">
                    <div className="form-group">
                        <label className="form-label">Имя пользователя</label>
                        <input
                            type="text"
                            className="form-input"
                            name="username"
                            placeholder="Введите имя пользователя"
                            required
                            autocomplete="username"
                        />
                            <div className="form-error">Введите имя пользователя</div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Пароль</label>
                        <input
                            type="password"
                            className="form-input"
                            name="password"
                            placeholder="Введите пароль"
                            required
                            autocomplete="current-password"
                        />
                            <div className="form-error">Введите пароль</div>
                    </div>

                    <button type="submit" className="btn-submit">Войти</button>
                </form>

                <div className="auth-divider">или</div>

                <div className="auth-link">
                    Нет аккаунта? <a href="/register">Зарегистрироваться</a>
                </div>
            </div>
        </>
    )
}

export default Logout