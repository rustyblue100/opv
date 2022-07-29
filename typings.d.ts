export interface Calendrier {
  recurrents: {
    _createdAt: string;
    _id: string;
    artiste: [
      {
        _key: string;
        _ref: string;
        _type: string;
      }
    ];
    complet: boolean;
    date: string;
    description: any;
    mainImage: {
      asset: {
        url: string;
      };
    };
    prix: number;
    slug: {
      current: string;
    };
    title: {
      fr: string;
    };
  };
  _createdAt: string;
  _id: string;
  artiste: [
    {
      _key: string;
      _ref: string;
      _type: string;
    }
  ];
  complet: boolean;
  date: string;
  description: any;
  mainImage: {
    asset: {
      url: string;
    };
  };
  prix: number;
  slug: {
    current: string;
  };
  title: {
    fr: string;
  };
}

export interface Photos {
  _id: string;
  description: null;
  images: [
    {
      _key: string;
      _type: string;
      alt: string;
      asset: {
        _ref: string;
        _type: string;
      };
    }
  ];
  title: null;
}
