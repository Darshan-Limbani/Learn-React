import QuoteList from "../quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Udit', text: "2 week ma React complete thaay to j Bake."},
    {id: 'q2', author: 'Udit parmar', text: "Chai hai to Jahan Hai.."}
]

const AllQuotes = () => {
    return (<QuoteList quotes={DUMMY_QUOTES}/>)
}

export default AllQuotes;