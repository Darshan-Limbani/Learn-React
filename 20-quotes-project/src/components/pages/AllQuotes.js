import QuoteList from "../quotes/QuoteList";
import useHttp from "../hooks/use-http";
import {getAllQuotes} from "../lib/api";
import {useEffect} from "react";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuotesFound from "../quotes/NoQuotesFound";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Pandit Jawaharlal Nehru', text: "Ignorance is always afraid of change."},
    {
        id: 'q2',
        author: 'Sardar Vallabhbhai Patel',
        text: "A war based on Satyagraha is always of two kinds. One is the war we wage against injustice and the other we fight against our own weaknesses."
    }
]

const AllQuotes = () => {

    const {sendRequest, status, data: loadedQuotes, error} = useHttp(getAllQuotes, true)


    useEffect(() => {
        sendRequest()
    }, [])

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

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound/>
    }


    return (<QuoteList quotes={loadedQuotes}/>)
}

export default AllQuotes;