import { env } from "@/lib/env";

type InitPaystackPayment = {
  email: string;
  amount: string;
};

const InitializePaystackPayment = async (payload: InitPaystackPayment) => {
  const res = await fetch(env.paystack.baseURL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (data.status === false) {
    throw new Error(`Paystack error: ${data.message}`);
  }

  return data;
};

export { InitializePaystackPayment };
export type { InitPaystackPayment };
