import { Link, useParams } from "react-router-dom"
import "../styles/ItemDetail.css"
import useItemsStore from "../store/useItemsStore"
import { useEffect, useState } from "react"
import { api } from "../api/api"
import useUserStore from "../store/useUserStore"


const ItemDetail = () => {
    const { items, getItems } = useItemsStore()
    const [item, setItem] = useState(undefined)
    const {id} = useParams() 
    const {session} = useUserStore ()
    const isOwn = session?.user.id === item?.userId
    console.log(session, item);
    
    const handleDelete = async () =>{
        await api.deleteItems(id)
        await api.getItems()
    }
    const handlePost = async () => {
        await api.postBids(amount)
    }
    useEffect(() => {
        getItems()
    }, [])
    useEffect(() => {
        setItem(items.find(item  => item.id == id))
    }, [items]) 
    return(
        <>
         <Link to={"/"} className="back-link">← Вернуться к списку товаров</Link>

    {item && <div className="item-detail">
        <div className="item-header">
            <div>
                {/* <img>{item.imageUrl}</img> */}
            </div>

            <div className="item-info">
                <span className="item-status">Активно</span>
                
                <h1 className="item-title-large">{item.title}</h1>
                
                <div className="item-seller-info">
                    <div className="seller-avatar">TS</div>
                    <div className="seller-details">
                        <div className="seller-name">{item.username}</div>
                        <div className="seller-date">{item.createdAt}</div>
                    </div>
                </div>

                <div className="item-description-full">
                    {item.description} 
                </div>

                <div className="price-section">
                    <div className="starting-price">Начальная цена:</div>
                    <div className="current-price">{item.price}</div>
                    {item.highestBid && <div className="highest-bid">Текущая ставка:{item.highestBid}</div>}

                    <form className="bid-form">
                        <input 
                            type="number" 
                            className="bid-input" 
                            placeholder="Введите вашу ставку"
                        />
                        <button onClick={handlePost} type="submit" className="btn-bid">Сделать ставку</button>
                    </form>
                </div>

               
               {isOwn && <button onClick={handleDelete} className="btn-delete"><span>Удалить товар</span></button>}
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
    </div>}
    </>
    )
}

export default ItemDetail