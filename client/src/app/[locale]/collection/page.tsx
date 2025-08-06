import Title from '@/components/dom/Title';
import { useTranslations } from 'next-intl';
import React from 'react'

function page() {
      const t = useTranslations("Categories");
    
  return (<section className="max-padd-container py-16 mt-24"> 
          <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />
  
   </section>);
}

export default page