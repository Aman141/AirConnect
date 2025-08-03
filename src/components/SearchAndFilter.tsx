"use client";

import { useState } from "react";

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilterManufacturer: (manufacturer: string) => void;
  onFilterCategory: (category: string) => void;
  onClearFilters: () => void;
}

export default function SearchAndFilter({
  onSearch,
  onFilterManufacturer,
  onFilterCategory,
  onClearFilters,
}: SearchAndFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const manufacturers = ["All", "Boeing", "Airbus"];
  const categories = ["All", "narrow-body", "wide-body"];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch(query);
  };

  const handleManufacturerFilter = (manufacturer: string) => {
    const value = manufacturer === "All" ? "" : manufacturer;
    setSelectedManufacturer(manufacturer);
    onFilterManufacturer(value);
  };

  const handleCategoryFilter = (category: string) => {
    const value = category === "All" ? "" : category;
    setSelectedCategory(category);
    onFilterCategory(value);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedManufacturer("");
    setSelectedCategory("");
    onClearFilters();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <div className="md:col-span-2">
          <label
            htmlFor="search"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Search Aircraft
          </label>
          <div className="relative">
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search by name, manufacturer..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Manufacturer Filter */}
        <div>
          <label
            htmlFor="manufacturer"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Manufacturer
          </label>
          <select
            id="manufacturer"
            value={selectedManufacturer}
            onChange={(e) => handleManufacturerFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {manufacturers.map((manufacturer) => (
              <option key={manufacturer} value={manufacturer}>
                {manufacturer}
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Category
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => handleCategoryFilter(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "All"
                  ? "All Categories"
                  : category.replace("-", " ")}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Clear Filters Button */}
      {(searchQuery ||
        selectedManufacturer !== "" ||
        selectedCategory !== "") && (
        <div className="mt-4">
          <button
            onClick={handleClearFilters}
            className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
