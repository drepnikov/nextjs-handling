import * as React from "react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "data/helpers/fetcher";

interface ILastSalesPageProps {}

const LastSalesPage: NextPage<ILastSalesPageProps> = () => {
  const [sales, setSales] = useState<
    { username: string; volume: number; id: string }[]
  >([]);

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

export default LastSalesPage;
