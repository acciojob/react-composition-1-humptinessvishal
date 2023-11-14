import React, { useState } from "react";

const Tabs = ({ tabprop }) => {
    const [content, setContent] = useState(tabprop[0].content);
    return (
        <div>
            <ul>
                {tabprop.map((tab) => (
                    <li onClick={() => setContent(tab.content)}>{tab.title}</li>
                ))}
            </ul>
            <h1>{content}</h1>
        </div>
    )
}

export default Tabs;