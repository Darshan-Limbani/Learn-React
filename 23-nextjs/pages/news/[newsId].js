import {useRouter} from "next/router";

function News() {

    const router = useRouter()
    const newsId = router.query.newsId;
    console.log(newsId)
    return <p>Detail News</p>
}

export default News
