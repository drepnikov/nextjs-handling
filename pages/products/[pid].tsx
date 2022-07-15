import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import fs from "fs/promises";
import path from "path";
import { ProductInterface } from "data/types/product.interface";

interface IProductDetailPageProps {
  product?: ProductInterface;
}

const ProductDetailPage: NextPage<IProductDetailPageProps> = ({ product }) => {
  if (!product) return <div>Loading...</div>;

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
};

const getData = async () => {
  const result = await fs.readFile(
    path.join(process.cwd(), "data", "dummy-backend.json"),
    { encoding: "utf-8" }
  );

  return JSON.parse(result) as { products: ProductInterface[] };
};

export const getStaticProps: GetStaticProps<IProductDetailPageProps> = async (
  context
) => {
  const data = await getData();

  const product = data.products.find(
    (p: ProductInterface) => p.id === context.params?.pid
  );

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getData();

  return {
    paths: data.products.map((p: ProductInterface) => ({
      params: { pid: p.id },
    })),
    fallback: true,
  };
};

export default ProductDetailPage;
