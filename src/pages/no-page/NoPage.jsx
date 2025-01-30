  import React from 'react'

  import { translations } from "../../i18n/Translations";
  import { useLanguage } from "../../contexts/LanguageContext";


  const NoPage = () => {
    const { language } = useLanguage();

    return (
      <div className="no-page">
        <h1>{translations.noPage.notFound[language]}</h1>
        <p>{translations.noPage.sorryMessage[language]}</p>
      </div>
    );
  }

  export default NoPage