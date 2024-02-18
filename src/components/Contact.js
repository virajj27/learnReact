import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-5xl text-center p-4 m-4">contact us</h1>
      <form className=" flex justify-center ">
        <input
          placeholder="name"
          className="border border-black p-2 m-2 rounded-lg "
        />
        <input
          placeholder="message"
          className="border border-black p-2 m-2 rounded-lg "
        />
        <button
          className="bg-neutral-400
         p-2 m-2 rounded-lg "
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
