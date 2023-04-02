// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: any;
}

export async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const jsonData = await response.json()
    return jsonData
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = await getData()
  res.status(200).json(data)
}

/*
//basic
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  //const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //const data = await response.json();
  const data = await getData()
  res.status(200).json(data)
}
*/