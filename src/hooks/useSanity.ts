import { useMemo } from "react";
import { useMainData } from "../reducer/MainReduces";

const useSanity = (): { isQueryNotComplete: boolean } => {
  const { data: queryList } = useMainData();

  const isQueryNotComplete = useMemo(() => {
    const lastIndex = queryList.length - 1;
    const lastQueryData = queryList[lastIndex];
    const { field, condition, criteria } = lastQueryData;

    if (!field || !condition || !criteria) return true;

    return false;
  }, [queryList]);

  return { isQueryNotComplete };
};

export default useSanity;