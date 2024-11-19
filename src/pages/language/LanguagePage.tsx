import { lazy } from "react";
import { useTranslation } from "react-i18next";
import { envConfig } from "../../config/envConfig";
const LanguageLayout = lazy(() => import(`../../clients/${envConfig.orgName}/language/LanguageLayout`));


const LanguagePage = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        localStorage.setItem("language", language);
    };
    const props = {
        changeLanguage
    }
    return <LanguageLayout {...props} />
}
export default LanguagePage
