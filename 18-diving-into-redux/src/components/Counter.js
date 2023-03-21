import classes from './Counter.module.css';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../store/counter";

const Counter = () => {
    const dispatch = useDispatch();

    const counter = useSelector(state => state.counter.counter)

    const show = useSelector(state => state.counter.showCounter)

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle())
    };

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(10))
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}

            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 10</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;


// ----------------------------------------------
// ----------------------------------------------

// ********* Class Based Components *********


/*class Counter extends Component {


    toggleCounterHandler() {
    };

    decrementHandler() {
        this.props.decrement()
    };


    incrementHandler() {
        this.props.increment()
    }

    render() {
        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div className={classes.value}>{this.props.counter}</div>

                <div>
                    <button onClick={this.incrementHandler.bind(this)}>Increment</button>
                    <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
                </div>
                <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
            </main>
        );

    }

}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}


const mapDispatchToProp = (dispatch) => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'})
    }
}


export default connect(mapStateToProps, mapDispatchToProp)(Counter)*/
