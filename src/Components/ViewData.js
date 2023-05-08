import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRow } from "../Action/deleteRow";
import Popup from "./Popup";

const ViewData = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.data.data);
  const [showPopup, setShowPopup] = useState(false);

  const [Name, setName] = useState("");
  const [Gender, setGender] = useState("Mail");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [id, setId] = useState("");



  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name </th>
            <th>Gender </th>

            <th>Mobile No </th>
            <th>Email </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {selector.map((data) => (
            <tr>
              <td>{data.Name}</td>

              <td>{data.Gender}</td>
              <td>{data.Mobile}</td>
              <td>{data.Email}</td>

              <td>
                <button
                  onClick={() => {
                    dispatch(deleteRow(data.ID));
                  }}
                >
                  Delete
                </button>

                <button
                  onClick={() => {
                    setShowPopup(true);
                    setName(data.Name);
                    setGender(data.Gender);
                    setMobile(data.Mobile);
                    setEmail(data.Email);
                    setId(data.ID);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Popup
        title="Update Data"
        d1={Name}
        d2={Mobile}
        d3={Gender}
        d4={Email}
        d5={id}
        onClose={handleClosePopup}
        isOpen={showPopup}
      />
    </>
  );
};

export default ViewData;
