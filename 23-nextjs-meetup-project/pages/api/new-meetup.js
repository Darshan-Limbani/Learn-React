import {MongoClient} from 'mongodb'

async function handler(req, res) {

    if (req.method === 'POST') {

        const data = req.body
        const client = await MongoClient.connect('mongodb+srv://nasa-api:m0s5FTv9G5OIJ8jc@nasacluster.0qtfgqd.mongodb.net/meetups?retryWrites=true&w=majority')

        const db = client.db()
        const meetupCollection = db.collection('meetups')
        const result = await meetupCollection.insertOne(data)

        console.log(result)

        await client.close()

        res.status(201).json({message: "Meetup Inserted!"})

    }

}

export default handler