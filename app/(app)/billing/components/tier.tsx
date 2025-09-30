"use client";

import { useCheckout } from "@/app/api/hooks/billing";
import ButtonTextWrapper from "@/components/custom/ButtonTextWrapper";
import Currency from "@/components/custom/Currency";
import IconPicker from "@/components/custom/IconPicker";
import { Button } from "@/components/ui/button";
import { Product } from "@polar-sh/sdk/models/components/product.js";
import { ProductPriceFixed } from "@polar-sh/sdk/models/components/productpricefixed.js";

type Price = ProductPriceFixed;

interface Props {
  product: Product;
}

const Tier = ({ product }: Props) => {
  const { mutate, isPending } = useCheckout();

  const handleCheckout = (id: string) => {
    mutate({ products: [id] });
  };

  return (
    <div className="grid gap-1 rounded-lg p-1 bg-secondary dark:bg-white/5">
      <div className="ring-1 ring-sidebar-border p-3 pb-1 rounded-md h-32 flex flex-col justify-between bg-background shadow-sm">
        <p className="font-medium text-sm font-mono uppercase">{product.name}</p>
        <p className="text-3xl font-extrabold">
          {product.prices.map((price) => (
            <span key={price.id}>
              <Currency amount={(price as Price).priceAmount} />
              <span> </span>
              <span className="font-normal text-sm">per {product.recurringInterval}</span>
            </span>
          ))}
        </p>
      </div>

      <div className="grid gap-3 p-2">
        {product.benefits.map((benefit) => (
          <div key={benefit.id} className="flex items-center gap-1">
            <IconPicker type="check" />
            <p className="text-xs">{benefit.description}</p>
          </div>
        ))}
      </div>

      <Button variant="outline" onClick={() => handleCheckout(product.id)} disabled={isPending}>
        <ButtonTextWrapper isLoading={isPending}>Buy {product.name}</ButtonTextWrapper>
      </Button>
    </div>
  );
};

export default Tier;
