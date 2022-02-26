import { GetServerSideProps, GetStaticProps } from "next";
import type { NextPage } from "next";
import getProxyList, { Proxy } from "../services/get-proxy-list";
import { getCountryFlag, getTelegramProxyUrl } from "../helpers/telegram-proxy";
import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

type HomeProps = {
  proxyList: Array<Proxy>;
};

const Home: NextPage<HomeProps> = ({ proxyList }) => {
  return (
    <Container maxW="container.xl" my={8}>
      <Heading textAlign="center" color="blue.500" mb={8}>
        Lista de proxies para o Telegram
      </Heading>
      <Grid gap={2} mb={8}>
        <Text fontSize="xl">
          Após tentativas de censura da rede através de medidas judiciais,
          prejudicando todos os brasileiros que usam o Telegram, é dever moral
          do cidadão brasileiro combater esse tipo de medida de forma pacífica.
          Portanto aqui está uma lista de proxies disponíveis para você utilizar
          o Telegram sem a interferência de terceiros.
        </Text>
        <Text fontSize="xl">
          Você pode adicionar quantos proxies quiser, pois o Telegram utilizará
          automaticamente um dos proxies ativos. Ao clicar você será perguntado
          se deseja adicionar e ativar o proxy.
        </Text>
      </Grid>

      <Grid
        gap={2}
        templateColumns={{
          base: "auto",
          md: "repeat(2, auto)",
          lg: "repeat(3, auto)",
          xl: "repeat(4, auto)",
        }}
      >
        {proxyList.map((proxy, index) => (
          <Box
            key={index.toString()}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            wordBreak="break-all"
            display="flex"
            flexDirection="column"
          >
            <Box textAlign="right">
              <Image
                src={getCountryFlag(proxy.country)}
                alt={proxy.country}
                width={30}
                height={20}
              />
            </Box>
            <List mb={4}>
              <ListItem>
                <b>Host: </b>
                <span style={{ userSelect: "all" }}>{proxy.host}</span>
              </ListItem>
              <ListItem>
                <b>Port: </b>
                <span style={{ userSelect: "all" }}>{proxy.port}</span>
              </ListItem>
              <ListItem>
                <b>Secret: </b>
                <span style={{ userSelect: "all" }}>{proxy.secret}</span>
              </ListItem>
            </List>
            <Button
              as="a"
              colorScheme="blue"
              href={getTelegramProxyUrl({
                host: proxy.host,
                port: proxy.port,
                secret: proxy.secret,
              })}
              width="full"
              marginTop="auto"
            >
              Conectar a este proxy
            </Button>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const proxyList = await getProxyList();

  return {
    props: {
      proxyList,
    },
    revalidate: 300,
  };
};

export default Home;
