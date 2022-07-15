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

export const getStaticProps: GetStaticProps<IProductDetailPageProps> = async (
  context
) => {
  const result = await fs.readFile(
    path.join(process.cwd(), "data", "dummy-backend.json"),
    { encoding: "utf-8" }
  );
  const parsedData = JSON.parse(result);

  const product = parsedData.products.find(
    (p: ProductInterface) => p.id === context.params?.pid
  );

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const result = await fs.readFile(
    path.join(process.cwd(), "data", "dummy-backend.json"),
    { encoding: "utf-8" }
  );

  const parsedData = JSON.parse(result);

  return {
    // paths: parsedData.products.map((p: ProductInterface) => ({
    //   params: { pid: p.id },
    // })),
    paths: [{ params: { pid: "p1" } }],
    fallback: true,
  };
};
export default ProductDetailPage;
