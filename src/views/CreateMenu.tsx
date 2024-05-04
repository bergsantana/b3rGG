import { useState } from "react"
import Menu from "../interfaces/Menu"
import './styles/CreateMenu.css'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import menuImages from "../assets/images/menu/menu-images"
import ItemQuantityButton from "../components/ItemQuantityButton/ItemQuantityButton"

const menu: Menu = {
    title: 'Hamburguer Menu',
    items: [
        {   
            id: '1',
            seq: 1,
            title: 'Hamburguer Simple',
            photoUrl: menuImages.sandwiches.BaconOneHamburguer,
            description: 'Meat hamburguer, bread, bacon',
            price: '19.99',
            quantity: 0
            
        },
        {
            id: '2',
            seq: 2,
            title: 'Hamburguer Double Bacon',
            photoUrl: menuImages.sandwiches.BaconTwoHamburguers,
            description: 'Meat hamburguer, bread, bacon',
            price: '29.99',
            quantity: 0
        },
        {
            id: '3',
            seq: 3,
            title: 'Hamburguer Caramelized Onions',
            photoUrl: menuImages.sandwiches.CaramelizedOnionsOneHambuguer,
            description: 'Meat hamburguer, Onions',
            price: '39.99',
            quantity: 0
        },
        {
            id: '4',
            seq: 4,
            title: 'Double Hamburguer - Caramelized Onions',
            photoUrl: menuImages.sandwiches.CaramelizedOnionsTwoHamburguers,
            description: 'Meat hamburguer, bread, bacon',
            price: '59.99',
            quantity: 0
        },
    ]
}



export default function CreateMenu () {
    const [menuForm, SetMenuForm] = useState<Menu>(menu)

    const copyForm = () =>{ return Array.from(menuForm.items)}

    const onDrop = (result: any ) => {
        if (!result.destination) return;
        const items = copyForm()
        const [excluded] =  items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, excluded)
        SetMenuForm({...menuForm, items: items})
    }


    function onQuantityUpdate (id: string, num: number) {
       const items = copyForm()
       const edited = items.find(item => item.id===id)
       if(edited) edited.quantity = num
       console.log('items', edited)
       SetMenuForm({...menuForm, items: items})

    }
    
    const onGrab = () => console.log('onGrab')
    return (
        
        <DragDropContext onDragEnd={onDrop}  onDragStart={onGrab}>
                <Droppable droppableId="menuItems">
                    {(provided) => (
                        <ul id="menuItems" {...provided.droppableProps}  ref={provided.innerRef}> 
                            {menuForm.items.map(({id, title, description,price, photoUrl, quantity}, index)=>{
                                return (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) =>(
                                            <li 
                                                className="menuItem" 
                                                ref={provided.innerRef}    
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps} 
                                            >
                                                <div className="menuItemContainer">

                                                    <div className="title"><p>{title}</p></div>
                                                    <img className="photo" src={photoUrl} />
                                                    <div className="description"><p>{description}</p></div>
                                                    <div className="price"><p>{'$ ' + price}</p></div>
                                                    <div className="qtyBtn">
                                                        <ItemQuantityButton  num={quantity} id={id} updateNum={onQuantityUpdate} />
                                                    </div>

                                                </div>
                                            </li>
                                        )
                                            
                                        }
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}

                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
 
    )
}