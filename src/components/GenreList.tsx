import {
  Button,
  HStack,
  Heading,
  Img,
  List,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-link";

interface Props {
  onSelectGenres: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenres, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading marginBottom={4}>Genres</Heading>
      <List>
        {data.map((genre) => (
          <List key={genre.id} paddingY="5px">
            <HStack>
              <Img
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImgUrl(genre.image_background)}
              />
              <Button
                textAlign="left"
                whiteSpace="normal"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
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
    </>
  );
};

export default GenreList;
