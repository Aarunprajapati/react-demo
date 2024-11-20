import { useTranslation } from "react-i18next"


const DashboardLayout = () => {

  
  const { t } = useTranslation()
  return (
    <div>
      {t('greeting')}
    </div>
  )
}

export default DashboardLayout
