import { SetPasswordSchemaType } from "@/schema/input/authentication";

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

export { SetPassword };
