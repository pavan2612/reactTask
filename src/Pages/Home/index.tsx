import React, { useState } from "react";
import { Users } from "../../Components/Users";
import { Counter } from "../../Components/Counter";
import { DataFetcher } from "../../Components/DataFetcher";
import { TodoComponent } from "../../Components/Todo"
import "./home.css";

const tabsTitle = ['Users', 'Counter', 'DataFetcher', 'Todo']

export const HomePage = () => {
    const [activeTab, setActiveTab] = useState('Users')
    const [activeTabIndex, setActiveTabIndex] = useState(0)

    const handleTab = (title: string, index: number) => {
        setActiveTab(title)
        setActiveTabIndex(index)
    }
    return (
        <div className="home-page-container">
            <div className="tab">
                {
                    tabsTitle.map((title: string, i: number) => {
                        return (
                            <h4 onClick={() => handleTab(title, i)} key={i} className={activeTabIndex === i ? 'active' : ''}>{title}</h4>

                        )
                    })
                }
            </div>
            {activeTab === 'Users' ? <Users /> : activeTab === 'Counter' ? <Counter /> : activeTab === 'DataFetcher' ? <DataFetcher /> : <TodoComponent />}
        </div>
    )
}
