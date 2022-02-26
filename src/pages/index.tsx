import { GetServerSideProps } from "next";
import type { NextPage } from "next";
import getProxyList, { Proxy } from "../services/get-proxy-list";
import { getTelegramProxyUrl } from "../helpers/telegram-proxy";

type HomeProps = {
  proxyList: Array<Proxy>;
};

const Home: NextPage<HomeProps> = ({ proxyList }) => {
  return (
    <div>
      <h1>Proxy list</h1>

      {proxyList.map((proxy, index) => (
        <div key={index.toString()}>
          <a
            href={getTelegramProxyUrl({
              host: proxy.host,
              port: proxy.port,
              secret: proxy.secret,
            })}
          >
            Conectar a este proxy
          </a>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const proxyList = await getProxyList();

  return {
    props: {
      proxyList,
    },
  };
};

export default Home;
