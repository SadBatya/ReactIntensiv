import { useState } from 'react';
import CreateProduct from './components/CreateProduct';
import ErrorMessage from './components/ErrorMessage';
import Modal from './components/Modal';
import Product from './components/Product';
import Loader from './components/loader';
import { useProducts } from './hooks/products';
import { IProduct } from './components/model';


function App() {
  const { loading, error, products, addProduct } = useProducts()
  const [modal, setModal ] = useState(true)

  const createHandler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  }
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      { loading && <Loader />}
      { error && <ErrorMessage error={error}/> }
      { products.map((product) => (<Product product={product} key={product.id} /> )) }



      {modal && <Modal title='Create new product'>
        <CreateProduct onCreate={createHandler}/>
      </Modal>}
    </div>
  );
}

export default App;
