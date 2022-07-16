import fs from "fs/promises";
import path from "path";
import { ProductInterface } from "data/types/product.interface";

const getData = async () => {
  const result = await fs.readFile(
    path.join(process.cwd(), "data", "dummy-backend.json"),
    { encoding: "utf-8" }
  );

  return JSON.parse(result) as { products: ProductInterface[] };
};

export { getData };
