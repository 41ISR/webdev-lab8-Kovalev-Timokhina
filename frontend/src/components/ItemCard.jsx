import { Link, useNavigate } from "react-router-dom"
import { api } from "../api/api"
import useItemsStore from "../store/useItemsStore"
import { useUserStore } from "../store/useUserStore"

const ItemCard = ({id,title, description, price, bidInfo, username, status, imageUrl }) =>{
    const navigate = useNavigate()
    const handleClick =() =>{
        navigate(`/item/${id}`)
    }
    return (
<div onClick={handleClick} className="item-card">
                    <img src={imageUrl} />
                        <div className="item-content">
                            <span className="status-badge status-active">{status}</span>
                            <h3 className="item-title">{title}</h3>
                            <p className="item-description">{description}</p>
                            <div className="item-footer">
                                <div>
                                    <div className="item-price">{price}</div>
                                    {bidInfo && <div className="bid-info">
                                        Текущая ставка: 70 000 ₽
                                        <span className="bid-count">5</span>
                                    </div>}
                                </div>
                                <div className="item-meta">
                                    <span className="item-seller">{username}</span>
                                </div>
                            </div>
                        </div>
                </div>
    )
}

export default ItemCard