import MeetupList from "@/components/meetups/MeetupList";
import {MongoClient} from "mongodb";
import {Fragment} from "react";
import Head from "next/head";


function HomePage(props) {

    return (

        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name={'description'} content={'Browse a huge list of highly active React meetups!'}/>
            </Head>
            <MeetupList meetups={props.meetups}/>
        </Fragment>
    )

}

// export async function getServerSideProps(context){
//
//     const req = context.req;
//     const res = context.res;
//
//     return{
//         props:{
//             meetups : DUMMY_MEETUPS
//         }
//     }
// }


export async function getStaticProps(context) {

    const client = await MongoClient.connect('mongodb+srv://nasa-api:m0s5FTv9G5OIJ8jc@nasacluster.0qtfgqd.mongodb.net/meetups?retryWrites=true&w=majority')

    const db = client.db()
    const meetupCollection = db.collection('meetups')

    const meetups = await meetupCollection.find().toArray();
    console.log(meetups);

    client.close();

    console.log('---------------------------------------', meetups)
    console.log("meetups[0]._id.toString() : ", meetups[0]._id.toString())

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()

            }))
        },
        revalidate: 1
    }
}

export default HomePage