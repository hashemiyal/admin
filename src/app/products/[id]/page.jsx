
import ProductDetailsComponent from "../../../../components/ProductDetails";
const ProductDetails = async ({params}) => {
    const {id}= await params;
    const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/`+id);
    let product=await res.json();
    return ( 
        <ProductDetailsComponent product={product}/>
     );
}
 
export default ProductDetails;