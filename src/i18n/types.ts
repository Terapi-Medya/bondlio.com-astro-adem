export interface Translation {
  routes: {
    home: string;
    about: string;
    services: {
      index: string;
      nanny: string;
      caregiver: string;
      cleaner: string;
    };
    infobook: string;
    contact: string;
    privacy: string;
    terms: string;
  };

  nav: {
    home: string;
    about: string;
    services: string;
    servicesDropdown: {
      nanny: string;
      caregiver: string;
      cleaner: string;
    };
    infobook: string;
    contact: string;
    getQuote: string;
  };

  serviceDescriptions: {
    nanny: string;
    caregiver: string;
    cleaner: string;
  };

  homepage: {
    heroTitle: string;
    heroSubtitle: string;
    heroCtaText: string;
    howItWorksTitle: string;
    howItWorksSubtitle: string;
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
    aboutQuote: string;
    aboutCtaText: string;
    servicesPreviewTitle: string;
    servicesPreviewSubtitle: string;
    blogPreviewTitle: string;
    blogPreviewSubtitle: string;
    valuePropsTitle: string;
    valuePropsSubtitle: string;
    viewDetailsText: string;
    values: {
      title: string;
      description: string;
      icon: string;
    }[];
  };

  about: {
    eyebrow: string;
    title: string;
    intro: string;
    features: {
      title: string;
      description: string;
    }[];
    closingQuote: string;
  };

  serviceProcess: {
    title: string;
    subtitle: string;
  };

  footer: {
    tagline: string;
    quickLinks: string;
    contactTitle: string;
    privacyLabel: string;
    termsLabel: string;
    allRightsReserved: string;
  };

  contactInfo: {
    phone: string;
    phoneDisplay: string;
    whatsapp: string;
    whatsappDisplay: string;
    whatsapp2?: string;
    whatsappDisplay2?: string;
  };

  serviceCta: {
    title: string;
    subtitle: string;
    whatsappText: string;
    contactFormText: string;
  };

  contactForm: {
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    messageLabel: string;
    submitButton: string;
  };

}