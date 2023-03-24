import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS = [{
    id: 'm1',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_München.jpg/1280px-Stadtbild_München.jpg',
    title: 'A First Meetup',
    address: 'Science Center,Surat',
    description: "This is first meetup!"
}, {
    id: 'm2',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_München.jpg/1280px-Stadtbild_München.jpg',
    title: 'A Second Meetup',
    address: 'Marine Drive,Mumbai',
    description: "This is Second meetup!"
}]


function HomePage(props) {

    return <MeetupList meetups={props.meetups}/>

}

export async function getServerSideProps(context){

    const req = context.req;
    const res = context.res;

    return{
        props:{
            meetups : DUMMY_MEETUPS
        }
    }
}


// export async function getStaticProps(context) {
//
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//         revalidate:1
//     }
// }

export default HomePage