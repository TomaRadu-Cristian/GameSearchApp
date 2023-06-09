import { HStack, Img, List, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImgUrl from "../services/image-link";
const GenreList = () => {
  const { data } = useGenres();
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
