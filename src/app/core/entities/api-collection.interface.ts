export const emptyApiCollection: <T>() => IApiCollection<T> = () => {
  return {
    hasNext: false,
    items: []
  };
};

export interface IApiCollection<T> {

  hasNext: boolean;
  items: T[];

}
