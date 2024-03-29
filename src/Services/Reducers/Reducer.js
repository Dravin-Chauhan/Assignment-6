import addToCart from '../Contant'
const initialState = {
    cartData: [
        {
            "id": 1,
            "bot": "Hot Bot",
            "description": "Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
            "index-value": 289.34,
            "cagr": 34
        },
        {
            "id": 2,
            "bot": "Cool Bot",
            "description": "Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
            "index-value": 439.34,
            "cagr": 28
        },
        {
            "id": 3,
            "bot": "Options Bot",
            "description": "Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
            "index-value": 139.34,
            "cagr": 42
        }
    ]
}
export default function cartItems(state = initialState, action) {
    switch (action.type) {
        case "Add-to-Cart":
            return {
                ...StaticRange,
                cartData: action.data,
            };
            break;
        case "View-Details":
            return {
                ...StaticRange,
                cartData: action.data,
            };
            break;
        default:
            return state;
    }
}