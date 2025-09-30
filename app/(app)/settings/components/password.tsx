import { useAccountsContext } from "@/lib/hooks";
import { isEmpty } from "lodash";
import ChangePasswordForm from "./change-password";
import SetPasswordForm from "./set-password";
import { Skeleton } from "@/components/ui/skeleton";

const Password = () => {
  const { accounts, isLoading } = useAccountsContext();
  const _credential = accounts?.filter((v) => v.providerId === "credential");

  const credExists = !isEmpty(_credential);

  return (
    <>
      {isLoading && <Skeleton className="h-60" />}
      {!isLoading && credExists && <ChangePasswordForm />}
      {!isLoading && !credExists && <SetPasswordForm />}
    </>
  );
};

export default Password;
