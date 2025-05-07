import Grid from '@mui/material/Grid';
import { HeaderNavigation, NotFound, UserCard, UserRepositoriesList } from 'app/components';
import { getUserDetails } from 'hooks/api/useGetUserDetails';
import type { Metadata } from 'next';

type UserDetailsPageProps = {
  params: Promise<{ userId: string }>;
};

export const metadata: Metadata = {
  title: {
    template: '%s | GitHub Scraper App',
    default: 'User Details',
  },
  description: 'Discover this amazing GitHub member!',
};

const UserDetailsPage = async ({ params }: UserDetailsPageProps) => {
  const { userId } = await params;
  const data = await getUserDetails(userId);

  if (!data) {
    return <NotFound />;
  }

  const { repositories, public_repos, ...userData } = data;

  return (
    <Grid
      container
      size={{ xs: 12 }}
      justifyContent="space-between"
      component="section"
      height="100%"
      flex={1}
      gap={{ xs: 4, sm: 1 }}>
      <Grid size={12} display="flex" alignItems="center" marginBottom={{ xs: 0, md: 2 }} gap={2}>
        <HeaderNavigation text="User Details" />
      </Grid>
      <Grid size={{ xs: 12, sm: 5, lg: 6 }}>
        <UserCard data={userData} />
      </Grid>
      <Grid size={{ xs: 12, sm: 6, lg: 5 }}>
        <UserRepositoriesList data={repositories} amount={public_repos} />
      </Grid>
    </Grid>
  );
};

export default UserDetailsPage;
