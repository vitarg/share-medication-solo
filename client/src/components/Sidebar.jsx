import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../redux/features/categories";
import { Link } from "react-router-dom";

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
        <li key={e._id}>
          <Link to={`/medications/${e._id}`}>{e.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
