import { client } from '../../../utils/lib/client'

export default async function handler(req, res) {
  if (req.method === 'GET'){
    const query = `*[_type == 'members']`

    const data = await client.fetch(query)

    res.status(200).json(data)
  } else if ( req.method === 'POST') {
    const document = req.body;

		client.create(document).then(() => res.status(201).json('Membre ajouté'))
  }
}