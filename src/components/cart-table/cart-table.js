import React from 'react';
import WithRestoService from '../hoc';
import { connect } from 'react-redux';
import { deleteFromCart, deleteAllItems } from '../../actions';

import './cart-table.scss';


const CartTable = ({items, onDelete, RestoService, deleteAllItems}) => {//действия что приходят из reducer-a добавляем в пропсы!
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
                <div className="cart__title-wrapper" > 
                    <button type="button" className="btn btn-primalry cart__title-button"
                    onClick=
                        {() => 
                            {
                                return (
                                    items.length ? 
                                        RestoService.postMenuItems(items)
                                        .then(() => {
                                            alert('Заказ отправлен!');
                                            deleteAllItems();
                                        })
                                        .catch(() => {
                                            alert('Заказ не отправлен!');
                                        }) : alert('Добавьте хоть что-то в корзину!')
                                )
                            }
                        }>Отправить заказ
                    </button>
                </div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const {title,price,url,id} = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => onDelete(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};

//items из state
const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = {
    onDelete: deleteFromCart,
    deleteAllItems: deleteAllItems
};

export default WithRestoService ()( connect(mapStateToProps, mapDispatchToProps)(CartTable) );