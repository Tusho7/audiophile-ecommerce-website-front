export interface ProductProps {
  data: ProductType[];
  category?: string;
}

export interface ProductType {
  id: number;
  _id: string;
  slug: string;
  name: string;
  quantity: number;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  category: string;
  features: string;
  includes: {
    [key: string]: {
      quantity: string;
      item: string;
    };
  };
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: {
    [key: string]: {
      slug: string;
      name: string;
      image: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
    };
  };
}

export type PropsType = {
  data: ProductType[];
};

export type AlsoProps = {
  slug: string;
  image: {
    mobile: string;
  };
  name: string;
};

export interface User {
  exp: number;
  iat: number;
  id: string;
  image: string;
  name: string;
  _id: string;
}

export interface LogIn {
  email: string;
  setEmail: (e: string) => void;
  password: string;
  setPassword: (p: string) => void;
  handleSubmit: (e: { preventDefault: () => void }) => void;
}

export interface CartType {
  image: string;
  name: string;
  number: number;
  price: string;
  userId: string;
  _id: string;
}
