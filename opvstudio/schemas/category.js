/* eslint-disable import/no-anonymous-default-export */
// category.js

const categories = [
  { value: "Art", title: "Art" },
  { value: "Causes", title: "Causes" },
  { value: "Comedy", title: "Comedy" },
  { value: "Crafts", title: "Crafts" },
  { value: "Dance", title: "Dance" },
  { value: "Drinks", title: "Drinks" },
  { value: "Film", title: "Film" },
  { value: "Fitness", title: "Fitness" },
  { value: "Food", title: "Food" },
  { value: "Games", title: "Games" },
  { value: "Gardening", title: "Gardening" },
  { value: "Health", title: "Health" },
  { value: "Home", title: "Home" },
  { value: "Literature", title: "Literature" },
  { value: "Music", title: "Music" },
  { value: "Networking", title: "Networking" },
  { value: "Party", title: "Party" },
  { value: "Religion", title: "Religion" },
  { value: "Shopping", title: "Shopping" },
  { value: "Sports", title: "Sports" },
  { value: "Theatre", title: "Theatre" },
  { value: "Wellness", title: "Wellness" },
];

export default {
  name: "category",
  title: "Category",
  type: "string",
  options: {
    list: categories,
  },
};
