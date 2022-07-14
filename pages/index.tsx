import path from "path";
import fs from "fs/promises";
import { GetStaticProps, NextPage } from "next";

interface IHomePageProps {
  products: Array<{ id: string; title: string }>;
}

const HomePage: NextPage<IHomePageProps> = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
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
