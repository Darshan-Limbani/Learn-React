import {Link} from "react-router-dom";

const Products = () => {
    return (
        <section>
            <h1>The Product Page</h1>
            <ul>
                <ul><Link to={'products/p1'}>Book</Link></ul>
                <ul><Link to={'products/p2'}>Pen</Link></ul>
                <ul><Link to={'products/p3'}>A Online Course </Link></ul>
            </ul>
        </section>
    )
}

export default Products;