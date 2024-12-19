import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const orders = [
    {
      id: 321,
      date: '2024-12-18',
      products: [
        { name: 'Mop', qty: 1 },
        { name: 'Bucket', qty: 1 }
      ],
      delivered: true
    },
    {
      id: 322,
      date: '2024-12-17',
      products: [
        { name: '"Comfort" Chair', qty: 2 },
        { name: 'The Foot', qty: 1 }
      ],
      delivered: false
    },
    {
      id: 333,
      date: '2024-12-15',
      products: [
        { name: '1500ml soy sauce personal lubricant', qty: 1 }
      ],
      delivered: true
    }
  ];

  return (
    <>
      <h1>Really weird sex stuff</h1>
      <p>Welcome back Trent Archer</p>
      
      <div className="card">
        <p>
          Here are your most recent orders
        </p>
      </div>

      <table className="w-full border-collapse border mt-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Products</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border p-2">#{order.id}</td>
              <td className="border p-2">{new Date(order.date).toLocaleDateString()}</td>
              <td className="border p-2">
                <ul className="list-none">
                  {order.products.map((product, idx) => (
                    <li key={idx}>
                      {product.qty}x {product.name}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="border p-2">
                {order.delivered ? 'Delivered' : 'Pending'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App