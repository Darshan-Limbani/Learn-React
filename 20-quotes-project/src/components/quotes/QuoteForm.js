import {Fragment, useRef, useState} from 'react';

import classes from './QuoteForm.module.css';
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import {Prompt} from "react-router-dom";

const QuoteForm = (props) => {

    const [isChanged, setIsChanged] = useState(false);

    const authorInputRef = useRef();
    const textInputRef = useRef();

    function submitFormHandler(event) {
        event.preventDefault();

        const enteredAuthor = authorInputRef.current.value;
        const enteredText = textInputRef.current.value;

        if (enteredAuthor?.trim().length === 0) {
            alert('Author Name is Required!!')
            return
        }
        if (enteredText?.trim().length === 0) {
            alert('Quotes Text is Required!!')
            return;
        }

        props.onAddQuote({author: enteredAuthor, text: enteredText});
    }

    const finishChangedHandler = () => {
        setIsChanged(false)
    }

    const formFocusedHandler = () => {
        setIsChanged(true)
    }

    return (<Fragment>
            <Prompt when={isChanged}
                    message={(location) => 'Are you sure you want to exit? All your data will be lost'}/>
            <Card>
                <form className={classes.form} onSubmit={submitFormHandler} onFocus={formFocusedHandler}>
                    {props.isLoading && (<div className={classes.loading}>
                        <LoadingSpinner/>
                    </div>)}
                    <div className={classes.control}>
                        <label htmlFor='quote_author'>Author</label>
                        <input type='text' id='quote_author' ref={authorInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='text'>Text</label>
                        <textarea id='text' rows='5' ref={textInputRef}></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button className='btn' onClick={finishChangedHandler}>Add Quote</button>
                    </div>
                </form>
            </Card>

        </Fragment>
    );
};

export default QuoteForm;
