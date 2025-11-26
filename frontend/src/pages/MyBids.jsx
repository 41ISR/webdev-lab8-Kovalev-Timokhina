import "../styles/MyBids.css"

const MyBids = () =>{
    return(
        <>
        <div className="page-header">
        <h1>Мои ставки</h1>
        <p className="page-subtitle">История ваших ставок на товары</p>
    </div>

    <div className="bids-summary">
        <div className="summary-card">
            <span className="summary-value">8</span>
            <span className="summary-label">Всего ставок</span>
        </div>
        <div className="summary-card winning">
            <span className="summary-value">3</span>
            <span className="summary-label">Лидирующих ставок</span>
        </div>
        <div className="summary-card">
            <span className="summary-value">185 000 ₽</span>
            <span className="summary-label">Общая сумма</span>
        </div>
    </div>

    <div className="bids-list">
        <div className="bid-item winning">
            <img src="https://via.placeholder.com/80x80/3498db/ffffff?text=Laptop" alt="Ноутбук" className="bid-item-image"/>
            <div className="bid-item-content">
                <div className="bid-item-header">
                    <a href="/items/1" className="bid-item-title">Ноутбук Dell XPS 15</a>
                    <span className="winning-badge">🏆 Лидирую</span>
                </div>
                <div className="bid-item-meta">
                    <span>⏰ 2 часа назад</span>
                    <span>💰 Начальная: 65 000 ₽</span>
                </div>
            </div>
            <div className="bid-item-amount">
                <span className="bid-amount">70 000 ₽</span>
                <span className="bid-status">Моя ставка</span>
            </div>
        </div>

        <div className="bid-item">
            <img src="https://via.placeholder.com/80x80/e74c3c/ffffff?text=iPhone" alt="iPhone" className="bid-item-image"/>
            <div className="bid-item-content">
                <div className="bid-item-header">
                    <a href="/items/2" className="bid-item-title">iPhone 14 Pro 256GB</a>
                    <span className="outbid-badge">Перебита</span>
                </div>
                <div className="bid-item-meta">
                    <span>⏰ 1 день назад</span>
                    <span>💰 Начальная: 85 000 ₽</span>
                </div>
            </div>
            <div className="bid-item-amount">
                <span className="bid-amount">88 000 ₽</span>
                <span className="bid-status">Моя ставка</span>
                <div className="current-highest">Текущая: 90 000 ₽</div>
            </div>
        </div>

        <div className="bid-item winning">
            <img src="https://via.placeholder.com/80x80/f39c12/ffffff?text=Watch" alt="Apple Watch" className="bid-item-image"/>
            <div className="bid-item-content">
                <div className="bid-item-header">
                    <a href="/items/5" className="bid-item-title">Apple Watch Series 8</a>
                    <span className="winning-badge">🏆 Лидирую</span>
                </div>
                <div className="bid-item-meta">
                    <span>⏰ 3 часа назад</span>
                    <span>💰 Начальная: 35 000 ₽</span>
                </div>
            </div>
            <div className="bid-item-amount">
                <span className="bid-amount">37 000 ₽</span>
                <span className="bid-status">Моя ставка</span>
            </div>
        </div>

        <div className="bid-item winning">
            <img src="https://via.placeholder.com/80x80/1abc9c/ffffff?text=Camera" alt="Камера" className="bid-item-image"/>
            <div className="bid-item-content">
                <div className="bid-item-header">
                    <a href="/items/6" className="bid-item-title">Canon EOS R6</a>
                    <span className="winning-badge">🏆 Лидирую</span>
                </div>
                <div className="bid-item-meta">
                    <span>⏰ 5 часов назад</span>
                    <span>💰 Начальная: 150 000 ₽</span>
                </div>
            </div>
            <div className="bid-item-amount">
                <span className="bid-amount">155 000 ₽</span>
                <span className="bid-status">Моя ставка</span>
            </div>
        </div>

        <div className="bid-item">
            <img src="https://via.placeholder.com/80x80/9b59b6/ffffff?text=Headphones" alt="Наушники" className="bid-item-image"/>
            <div className="bid-item-content">
                <div className="bid-item-header">
                    <a href="/items/4" className="bid-item-title">Sony WH-1000XM5</a>
                    <span className="outbid-badge">Перебита</span>
                </div>
                <div className="bid-item-meta">
                    <span>⏰ 2 дня назад</span>
                    <span>💰 Начальная: 25 000 ₽</span>
                </div>
            </div>
            <div className="bid-item-amount">
                <span className="bid-amount">26 000 ₽</span>
                <span className="bid-status">Моя ставка</span>
                <div className="current-highest">Текущая: 27 000 ₽</div>
            </div>
        </div>
    </div>
        </>
    )
}

export default MyBids