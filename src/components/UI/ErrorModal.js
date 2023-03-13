import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = props => {

    return (<div className={classes.backdrop}>
        <Card>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button>
                    okay
                </Button>
            </footer>
        </Card>
    </div>)

}

export default ErrorModal