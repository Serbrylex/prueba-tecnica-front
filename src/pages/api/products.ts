// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {faker} from '@faker-js/faker'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<TProd[]>
  ) {
  const products: TProd[] = [...new Array(50)].map((_, index) => {
    return {  
        item_name: faker.commerce.product(),
        short_description: faker.commerce.productDescription(),
        quantity: Math.floor(Math.random() * 10) + 1,
        price_without_tax: Math.floor(Math.random() * 9000) + 1,
        shipping_fee: Math.floor(Math.random() * 50) + 1,
        image: faker.image.imageUrl(640, 480, 'commerce', true),
      }  
    })
    res.status(200).json(products);
}
