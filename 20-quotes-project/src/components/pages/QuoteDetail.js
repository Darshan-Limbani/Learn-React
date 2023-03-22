import {Fragment} from "react";
import {Route, useParams} from "react-router-dom";
import Comments from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Udit', text: "2 week ma React complete thaay to j Bake."},
    {id: 'q2', author: 'Udit parmar', text: "Chai hai to Jahan Hai.."}
]
const QuoteDetail = () => {

    const params = useParams()

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

    if (!quote) {
        return <p>No Quotes Found!</p>
    }

    return (
        <Fragment>
            {/*<p>This is Quote Details Page</p>*/}
            {/*<p>{params.quoteId}</p>*/}
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments/>
            </Route>
        </Fragment>)

}

export default QuoteDetail