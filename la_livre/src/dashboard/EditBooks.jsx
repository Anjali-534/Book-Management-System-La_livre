import React, { useState } from "react";
import { Label, TextInput, Button, Textarea } from "flowbite-react";
import { useLoaderData, useParams } from "react-router-dom";

const EditBooks = () => {
  const { id } = useParams(); // Fetch the book ID from the URL parameters
  const { bookTitle, authorName, imageUrl, bookDescription, bookPdfUrl } =
    useLoaderData(); // Fetch initial book data using useLoaderData

  // Array of book categories
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Historical Fiction",
    "Mystery & Thriller",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  // State to manage the selected category
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  // Handle changes in the category selection
  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  // Handle book update
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = selectedBookCategory; // Use state value for category
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const updatedBookObj = {
      bookTitle,
      authorName,
      imageUrl,
      category,
      bookDescription,
      bookPdfUrl,
    };

    // Update book data to the backend
    fetch(`http://localhost:9000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBookObj),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book updated successfully!");
        // Optionally reset the form if needed, or handle redirect if required
      })
      .catch((error) => {
        console.error("Error updating book:", error);
        alert("Failed to update the book. Please try again.");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the Book Data</h2>
      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* First Row */}
        <div className="flex gap-8">
          {/* Book Title */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              placeholder="Book Name"
              required
              type="text"
              defaultValue={bookTitle}
            />
          </div>

          {/* Author Name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              placeholder="Author Name"
              required
              type="text"
              defaultValue={authorName}
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-8">
          {/* Image URL */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image URL" />
            </div>
            <TextInput
              id="imageUrl"
              name="imageUrl"
              placeholder="Book Image URL"
              required
              type="text"
              defaultValue={imageUrl}
            />
          </div>

          {/* Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select
              name="categoryName"
              id="inputState"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write your book description..."
            required
            rows={6}
            className="w-full"
            defaultValue={bookDescription}
          />
        </div>

        {/* Book PDF Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPdfUrl"
            name="bookPdfUrl"
            type="text"
            placeholder="Book PDF URL"
            required
            defaultValue={bookPdfUrl}
          />
        </div>

        <Button
          type="submit"
          className="mt-5 bg-blue-500 text-center items-center justify-between"
        >
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
