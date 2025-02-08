import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const useExpenses = () => {
  return useQuery({
    queryKey: ["expenses"],
    queryFn: async () => {
      const res = await api.expenses["total"].$get();
      if (!res.ok) {
        throw new Error("server error");
      }
      const data = await res.json();
      return data;
    },
  });
};
