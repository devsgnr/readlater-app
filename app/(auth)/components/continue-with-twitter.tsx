"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useContinueWithTwitter } from "@/app/api/hooks/auth";
import IconPicker from "@/components/custom/IconPicker";

const ContinueWithTwitter = () => {
  const router = useRouter();

  const { mutate, isPending } = useContinueWithTwitter();

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
      <IconPicker type="x" size={20} />
      Continue with X
    </Button>
  );
};

export default ContinueWithTwitter;
