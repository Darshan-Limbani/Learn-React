import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail
            image={'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_München.jpg/1280px-Stadtbild_München.jpg'}
            title={'First Meetup'}
            address={'Some Street 5, Some City'}
            description={'This is a first meetup'}/>
    )

}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupId

    console.log('meetupId : ', meetupId)

    return {
        props: {
            meetupData: {
                id: meetupId,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_München.jpg/1280px-Stadtbild_München.jpg',
                title: 'First Meetup',
                address: 'Some Street 5, Some City',
                description: 'This is a first meetup'
            }
        }
    }
}

export default MeetupDetails