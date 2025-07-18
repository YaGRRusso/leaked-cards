import { createMask, type FactoryArg } from 'imask';

export const mask = (factory: FactoryArg, value = '') => {
  const masked = createMask(factory);
  masked.resolve(value);
  return masked;
};
