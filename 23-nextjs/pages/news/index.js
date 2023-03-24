import {Fragment} from "react";
import Link from 'next/link'

function NewsPage() {
    return (
        <Fragment>
            <p>This is News Page</p>
            <ul>
                <li>
                    <Link href={'/news/nextjs-is-great-framework'}>
                        nextjs is great framework
                    </Link>
                </li>
                <li>
                    Something Else
                </li>
            </ul>
        </Fragment>
    )
}

export default NewsPage
