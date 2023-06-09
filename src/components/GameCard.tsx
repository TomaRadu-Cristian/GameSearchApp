import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import ScoreBadge from "./ScoreBadge";
import getCroppedImgUrl from "../services/image-link";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImgUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <ScoreBadge score={game.metacritic} />
        </HStack>
        <Heading fontSize="xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
