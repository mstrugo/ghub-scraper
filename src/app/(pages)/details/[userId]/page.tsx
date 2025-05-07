import Grid from '@mui/material/Grid';
import { getUserDetails } from 'hooks/api/useGetUserDetails';
import { NotFound, UserCard, UserRepositoriesList } from '~components';

type UserDetailsPageProps = {
  params: Promise<{ userId: string }>;
};

const UserDetailsPage = async ({ params }: UserDetailsPageProps) => {
  const { userId } = await params;
  const data = await getUserDetails(userId);

  if (!data) {
    return <NotFound />;
  }

  const { repositories, public_repos, ...userData } = data;

  return (
    <Grid container size={{ xs: 12 }} justifyContent="space-between" component="section" height="100%" flex={1}>
      <Grid size={{ xs: 12, sm: 6, md: 5, lg: 6 }} height="100%">
        <UserCard data={userData} />
      </Grid>
      <Grid size={{ xs: 12, sm: 5, md: 6, lg: 5 }} height="100%">
        <UserRepositoriesList data={repositories} amount={public_repos} />
      </Grid>
    </Grid>
  );
};

export default UserDetailsPage;
