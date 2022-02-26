export type GetTelegramProxyUrlDto = {
  host: string;
  port: number;
  secret: string;
};

export const getTelegramProxyUrl = ({
  host,
  port,
  secret,
}: GetTelegramProxyUrlDto) => {
  return `tg://proxy?server=${host}&port=${port}&secret=${secret}`;
};
