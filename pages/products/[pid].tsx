import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ProductInterface } from "data/types/product.interface";
import { getData } from "data/helpers/getData";

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
