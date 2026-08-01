import React, { useState } from "react";

function Categories() {
  const [category, setCategory] = useState("");

  const [categories, setCategories] = useState([
    "Helmet",
    "Gloves",
    "Jacket",
    "Boots",
    "Accessories",
  ]);

  const addCategory = () => {
    if (category.trim() === "") {
      alert("Please enter category name");
      return;
    }

    setCategories([...categories, category]);
    setCategory("");
  };

  const deleteCategory = (index) => {
    if (window.confirm("Delete this category?")) {
      setCategories(categories.filter((_, i) => i !== index));
    }
  };

  const editCategory = (index) => {
    const updated = prompt("Edit Category", categories[index]);

    if (updated && updated.trim() !== "") {
      const newCategories = [...categories];
      newCategories[index] = updated;
      setCategories(newCategories);
    }
  };

  return (
    <div className="container mt-4">

      <h2 className="mb-4">Manage Categories</h2>

      <div className="card shadow">

        <div className="card-body">

          <div className="row">

            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Category Name"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <button
                className="btn btn-success w-100"
                onClick={addCategory}
              >
                Add Category
              </button>
            </div>

          </div>

          <hr />

          <table className="table table-bordered table-hover">

            <thead className="table-dark">

              <tr>
                <th>ID</th>
                <th>Category Name</th>
                <th width="180">Action</th>
              </tr>

            </thead>

            <tbody>

              {categories.map((cat, index) => (

                <tr key={index}>

                  <td>{index + 1}</td>

                  <td>{cat}</td>

                  <td>

                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => editCategory(index)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteCategory(index)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Categories;