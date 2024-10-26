import { useEffect } from "react";
import CertificateList from "@/components/CertificateList";

const CertificatePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <CertificateList />
    </div>
  );
};

export default CertificatePage;
