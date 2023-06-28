import clientPromise from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, profilePic } = req.body;

    const client = await clientPromise;
    const db = client.db();

    try {
      // Save the user data to the database
      await db.collection('users').insertOne({ fullName, email, profilePic });

      res.status(201).json({ message: 'User data saved successfully' });
    } catch (error) {
      console.error('Error saving user data:', error);
      res.status(500).json({ message: 'Error saving user data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
