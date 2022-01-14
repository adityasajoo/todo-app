import React from 'react'
import Nav from './Nav'
import TodoList from './TodoList'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="dashboard-contianer" style={{height: '100%'}} >
            <Nav />
            <div className="dashboard">
                <TodoList branch="todo"/>
                <TodoList branch="progress"/>
                <TodoList branch="done"/>
            </div>
        </div>
    )
}

export default Dashboard
