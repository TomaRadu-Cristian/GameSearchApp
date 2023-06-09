import { Button, HStack, Img, List, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-link";

interface Props {
  onSelectGenres: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenres }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <List key={genre.id} paddingY="5px">
          <HStack>
            <Img
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImgUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenres(genre)}
              fontSize={"md"}
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </List>
      ))}
    </List>
  );
};

export default GenreList;
