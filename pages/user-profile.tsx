import { GetServerSideProps, NextPage } from "next";
import { ProfileInterface } from "data/types/profile.interface";

interface IUserProfilePageProps {
  profile: ProfileInterface;
}

const UserProfilePage: NextPage<IUserProfilePageProps> = ({ profile }) => {
  return <h1>User profile: {profile.username}</h1>;
};

export const getServerSideProps: GetServerSideProps<
  IUserProfilePageProps
> = async (context) => {
  const { req, res } = context;

  return {
    props: {
      profile: {
        username: "Max",
      },
    },
  };
};

export default UserProfilePage;
