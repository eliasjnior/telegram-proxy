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

export const getCountryFlag = (countryCode: string) => {
  return `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`;
};
