import { Link, useParams } from "react-router-dom"
import "../styles/ItemDetail.css"
import useItemsStore from "../store/useItemsStore"
import { useEffect, useState } from "react"
const ItemDetail = () => {
    const [item, setItem] = useState(undefined)
    const {id} = useParams() 
    const {items} = useItemsStore()

    useEffect(() => {
        items.find(item => items.id == )
    }, [items])
    return(
        <>
         <Link to={"/"} className="back-link">← Вернуться к списку товаров</Link>

    <div className="item-detail">
        <div className="item-header">
            <div>
                <img src="https://via.placeholder.com/600x400/3498db/ffffff?text=Laptop" alt="Ноутбук Dell XPS 15" className="item-image-large"/>
            </div>

            <div className="item-info">
                <span className="item-status">Активно</span>
                
                <h1 className="item-title-large">Ноутбук Dell XPS 15</h1>
                
                <div className="item-seller-info">
                    <div className="seller-avatar">TS</div>
                    <div className="seller-details">
                        <div className="seller-name">techseller</div>
                        <div className="seller-date">Опубликовано: 15 октября 2025</div>
                    </div>
                </div>

                <div className="item-description-full">
                    Мощный ноутбук для работы и игр в отличном состоянии. 
                    
                    <br></br>
                    
                    <strong>Характеристики:</strong>
                    <ul>
                        <li>Процессор: Intel Core i7-12700H (12 ядер)</li>
                        <li>Оперативная память: 16GB DDR5</li>
                        <li>Видеокарта: NVIDIA GeForce RTX 3050 (4GB)</li>
                        <li>Накопитель: 512GB NVMe SSD</li>
                        <li>Дисплей: 15.6" FHD (1920x1080), 144Hz</li>
                        <li>Операционная система: Windows 11 Pro</li>
                    </ul>

                    <br></br>
                    
                    Ноутбук используется около года, в идеальном состоянии. Все аксессуары в комплекте: зарядное устройство, коробка, документы. 
                    Гарантия действует еще 1 год.
                </div>

                <div className="price-section">
                    <div className="starting-price">Начальная цена:</div>
                    <div className="current-price">65 000 ₽</div>
                    <div className="highest-bid">Текущая ставка: 70 000 ₽</div>

                    <form className="bid-form">
                        <input 
                            type="number" 
                            className="bid-input" 
                            placeholder="Введите вашу ставку (мин. 70 001 ₽)"
                            min="70001"
                            step="100"
                        />
                        <button type="submit" className="btn-bid">Сделать ставку</button>
                    </form>
                </div>

               
               <button className="btn-delete">Удалить товар</button>
            </div>
        </div>

        <div className="bids-section">
            <div className="bids-header">
                <h2 className="bids-title">История ставок</h2>
                <span className="bids-count">5</span>
            </div>

            <div className="bids-list">
                <div className="bid-item highest-bid-item">
                    <div className="bid-user">
                        <div className="bid-avatar">BB</div>
                        <div className="bid-details">
                            <span className="bid-username">buyer_best</span>
                            <span className="bid-time">2 часа назад</span>
                        </div>
                        <span className="highest-badge">🏆 Лидирует</span>
                    </div>
                    <div className="bid-amount">70 000 ₽</div>
                </div>

                <div className="bid-item">
                    <div className="bid-user">
                        <div className="bid-avatar">JD</div>
                        <div className="bid-details">
                            <span className="bid-username">john_doe</span>
                            <span className="bid-time">5 часов назад</span>
                        </div>
                    </div>
                    <div className="bid-amount">68 000 ₽</div>
                </div>

                <div className="bid-item">
                    <div className="bid-user">
                        <div className="bid-avatar">AL</div>
                        <div className="bid-details">
                            <span className="bid-username">alice_tech</span>
                            <span className="bid-time">1 день назад</span>
                        </div>
                    </div>
                    <div className="bid-amount">67 000 ₽</div>
                </div>

                <div className="bid-item">
                    <div className="bid-user">
                        <div className="bid-avatar">MK</div>
                        <div className="bid-details">
                            <span className="bid-username">mike_k</span>
                            <span className="bid-time">1 день назад</span>
                        </div>
                    </div>
                    <div className="bid-amount">66 000 ₽</div>
                </div>

                <div className="bid-item">
                    <div className="bid-user">
                        <div className="bid-avatar">ST</div>
                        <div className="bid-details">
                            <span className="bid-username">sarah_tech</span>
                            <span className="bid-time">2 дня назад</span>
                        </div>
                    </div>
                    <div className="bid-amount">65 500 ₽</div>
                </div>
            </div>

      
            <div className="no-bids">
                <p>Ставок пока нет. Станьте первым!</p>
            </div>
        </div>
    </div>
    </>
    )
}

export default ItemDetail