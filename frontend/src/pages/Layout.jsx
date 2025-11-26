import "../styles/layout.css"

const Layout = () => {

    return(
        <>
        <header>
        <nav>
            <a href="/" class="logo">🛒 Маркетплейс</a>
            
            
            <ul class="nav-links" id="auth-nav">
                <li><a href="/" class="active">Товары</a></li>
                <li><a href="/my-bids">Мои ставки</a></li>
                <li><a href="/create-item" class="btn-primary">+ Создать товар</a></li>
                <li class="user-info">
                    <span class="username">username</span>
                    <button class="btn-logout">Выйти</button>
                </li>
            </ul>

           
            <ul class="nav-links" id="guest-nav">
                <li><a href="/">Товары</a></li>
                <li><a href="/login">Войти</a></li>
                <li><a href="/register" class="btn-primary">Регистрация</a></li>
            </ul>
        </nav>
    </header>

    <main>
        
        <div id="outlet">
            
        </div>
    </main>

    <footer>
        <p>&copy; 2025 Маркетплейс. Все права защищены.</p>
    </footer>
        </>

    )
}
export default Layout