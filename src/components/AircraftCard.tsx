"use client";

import Link from "next/link";
import { Aircraft } from "@/data/aircraft";

interface AircraftCardProps {
  aircraft: Aircraft;
}

export default function AircraftCard({ aircraft }: AircraftCardProps) {
  return (
    <Link href={`/aircraft/${aircraft.id}`}>
      <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
        <div className="relative h-48 bg-gradient-to-br from-blue-50 to-gray-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl text-gray-300">✈️</div>
          </div>
          <div className="absolute top-2 right-2">
            <span
              className={`px-2 py-1 text-xs font-semibold rounded-full ${
                aircraft.status === "active"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {aircraft.status}
            </span>
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
              {aircraft.name}
            </h3>
          </div>

          <p className="text-sm text-gray-600 mb-3">{aircraft.manufacturer}</p>

          <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
            <span className="capitalize bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {aircraft.category.replace("-", " ")}
            </span>
            <span className="capitalize bg-gray-100 text-gray-800 px-2 py-1 rounded">
              {aircraft.type}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
            <div>
              <span className="font-semibold">Range:</span>{" "}
              {aircraft.specs.range}
            </div>
            <div>
              <span className="font-semibold">Seats:</span>{" "}
              {aircraft.specs.seating.total}
            </div>
          </div>

          <div className="mt-3 text-xs text-gray-500">
            Introduced: {aircraft.yearIntroduced}
          </div>
        </div>
      </div>
    </Link>
  );
}
