import { getProducts } from "@/services/product";
import { ProductCard } from "@/components/productCard/productCard";
import { TitleText } from "@/components/titleText/titleText";
import Link from "next/link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IProduct } from "@/types";
import { MissingProducts } from "@/components/MissingProducts/MissingProducts";

interface Props {
  params: {
    category: string;
  };
}

export default async function ProductPage({ params }: Props) {
  
  //server-side fetching
  const products: IProduct[]  = await getProducts();
  const categoryId = Number(params.category);

  //determina que productos se deben mostrar
  const productsToShow: IProduct[] = categoryId === 0 ? products : products?.filter(p => p.categoryId === categoryId);

  const title =
    categoryId === 1
      ? "Bicicletas"
      : categoryId === 2
      ? "Scooters"
      : categoryId === 3
      ? "Triciclos"
      : "Esta categoria No Existe!! ☠️"

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <TitleText title={title} />
      <hr />
      <div className="flex flex-wrap justify-center gap-4 m-10">
        {
        !productsToShow ? (
          <MissingProducts />
        )
        : productsToShow.map((product, index) => (
          <ProductCard cards={product} key={index} />
        ))}
      </div>
      <div>
        <p className="p-3 m-auto rounded-b-sm bg-green-500 text-white font-bold font-mono text-center w-fit mt-5 text-2xl cursor-pointer hover:bg-green-600 mb-5">
          <ArrowBackIcon fontSize="large" />
          <Link href="/category">Vuelve a Categorías</Link>
        </p>
      </div>
    </div>
  );
}