import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMedications } from "../../redux/features/medications";
import { useParams } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();

  const { categoryId } = useParams();

  const loading = useSelector((state) => state.medicationsReducer.loading);
  const medications = useSelector((state) => state.medicationsReducer.items);
  const error = useSelector((state) => state.medicationsReducer.error);

  useEffect(() => {
    dispatch(getAllMedications());
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (categoryId) {
    const filterMedication = medications.filter(
      (e) => e.category === categoryId
    );
    return (
      <ul>
        {filterMedication.map((e) => {
          return <li key={e._id}>{e.name}</li>;
        })}
      </ul>
    );
  }

  return (
    <ul>
      {medications.map((e) => (
        <li key={e._id}>{e.name}</li>
      ))}
    </ul>
  );
};

export default HomePage;
