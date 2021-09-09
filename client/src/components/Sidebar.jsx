import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../redux/features/categories";

const Sidebar = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.categoriesReducer.loading);
  const categories = useSelector((state) => state.categoriesReducer.items);
  const error = useSelector((state) => state.categoriesReducer.error);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul>
      {categories.map((e) => (
        <li key={e._id}>{e.name}</li>
      ))}
    </ul>
  );
};

export default Sidebar;
