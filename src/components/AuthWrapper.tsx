// src/components/AuthWrapper.tsx
import { useEffect } from "react";
import { useApi } from "@/hooks/useApi";

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { authenticate, getToken } = useApi();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const authCode = await authenticate(
          "your-client-id",
          "your-username",
          "your-password"
        );

        await getToken("your-client-id", "your-client-secret", authCode);
      } catch (error) {
        console.error("Auth Error:", error);
      }
    };

    initAuth();
  }, []);

  return <>{children}</>;
}
