import { useGetProducts } from "@/app/api/hooks/billing";
import Tier from "./tier";

const Products = () => {
  const { data, isLoading } = useGetProducts();

  return (
    <div className="grid grid-cols-3 gap-2">
      {data && data.result.items.map((product) => <Tier key={product.id} product={product} />)}
    </div>
  );
};

export default Products;
