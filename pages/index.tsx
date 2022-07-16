import { GetStaticProps, NextPage } from "next";
import { ProductInterface } from "data/types/product.interface";
import Link from "next/link";
import { getData } from "data/helpers/getData";

interface IHomePageProps {
  products: ProductInterface[];
}

const HomePage: NextPage<IHomePageProps> = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export const getStaticProps: GetStaticProps<IHomePageProps> = async () => {
  const data = await getData();

  return {
    props: {
      products: data.products,
    },
    revalidate: 60,
  };
};

export default HomePage;
