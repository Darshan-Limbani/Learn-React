import {Fragment} from "react";
import {Route, useParams} from "react-router-dom";
import Comments from "../comments/Comments";

const QuoteDetail = () => {

    const params = useParams()

    return (
        <Fragment>
            <p>This is Quote Details Page</p>
            <p>{params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comment`}>
                <Comments/>
            </Route>
        </Fragment>)

}

export default QuoteDetail