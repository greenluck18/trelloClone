import React, { useState } from "react";
import "./App.css"
import ReactDOM from 'react-dom';
import TrelloList from "./components/TrelloList";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { v4 as uuidv4 } from 'uuid';
import TrelloCard from "./components/TrelloCard";

const itemsFrom = [
    { id: uuidv4(), text: "Buy apples" },
    { id: uuidv4(), text: "Wash cat" },
    { id: uuidv4(), text: "information" }
]
const itemsDone = [
    { id: uuidv4(), text: "Grab Crab" },
    { id: uuidv4(), text: "Eat" }
]

const columns =
{
    [uuidv4()]: {
        title: "ToDo",
        items: itemsFrom
    },
    [uuidv4()]: {
        title: "Done",
        items: itemsDone
    }
}


const App = () => {

    const [boards, setBoards] = useState(columns);

    // const [boards, setBoards] = useState([
    //     { id: 1, title: "ToDo", items: [{ id: 1, text: "Buy apples" }, { id: 2, text: "Wash cat" }, { id: 3, text: "information" }] },
    //     { id: 2, title: "Done", items: [{ id: 1, text: "Grab Crab" }, { id: 2, text: "Eat" }] }
    // ])


    // let numberOfItems = 0;
    // columns.forEach(el => {
    //     numberOfItems = +numberOfItems + (el.items.length)
    // })

    const styles = {
        listsContainer: {
            display: "flex",
            flexDirection: "row",
            marginRight: 8
        }
    }

    const onDragEnd = () => {
        //TODO
    }

    const createPost = (newPost, columnName) => {
        let board = Object.entries(columns).find(el => {
             if (el[1].title == columnName) {
                el[1].items.push(newPost)
                console.log(el)
             }
            })
        setBoards([...Object.entries(columns)])
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
            <h1>Trello Clone</h1>
            <div style={styles.listsContainer}>
                {Object.entries(columns).map(([columnId, column], index) => {
                    return (
                        <TrelloList addNewCard={createPost} key={columnId} column={column} index={index} listId={columnId}/>)
                })}
            </div>
        </div>
        </DragDropContext>
    );
}
export default App;
