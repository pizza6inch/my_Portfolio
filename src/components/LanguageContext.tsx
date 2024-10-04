import { createContext, useState, useContext } from "react";
import { ReactNode } from "react";

interface LanguageContextProps {
  language: "en" | "cn";
  setLanguage: (language: "en" | "cn") => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

// 創建一個 Provider 來包裹整個應用

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"en" | "cn">("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};

export default LanguageContext;
