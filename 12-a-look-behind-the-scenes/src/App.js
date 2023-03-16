import React, {useCallback, useState} from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {

    const [showParagraph, setShowParagraph] = useState(false);

    const [allowToggle, setAllowToggle] = useState(false);

    console.log("APP RUNNING")

    const allowToggleHandler = () => {
        setAllowToggle(true)
    }

    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle)
            setShowParagraph((prevShowParagraph) => !prevShowParagraph)
    }, [allowToggle]);

    return (
        <div className="app">
            <h1>Hi there!</h1>
            <DemoOutput show={showParagraph}/>
            <Button onClick={allowToggleHandler}>Allow Toggling</Button>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
        </div>
    );
}

export default App;
