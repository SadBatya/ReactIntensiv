import { useState } from "react";
import { IProduct } from "./model";

interface ProductProps{
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false)
  const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
  const btnClasses = ['py-2 px-4 rounded', btnBgClassName]
  return (
    <div className='border py-2 px-4 rounded flex flex-col items-center mb-2'>
      <img src={ product.image} className="w-1/6" alt={product.title}/>
      <p>{ product.title}</p>
      {/* <p className="font-bold">{product.price}$</p> */}
      <button className= {btnClasses.join(' ')}
      onClick={() => setDetails(prev => !prev)}>
        { details ? 'Hide Details' : 'Show Details'}
      </button>
      {details && <div>
        <p>{ product.description }</p>
        <p><span style={{fontWeight:'bold'}}>Rate:{product.rating.rate}</span></p>
      </div>}
    </div>
  );
}
