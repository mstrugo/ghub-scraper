import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { FavoriteButton } from '../FavoriteButton';

type UserCardImageProps = {
  src: string;
  alt: string;
  username: string;
  height?: number | string;
};

export const UserCardImage = ({ src, alt, height = 240, username }: UserCardImageProps) => {
  return (
    <>
      <Box
        position="absolute"
        marginTop={1}
        marginLeft={1}
        zIndex={1}
        border={1}
        borderRadius={50}
        borderColor="warning.main">
        <FavoriteButton username={username} />
      </Box>
      <CardMedia component="img" alt={alt} height={height} image={src} />
    </>
  );
};
