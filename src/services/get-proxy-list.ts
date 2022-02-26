import axios from "axios";

type ApiProxy = {
  host: string;
  port: string;
  secret: string;
  country: string;
  up: string;
  down: string;
  uptime: string;
  unix: string;
  ping: string;
};

type ApiProxyListResult = Array<ApiProxy>;

export type Proxy = {
  host: string;
  port: number;
  secret: string;
  country: string;
  up: number;
  down: number;
  uptime: number;
  unix: number;
  ping: number;
};

const getProxyList = async (): Promise<Array<Proxy>> => {
  const { data } = await axios.get<ApiProxyListResult>(
    `https://mtpro.xyz/api`,
    {
      params: {
        type: "mtproto",
      },
    }
  );

  return data.map((proxy) => ({
    host: proxy.host,
    port: parseInt(proxy.port),
    secret: proxy.secret,
    country: proxy.country,
    up: parseInt(proxy.up),
    down: parseInt(proxy.down),
    uptime: parseInt(proxy.uptime),
    unix: parseInt(proxy.unix),
    ping: parseInt(proxy.ping),
  }));
};

export default getProxyList;
