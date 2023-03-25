import MeetupDetail from "@/components/meetups/MeetupDetail";
import {MongoClient, ObjectId} from "mongodb";
import {Fragment} from "react";
import Head from "next/head";

function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name={'description'} content={props.meetupData.description}/>
            </Head>

            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
            /></Fragment>)

}

export async function getStaticPaths() {

    const client = await MongoClient.connect('mongodb+srv://nasa-api:m0s5FTv9G5OIJ8jc@nasacluster.0qtfgqd.mongodb.net/meetups?retryWrites=true&w=majority')

    const db = client.db()
    const meetupCollection = db.collection('meetups')
    const meetups = await meetupCollection.find({}, {_id: 1}).toArray()

    console.log(meetups)
    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({params: {meetupId: meetup._id.toString()}}))
    }

}

export async function getStaticProps(context) {

    console.log('----------------------------------------------------------------------------')
    console.log('----------------------------------------------------------------------------')

    const meetupId = context.params.meetupId

    const client = await MongoClient.connect('mongodb+srv://nasa-api:m0s5FTv9G5OIJ8jc@nasacluster.0qtfgqd.mongodb.net/meetups?retryWrites=true&w=majority')

    const db = client.db()
    const meetupCollection = db.collection('meetups')
    console.log("meetupId : ", meetupId)
    const selectedMeetups = await meetupCollection.findOne({_id: new ObjectId(meetupId)})

    return {
        props: {
            meetupData:
                {
                    id: selectedMeetups._id.toString(),
                    title: selectedMeetups.title,
                    address: selectedMeetups.address,
                    image: selectedMeetups.image,
                    description: selectedMeetups.description
                }
        }
    }

}

export default MeetupDetails