import LatestProducts from "../../../components/LatestProducts";
const Products = async ({searchParams}) => {
    let url;
    let {category} = await searchParams
    category
      ? (url = `${process.env.NEXT_PUBLIC_API_URL}/products?category=${category}`)
      : (url = `${process.env.NEXT_PUBLIC_API_URL}/products`);
    const res = await fetch(url);
    const products = await res.json();
    return ( <LatestProducts products={products} category={category}/> );
}
 
export default Products;