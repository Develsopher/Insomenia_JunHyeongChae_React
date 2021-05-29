import { atom } from 'recoil';

export const LikeState = atom({
  key: 'LikeState',
  default: [],
});

export const QuantityState = atom({
  key: 'QuantityState',
  default: 1,
});

export const TotalPriceState = atom({
  key: 'TotalPriceState',
  default: 1,
});

export const LineItemState = atom({
  key: 'LineItemState',
  default: [],
});

export const OptionIdState = atom({
  key: 'OntionIdState',
  default: 0,
});

export const OptionNameState = atom({
  key: 'OptionNameState',
  default: '',
});
