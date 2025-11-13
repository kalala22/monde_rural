import Users from '../models/Users.js'

export async function getAllResources(req, res) {
  try {
    // Logic to fetch all resources from the database or any other source
    const resources = await Users.findAll() // Replace with actual data fetching logic
    res.status(200).json(resources)
  } catch (error) {
    console.error('Error fetching resources:', error)
    res.status(500).json({ error: 'Failed to fetch resources' })
  }
}
