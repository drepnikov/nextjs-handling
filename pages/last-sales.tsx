import * as React from "react";
import { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "data/helpers/fetcher";
import { SaleInterface } from "data/types/sale.interface";

interface ILastSalesPageProps {
  sales: SaleInterface[];
}

const LastSalesPage: NextPage<ILastSalesPageProps> = (props) => {
  const [sales, setSales] = useState<SaleInterface[]>(props.sales);

  const papa = useSWR(
    "https://dvrepa-ebcfe-default-rtdb.europe-west1.firebasedatabase.app/sales.json",
    fetcher
  );

  const { data, error } = papa;

  useEffect(() => {
    if (data) {
      setSales(
        Object.keys(data).map((s) => {
          return {
            volume: data[s].volume,
            username: data[s].username,
            id: s,
          };
        })
      );
    }
  }, [data]);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {sales.map((sale) => {
        return (
          <li key={sale.id}>
            {sale.username} - ${sale.volume}
          </li>
        );
      })}
    </ul>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(
    "https://dvrepa-ebcfe-default-rtdb.europe-west1.firebasedatabase.app/sales.json"
  );

  const parsedData = await data.json();

  return {
    props: {
      sales: Object.keys(parsedData).map((s) => {
        return {
          volume: parsedData[s].volume,
          username: parsedData[s].username,
          id: s,
        };
      }),
    },
  };
};

export default LastSalesPage;
