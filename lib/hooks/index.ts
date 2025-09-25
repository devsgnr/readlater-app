import { useContext, useEffect, useState } from "react";
import AuthContext, { AuthContextType } from "@/context/AuthContext";
import PaymentProcessorContext, {
  PaymentProcessorContextType,
} from "@/context/PaymentProcessorContext";
import { PaymentsContext, PaymentsContextType } from "@/context/PaymentsContext";
import { MemberDetailsContext, MemberDetailsContextType } from "@/context/MemberDetailsContext";
import {
  ThirdPartyButtonContext,
  ThirdPartyButtonContextType,
} from "@/context/ThirdPartyButtonContext";

/*
 *
 * Utility Hooks
 *
 */
const useCMDPress = () => {
  const [cmdDown, setCmdDown] = useState<boolean>(false);
  const [shiftDown, setShiftDown] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        setCmdDown(true);
      }

      if (e.shiftKey) {
        setShiftDown(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      setCmdDown(false);
      setShiftDown(false);
    };

    if (typeof document !== undefined) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
    }

    // Remove Listener - Clean Up
    return () => {
      if (typeof document !== "undefined") {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
      }
    };
  }, []);

  return { cmdDown, setCmdDown, shiftDown, setShiftDown };
};

const useKeyPress = (key: string, callback: (e: KeyboardEvent) => void) => {
  const [down, setDown] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const element = e.target as HTMLElement;
      const isINPUT = element.tagName === "INPUT";
      const isTEXTAREA = element.tagName === "TEXTAREA";

      // Ignore if the element that is focused is an input field
      if (!isINPUT && !isTEXTAREA && !element.className.includes("tiptap")) {
        if (e.key === key) callback(e);
      }
    };

    if (typeof document !== undefined) {
      document.addEventListener("keydown", handleKeyDown);
    }

    // Remove Listener - Clean Up
    return () => {
      if (typeof document !== "undefined") {
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [callback, key]);

  return { down, setDown };
};

/*
 *
 * Context Hooks
 *
 */
const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("AuthContext must be used from within the AuthContext provider");
  }
  return { ...context };
};

const usePaymentProcessorContext = (): PaymentProcessorContextType => {
  const context = useContext(PaymentProcessorContext);
  if (!context) {
    throw new Error(
      "PaymentProcessorContext must be used from within the PaymentProcessorContext provider",
    );
  }
  return { ...context };
};

const usePaymentsContext = (): PaymentsContextType => {
  const context = useContext(PaymentsContext);
  if (!context) {
    throw new Error("PaymentsContext must be used from within the PaymentsContext provider");
  }
  return { ...context };
};

const useMemberDetailsContext = (): MemberDetailsContextType => {
  const context = useContext(MemberDetailsContext);
  if (!context) {
    throw new Error(
      "MemberDetailsContext must be used from within the MemberDetailsContext provider",
    );
  }
  return { ...context };
};

const useThirdPartySignInContext = (): ThirdPartyButtonContextType => {
  const context = useContext(ThirdPartyButtonContext);
  if (!context) {
    throw new Error(
      "ThirdPartyButtonContext must be used from within the ThirdPartyButtonContext provider",
    );
  }
  return { ...context };
};

export {
  /* Utilities Hook Export */
  useCMDPress,
  useKeyPress,
  /* Context Hook Exports */
  useAuthContext,
  usePaymentProcessorContext,
  usePaymentsContext,
  useMemberDetailsContext,
  useThirdPartySignInContext,
};
