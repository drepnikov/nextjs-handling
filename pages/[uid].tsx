import { GetServerSideProps, NextPage } from "next";

interface IUserProfilePageProps {
  id: string;
}

const UserIdPage: NextPage<IUserProfilePageProps> = ({ id }) => {
  return <h1>User id: {id}</h1>;
};

export const getServerSideProps: GetServerSideProps<
  IUserProfilePageProps
> = async (context) => {
  const { params } = context;

  const id = params?.uid as string;

  return {
    props: { id },
  };
};

export default UserIdPage;
