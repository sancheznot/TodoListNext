"use client";
import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

export const Info = () => {
  return (
    <Popup
      trigger={
        <button className="text-white text-5xl border border-gray-200 p-1 rounded-xl mt-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </button>
      }
      modal
      nested>
      {(close) => (
        <div className="grid grid-cols-1 rounded-lg overflow-y-scroll bg-gray-400 w-[500px] sm:w-screen h-screen transition-all duration-1000 ease-out place-content-start  place-items-start p-5 ">
          <div className="w-full flex flex-row justify-between items-end  text-2xl gap-3">
            <h1 className="text-xl mb-3 text-white">
              {" "}
              Welcome to the To-Do List App. How does It work?{" "}
            </h1>
            <button
              className=" border-2 p-2 rounded-lg  w-10 bg-red-300"
              onClick={close}>
              &times;
            </button>
          </div>
          <div className="w-full grid grid-cols-1 ">
            <div className="w-full">
              <p className="text-white text-sm text-justify p-3">
                1. Adding a Task:  <br/><br/>To add a new task, enter a task title in the
                (Task Title) input field. (Task Description) input field. Click
                the (Save) button to add the task to your to-do list. (Both
                fields are required)
              </p>

              <div className="h-[1px] bg-gray-400 border-gray-500 border"></div>
              <p className="text-white text-sm text-justify p-3">
                2. Viewing Your Tasks: <br/><br/> Once you&#39;ve added tasks, they will
                appear in the list below the input fields. Each task is
                displayed with its title and description.{" "}
              </p>
              <div className="h-[1px] bg-gray-400 border-gray-500 border"></div>
              <p className="text-white text-sm text-justify p-3">
                3.Completing a Task and Deleting a Task: <br/><br/> When you&#39;ve
                completed a task, you can To remove a task from your list, click
                the X button next to the task.
              </p>
              <div className="h-[1px] bg-gray-400 border-gray-500 border"></div>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};
