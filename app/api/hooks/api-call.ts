import { SetPasswordSchemaType } from "@/schema/input/authentication";
import { Polar } from "@polar-sh/sdk";
import { ProductsListResponse } from "@polar-sh/sdk/models/operations/productslist.js";

const SetPassword = async (data: SetPasswordSchemaType) => {
  try {
    const response = await fetch("/api/auth/set-password", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`Failed to set password: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error((error as Error).message, { cause: error });
  }
};

const GetProducts = async (): Promise<ProductsListResponse> => {
  try {
    const response = await fetch("/api/auth/get-products", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Failed to get products: ${response.statusText}`);
    }

    const result = await response.json();
    return result as ProductsListResponse;
  } catch (error) {
    throw new Error((error as Error).message, { cause: error });
  }
};

export { SetPassword, GetProducts };
