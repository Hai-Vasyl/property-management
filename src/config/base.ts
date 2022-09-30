import { registerAs } from '@nestjs/config';

export const baseConfig = registerAs('base', () => {
  const { PORT: port } = process.env;

  return { port };
});
