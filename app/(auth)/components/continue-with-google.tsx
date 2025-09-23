"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useContinueWithGoogle } from "@/app/api/hooks/auth";
import IconPicker from "@/components/custom/IconPicker";

const ContinueWithGoogle = () => {
  const router = useRouter();

  const { mutate, isPending } = useContinueWithGoogle();

  const handleSubmit = async () => {
    mutate(undefined, {
      onSuccess: async () => {
        router.push("/");
      },
      onError: (err) => {
        const { message } = err;
        toast.error(message);
      },
    });
  };

  return (
    <Button
      variant="outline"
      className="w-full gap-2"
      disabled={isPending}
      onClick={() => handleSubmit()}
    >
      <IconPicker type="google" size={16} />
      Continue with Google
    </Button>
  );
};

export default ContinueWithGoogle;
