"use client";

import { useState, useMemo } from "react";
import AircraftCard from "@/components/AircraftCard";
import SearchAndFilter from "@/components/SearchAndFilter";
import { aircraftData } from "@/data/aircraft";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [manufacturerFilter, setManufacturerFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const filteredAircraft = useMemo(() => {
    return aircraftData.filter((aircraft) => {
      const matchesSearch =
        searchQuery === "" ||
        aircraft.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        aircraft.manufacturer
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        aircraft.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesManufacturer =
        manufacturerFilter === "" ||
        aircraft.manufacturer
          .toLowerCase()
          .includes(manufacturerFilter.toLowerCase());

      const matchesCategory =
        categoryFilter === "" || aircraft.category === categoryFilter;

      return matchesSearch && matchesManufacturer && matchesCategory;
    });
  }, [searchQuery, manufacturerFilter, categoryFilter]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterManufacturer = (manufacturer: string) => {
    setManufacturerFilter(manufacturer);
  };

  const handleFilterCategory = (category: string) => {
    setCategoryFilter(category);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setManufacturerFilter("");
    setCategoryFilter("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="text-3xl mr-3">✈️</div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AirConnect</h1>
                <p className="text-sm text-gray-600">
                  Explore Commercial Aircraft
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {filteredAircraft.length} aircraft found
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <SearchAndFilter
          onSearch={handleSearch}
          onFilterManufacturer={handleFilterManufacturer}
          onFilterCategory={handleFilterCategory}
          onClearFilters={handleClearFilters}
        />

        {/* Aircraft Grid */}
        {filteredAircraft.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAircraft.map((aircraft) => (
              <AircraftCard key={aircraft.id} aircraft={aircraft} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">✈️</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No aircraft found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
