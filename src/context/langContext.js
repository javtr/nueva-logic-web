import {createContext} from 'react';

  const LanguageContext = createContext({
    lang: "",
    setLang: () => {},
  });

  export default LanguageContext;