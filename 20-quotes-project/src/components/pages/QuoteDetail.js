import {Fragment, useEffect} from "react";
import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from "../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Udit', text: "2 week ma React complete thaay to j Bake."},
    {id: 'q2', author: 'Udit parmar', text: "Chai hai to Jahan Hai.."}
]
const QuoteDetail = () => {

    const params = useParams()
    const match = useRouteMatch()

    const {quoteId} = params;

    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true)


    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])


    if (status == 'pending') {
        return (
            <div className={'centered'}>
                <LoadingSpinner/>
            </div>
        )
    }


    if (error) {
        return (
            <p className={'centered focused'}>{error}</p>
        )
    }

    if (!loadedQuote.text) {
        return <p>No Quotes Found!</p>
    }

    return (
        <Fragment>

            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
            <div className={'centered'}>

                <Route path={match.path} exact>
                    <Link className={'btn--flat'} to={`${match.path}/comments`}>
                        Load Comments
                    </Link>

                </Route>

            </div>
            <Route path={`${match.path}/comments`}>
                }
                <Comments/>
            </Route>
        </Fragment>)

}

export default QuoteDetail