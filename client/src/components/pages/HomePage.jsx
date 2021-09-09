import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMedications } from "../../redux/features/medications";

const HomePage = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.medications.loading);
  const medications = useSelector((state) => state.medications.items);
  const error = useSelector((state) => state.medications.error);

  useEffect(() => {
    dispatch(getAllMedications());
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
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