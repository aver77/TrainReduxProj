import React from "react";
import MenuListItem from '../menu-list-item';
import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry/error-boundry';
import { withRouter } from "react-router";

const MenuListRender = ({menuItems,loading,error}) => {
    if (loading && !error) {
        return <Spinner/>
    }
    if (!loading && error) {
        return <ErrorBoundry/>
    }

    return (
        <ul className="menu__list">
            {
                menuItems.map((menuItem) => {
                    return <MenuListItem key={menuItem.id} menuItem={menuItem}/>
                })
            }
        </ul>
    )
}

export default withRouter(MenuListRender);