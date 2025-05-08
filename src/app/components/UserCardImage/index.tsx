import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import type { JSX } from 'react';
import { FavoriteButton } from '../FavoriteButton';

type UserCardImageProps = {
  /** The URL of the user's avatar image. */
  src: string;
  /** The alt text for the avatar image. */
  alt: string;
  /** The username of the user. */
  username: string;
  /** The height of the avatar image. Defaults to 240. */
  height?: number;
};

/**
 * A component to display the user's avatar image and favorite button.
 *
 * @param {UserCardImageProps} props - The props for the UserCardImage component.
 * @returns {JSX.Element} The rendered UserCardImage component.
 */
export const UserCardImage = ({ src, alt, username, height = 240 }: UserCardImageProps): JSX.Element => {
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
