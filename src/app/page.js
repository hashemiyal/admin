import HeroSection from "../../components/Herosection";
import LatestProducts from "../../components/LatestProducts";
export default async function Home({searchParams}) {
  let url;
  let {category} =  await searchParams;
  category
    ? (url = `${process.env.NEXT_PUBLIC_API_URL}/products?category=${category}`)
    : (url = `${process.env.NEXT_PUBLIC_API_URL}/products`);
  const res = await fetch(url);
  const products = await res.json();
  return (
    <>
       <HeroSection/>
       <LatestProducts products={products} category={category}/>
    </>
  );
}
