import Grid from '@mui/material/Grid';
import { getUserDetails } from 'hooks/api/useGetUserDetails';
import { NotFound, UserCard } from '~components';

type UserDetailsPageProps = {
  params: Promise<{ userId: string }>;
};

const UserDetailsPage = async ({ params }: UserDetailsPageProps) => {
  const { userId } = await params;
  const data = await getUserDetails(userId);

  if (!data) {
    return <NotFound />;
  }

  return (
    <Grid container size={{ xs: 12 }} justifyContent="space-between" component="section">
      <Grid size={5}>
        <UserCard data={data} />
      </Grid>
      <Grid size={6}>Repositories</Grid>
    </Grid>
  );
};

export default UserDetailsPage;
