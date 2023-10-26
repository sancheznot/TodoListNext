"use client";

import { useEffect, useState } from "react";
import { HowInstall } from "./HowInstall";
import { Info } from "./Info";
const Form = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deleteNotes, setDeleteNotes] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNotes(JSON.parse(localStorage.getItem("Notes")));
      setLoading(false);
      setDeleteNotes(false)
    }, 100);
  }, [loading, deleteNotes]);

  const existingDataString =
    typeof window !== "undefined" ? localStorage.getItem("Notes") : null;
  let dataArray = existingDataString ? JSON.parse(existingDataString) : [];

  const [newData, setNewData] = useState({ title: "", description: "" });

  const listHandler = (e) => {
    e.preventDefault();
    if (newData.title === "" || newData.description === "") {
      return alert("Please fill all the fields");
    }
    const updatedDataArray = [...dataArray, newData];

    localStorage.setItem("Notes", JSON.stringify(updatedDataArray));

    setNewData({ title: "", description: "" });
    setLoading(true);
  };
  const deleteNote = (index) => {
    console.log(index);
    const updatedDataArray = dataArray.filter((item, i) => i !== index);
    localStorage.setItem("Notes", JSON.stringify(updatedDataArray));
    setDeleteNotes(true);
  };
  return (
    <div className="grid grid-cols-1 place-items-center gap-5">
      <div className="grid grid-cols-3 w-full place-content-between place-items-center">
        <Info />
        <h1 className="text-2xl mt-4">To Do List</h1>
        <HowInstall />
      </div>

      <form
        onSubmit={listHandler}
        className="grid grid-cols-1 w-4/12 gap-5 md:w-11/12 place-items-center">
        <input
          placeholder="Title"
          className="text-black p-2 rounded-md focus:outline-none focus:bg-cyan-100 w-9/12 md:w-11/12 "
          value={newData.title}
          onChange={(e) => setNewData({ ...newData, title: e.target.value })}
        />
        <input
          placeholder="What do you need to DO?"
          onChange={(e) =>
            setNewData({ ...newData, description: e.target.value })
          }
          className="text-black p-2 rounded-md focus:outline-none focus:bg-cyan-100 w-9/12 md:w-11/12 "
          value={newData.description}
        />
        <button
          type="submit"
          className={
            loading
              ? "bg-green-400 w-6/12 p-2 rounded-xl"
              : "bg-blue-400 w-6/12 p-2 rounded-xl"
          }>
          SAVE
        </button>
      </form>
      <div className="grid mdd:grid-cols-2 gap-2 w-11/12 mb-5">
        {notes?.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-2 bg-slate-500 p-2 mb-2 rounded-sm w-full">
            <div className="grid gap-2 place-content-start w-full">
              <div className="grid grid-cols-1 w-full">
                <h3>{item.title}</h3>
              </div>
              <div className="grid grid-rows-1 w-full">
                <p>Description</p>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="text-white flex flex-col items-end justify-end w-11/12">
              <button
                className="bg-red-500 p-1 px-2 rounded-md flex flex-col items-center justify-center"
                onClick={() => deleteNote(index)}>
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
