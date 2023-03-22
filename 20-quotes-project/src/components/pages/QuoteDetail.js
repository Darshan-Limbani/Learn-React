import {Fragment} from "react";
import {useParams} from "react-router-dom";

const QuoteDetail = () => {

    const params = useParams()

    return (
        <Fragment>
            <p>This is Quote Details Page</p>
            <p>{params.quoteId}</p>
        </Fragment>)

}

export default QuoteDetail