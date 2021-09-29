
const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    dollars: 0,
    sendedMenu: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            return {
                ...state,
                menu: action.payload,
                loading: false,
            };
        case 'MENU_REQUESTED':
            return {
                ...state,
            };
        case 'MENU_ERROR':
            return {
                ...state,
                menu: state.menu,
                loading: false,
                error: true
            };
        case 'ITEM_ADD_TO_CART': {
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                category: item.category,
                price: item.price,
                url: item.url,
                id: item.id
            }

            return {
                ...state,
                dollars: state.dollars + item.price,
                items: [
                    ...state.items,
                    newItem
                ]
            }
        };
        case 'ITEM_REMOVE_FROM_CART': {
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            const item = state.menu.find(item => item.id === idx);
            return {
                ...state,
                dollars: state.dollars - item.price,
                items: [
                    ...state.items.slice(0,itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ]
            }
        }
        case 'ITEMS_REMOVE': {
            return {
                ...state,
                items: [],
                dollars: 0
            }
        }
        default: 
            return state;
    }
}

export default reducer;