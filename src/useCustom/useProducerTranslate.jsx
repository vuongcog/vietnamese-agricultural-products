import { useTranslation } from "react-i18next";

const useProducerDetail = () => {
  const { t: translate, i18n } = useTranslation();
  return {
    translate,
    i18n,
  };
};

export default useProducerDetail;
