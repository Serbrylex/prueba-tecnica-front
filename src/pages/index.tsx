import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useState, useEffect } from 'react';

export default function Home() {

  const [products, setProducts] = useState<TProd[] | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  useEffect(()=> {
    const fetchData = async () => {
      const response = await fetch('/api/products', {
        method: 'POST',
        body: JSON.stringify({
          limit: 100,
        }),
      });
      return response.json();
    }

    fetchData().then((data) => {
      setProducts(data);
      console.log(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div>
      {products !== undefined && products.map((prod, index)=>(
        <div key={index}>
          {prod.item_name}
        </div>
      ))}
    </div>
  )
}
