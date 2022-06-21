export interface Calendrier {
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
  description: [object];
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
