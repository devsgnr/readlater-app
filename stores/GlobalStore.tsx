import { atom, useAtom } from "jotai";
import { useCallback, useMemo } from "react";

type StoreItem = {
  data: Record<string, any>[];
  count: number;
};

type GlobalStoreType = Record<string, StoreItem>;

const GlobalStoreAtom = atom<GlobalStoreType>({} as GlobalStoreType);

const useGlobalStore = () => {
  const [store, setStore] = useAtom(GlobalStoreAtom);

  const handleAddNewPair = (
    identifier: string,
    items: Record<string, any>[],
    count: number
  ) => {
    setStore((prev) => ({
      ...prev,
      ...{
        [identifier]: {
          data: items,
          count: count,
        },
      },
    }));
  };

  const handleDeleteItemFromPair = (
    identifier: string,
    ids: string[],
    mutate?: () => void
  ) => {
    mutate && mutate();

    setStore((prev) => ({
      ...prev,
      ...{
        [identifier]: {
          count: prev[identifier]?.count - ids.length,
          data: prev[identifier]?.data?.filter(
            (item) => !ids.includes(item._id)
          ),
        },
      },
    }));
  };

  const handleAddItemToPair = (
    identifier: string,
    items: Record<string, any>[],
    count?: number
  ) => {
    setStore((prev) => ({
      ...prev,
      ...{
        [identifier]: {
          count: count || prev[identifier]?.count + items.length,
          data: [
            // We are only adding an item to the store item (pair) if it doesn't already exist
            ...(prev[identifier]?.data || []),
            ...items.filter(
              (item) =>
                !prev[identifier]?.data?.some(
                  (existingItem) => existingItem._id === item._id
                )
            ),
          ],
        },
      },
    }));
  };

  const MemoizedStore = useMemo(() => store, [store]);

  const getStorePlaceholderValue = useCallback(
    (identifier: string) => {
      return {
        data: MemoizedStore[identifier]?.data?.slice(0, 35) || undefined,
        lastVisible: null,
        count: MemoizedStore[identifier]?.count || 0,
      };
    },
    [MemoizedStore]
  );

  return {
    store: MemoizedStore,
    setStore,
    handleAddNewPair,
    handleAddItemToPair,
    handleDeleteItemFromPair,
    getStorePlaceholderValue,
  };
};

export default useGlobalStore;
