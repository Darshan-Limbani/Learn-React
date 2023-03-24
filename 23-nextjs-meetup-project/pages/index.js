import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_München.jpg/1280px-Stadtbild_München.jpg',
        title: 'A First Meetup',
        address: 'Science Center,Surat',
        description: "This is first meetup!"

    },
    {
        id: 'm2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_München.jpg/1280px-Stadtbild_München.jpg',
        title: 'A Second Meetup',
        address: 'Marine Drive,Mumbai',
        description: "This is Second meetup!"

    }
]


function HomePage() {

    return <MeetupList meetups={DUMMY_MEETUPS}/>

}

export default HomePage