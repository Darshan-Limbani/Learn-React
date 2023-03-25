import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import {useRouter} from "next/router";
import {Fragment} from "react";
import Head from "next/head";

function NewMeetupPage() {

    const router = useRouter()

    async function addMeetupHandler(meetupData) {
        console.log(meetupData)

        try {
            const response = await fetch('/api/new-meetup', {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('ERROR in Meetup');
            }

            const data = await response.json();
            console.log(data)
            router.push('/')

            console.log(meetupData)
        } catch (err) {
            console.log("ERROR : ", err)
        }

    }

    return <Fragment>
        <Head>
            <title>Add a new Meetup</title>
            <meta name={'description'}
                  content={'Add your own meetups and create amazing networking opportunities.'}/>
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </Fragment>

}

export default NewMeetupPage;