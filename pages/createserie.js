import React, { useState, useEffect } from "react";
import { database } from "../firebase";
import { collection, onSnapshot, getDocs } from "firebase/firestore";

const CreateSerie = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const databaseRef = collection(database, "categories");

  const getData = async () => {
    await getDocs(databaseRef).then((response) => {
      setCategories(
        response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        })
      );
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      title: title,
      category: category,
    });
    setTitle("");
  };

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div className="p-4">
      <h2 className="text-center">Add Serie</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 md:mr-2 md:mb-0">
          <label class="block mb-2 text-sm font-bold text-gray-700" for="title">
            Title
          </label>
          <input
            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="title"
            placeholder="Title"
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div className="p-2">
          <label
            class="block mb-2 text-sm font-bold text-gray-700"
            for="category"
          >
            Category
          </label>
          <select value={category} onChange={handleChange}>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="p-2">
          <button
            className="pointer-events-auto rounded-md bg-indigo-600 py-2 px-3 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateSerie;
