import path from "path";
import fs from "fs/promises";
import { GetStaticProps, NextPage } from "next";
import { ProductInterface } from "data/types/product.interface";
import Link from "next/link";

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
  const result = await fs.readFile(
    path.join(process.cwd(), "data", "dummy-backend.json"),
    { encoding: "utf-8" }
  );

  const parsedData = JSON.parse(result);

  return {
    props: {
      products: parsedData.products,
    },
    revalidate: 60,
  };
};

export default HomePage;
