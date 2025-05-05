import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Grid, IconButton, ListItem, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

interface UserListItemProps {
  avatarSrc: string;
  name: string;
  profileUrl: string;
  onFavClick: () => void;
  isFav?: boolean;
}

export const UserListItem = ({ avatarSrc, name, profileUrl, onFavClick, isFav = false }: UserListItemProps) => {
  return (
    <ListItem>
      <Link href={profileUrl} passHref>
        <Grid>
          <Image src={avatarSrc} alt={name} width={50} height={50} />
          <Typography variant="h6" component="h2">
            {name}
          </Typography>
        </Grid>

        <IconButton onClick={onFavClick} color="primary">
          {isFav ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
      </Link>
    </ListItem>
  );
};
