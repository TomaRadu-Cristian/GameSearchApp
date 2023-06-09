import { HStack, Img, List, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-link";
const GenreList = () => {
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
            <Text fontSize={"md"}>{genre.name}</Text>
          </HStack>
        </List>
      ))}
    </List>
  );
};

export default GenreList;
