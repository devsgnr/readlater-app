import { useAuthContext } from "@/lib/hooks";
import { isEmpty } from "lodash";
import ChangePasswordForm from "./change-password";
import SetPasswordForm from "./set-password";

const Password = () => {
  const { accounts } = useAuthContext();
  const _credential = accounts?.filter((v) => v.provider === "credential");

  const credExists = !isEmpty(_credential);

  return (
    <>
      {credExists && <ChangePasswordForm />}
      {!credExists && <SetPasswordForm />}
    </>
  );
};

export default Password;
