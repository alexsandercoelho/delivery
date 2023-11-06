import ProductCard from "./ProductCard";
import { checkIsSelected } from "./helpers";
import { Product } from "./types";

type Props = {
  products: Product[];
  selectedProducts: Product[];
  onSelectProduct: (product: Product) => void;
  }

function ProductsList({ products, selectedProducts }: Props) {
  return (
    <div className="orders-list-container">
      <div className="orders-list-items">
        {products.map(product => (
           <ProductCard 
           key={product.id} 
           product={product}
           onSelectProduct={onSelectProduct,s}
           isSelected={checkIsSelected}
           /> 
        ))} 
      </div>
    </div>
  )
}

export default ProductsList;