// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

const IPO_STAGES = {
  index: [
    "IDX",
    "KSEI",
    "OJK",
    "NOTARY",
    "SOLICITOR*",
    "REGISTRAR",
    "APPRAISAL",
    "PRINTING",
    "PUBLIC ACCOUNTANT",
    "EVENT ORGANIZER",
    "GLOBAL COORDINATOR",
  ],
  roles: {
    IDX: [
      "Venue where stock listed and traded in secondary market;",
      "Hearing process (Mini Expose) with IDX Management.",
    ],
    KSEI: [
      "Providing settlement transaction in and out of IDX and dividend distribution.",
    ],
    OJK: [
      "Authority under Finance Minister where all of the IPO transaction registration process controlled;",
      "Hearing process (Mini Expose) with OJK Management.",
    ],
    NOTARY: [
      "Providing agreements and addendum related to stock offering;",
      "Accompanying Company in activities related to amendment of Articles of Association to Tbk. Company.",
    ],
    "SOLICITOR*": [
      "Executing audit in legal documents included company's Articles of Association;",
      "Compiling agreements, lawsuit, legal documents, etc;",
      "Preparing and publishing legal opinion.",
    ],
    REGISTRAR: ["Executing administration of stock ordering."],
    APPRAISAL: ["Providing assessment to Company's fixed assets."],
    PRINTING: [
      "Printing prospectus;",
      "Printing registration and offering form.",
    ],
    "PUBLIC ACCOUNTANT": [
      "Preparing and publishing audited financial statement;",
      "Preparing management analysis and discussion and financial statement summary;",
      "Preparing and publishing comfort letter;",
      "Executing sudit allotment.",
    ],
    "EVENT ORGANIZER": [
      "Accompanying Company to coordinate and executing Public Expose;",
      "Handling activities related to mass media such as press release.",
    ],
    "GLOBAL COORDINATOR": [
      "Due diligence;",
      "Creating demand to Company's IPO in international market.",
    ],
  },
  note: "*Appointment of Global Coordinator, International Printing, and Solicitor needed if IPO IS offered to international investors (international offering)",
};

export default IPO_STAGES;
