import React, { useReducer, useState } from 'react'
import Tinput from "../components/tool-input"
import Tbutton from "../components/tool-button"
import { Row, Col } from "react-bootstrap"
import Hero from "../components/hero"
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, [])
  console.log("todos", todos)
  const [title, setTitle] = useState("")

  function reducer(state, action) {
    console.log("dispatch call", state, action)
    switch (action.type) {
      case 'add':
        var list = add_todo(state, action.payload.title)
        return list
      case 'delete':
        var deletedList = delete_todo(state, action.payload.index);
        return deletedList
      case 'toggle':
        var temp = [...state];
        temp[action.payload.index].completed = !action.payload.status
        return temp
      default:
        return state

    }
  }
  function add_todo(state, todo) {
    var temp = [...state]
    temp.push({ id: Date.now(), title: todo, completed: false })
    return temp
  }
  function delete_todo(state, index) {
    var temp = [...state]
    temp.splice(index, 1)
    return temp
  }
  const handleAdd = () => {
    dispatch({ type: "add", payload: { title } })
    setTitle("")
  }


  return (
    <div className="todo-container">
      <Hero />
      <Row>
        <Col md={12} className="d-flex flex-row align-items-center">
          <Tinput onChange={(val) => setTitle(val)} value={title} className="w-100" />
          {/* <Tbutton content="Add" onClick={() => handleAdd()} /> */}
          <i className="fas fa-plus p-1 add-todo-btn" onClick={() => handleAdd()} ></i>
        </Col>
        <Col md={12} className="d-flex flex-column">

          <motion.div
            className="mt-3"
            initial="hidden"
            animate="visible"
          >

            <AnimatePresence >
              {todos && todos.length > 0 &&
                todos.map((todo, index) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    // exit={{ opacity: 0, x: -100 }}
                    key={index}
                    className="d-flex flex-row"
                    transition={{
                      type: "spring",
                      bounce: 0.75,
                      stiffness: 120
                    }}
                  >
                    <div
                      className={`w-100 d-flex align-items-center justify-content-between todo-item  my-1 ${todo.completed ? 'todo-completed' : ''}`}
                    >
                      <div
                        className="w-100"
                        onClick={() => dispatch({ type: "toggle", payload: { index, status: todo.completed } })}
                      >
                        <input type="checkbox" checked={todo.completed} className="tool-checkbox "></input>
                        <span style={todo.completed ? { textDecoration: "line-through" } : {}} className="mx-2">
                          {todo.title}
                        </span>
                      </div>
                      <div>
                        <i className="fas fa-trash" onClick={() => dispatch({ type: "delete", payload: { index } })}></i>
                      </div>
                    </div>

                  </motion.div>
                ))

                || <span className="custom-muted-text">
                  No tasks to show
                </span>

              }
            </AnimatePresence>

          </motion.div>
        </Col>
      </Row>

    </div>
  )
}

export default Todo
