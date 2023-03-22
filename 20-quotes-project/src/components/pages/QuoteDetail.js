import {Fragment} from "react";
import {Link, Route, useParams} from "react-router-dom";
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

            <HighlightedQuote text={quote.text} author={quote.author}/>
            <div className={'centered'}>

                <Route path={`/quotes/${params.quoteId}`} exact>
                    <Link className={'btn--flat'} to={`/quotes/${params.quoteId}/comments`}>
                        Load Comments
                    </Link>

                </Route>


            </div>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments/>
            </Route>
        </Fragment>)

}

export default QuoteDetail