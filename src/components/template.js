import React from "react";
import { useState} from "react";
import "../assets/alignments.css"

export const MainInfo = () => {
    const [text, setText] = useState("")
    const [items, setItems] = useState([])

    const addToList = (e) => {
        // adda an item ot the items array
        e.preventDefault()

        if (text !== ""){
            items.push(text)
            setItems(items)
            setText("")
        } 
    }

    const deleteFromList = () => {
        // finds and deletes an item from the items array
    }

    const updateFromList = () => {
        // changes the item of the items array
    }

    return (
        <>
            <div className="to-center">
                <div className="box">
                    <div>
                        <h1 className='align-text'>Tylers Todo App</h1>
                    </div>
                    <div>
                        <form className="align-input">
                            <label>Add an Item:</label>
                            <input 
                                type="text" 
                                value={text} 
                                onChange={(e) => setText(e.target.value)}
                            />
                            <button type="button" onClick={(e) => addToList(e)}>Add</button>
                        </form>
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}