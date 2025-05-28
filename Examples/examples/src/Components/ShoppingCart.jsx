function ShoppingCart(){
    const cart = ["Apple", "mango", "banana", "orange", "pineapple"];
    return <ul>{
        cart.map((elem,index) => {
        return <li key={index}>
            <div>{elem}</div>
            <button>Click on</button>

        </li>
    })}
    </ul>
}

export default ShoppingCart;