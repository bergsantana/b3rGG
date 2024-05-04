interface props {
    num: number,
    id: string,
    updateNum: Function,

}

export default function ItemQuantityButton({num, id, updateNum}: props){

    const addOne = () => updateNum(id, num + 1)
    const minusOne = () => {if(num) updateNum(id, num -1)}

    return(
        <div className="QtyContainer">
            <button onClick={addOne} >+</button>
            <p>{num}</p>
            <button onClick={minusOne}>-</button>
        </div>
    )
}