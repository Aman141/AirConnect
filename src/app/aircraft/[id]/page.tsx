import { notFound } from "next/navigation";
import Link from "next/link";
import { getAircraftById } from "@/data/aircraft";

interface AircraftDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AircraftDetailPage({
  params,
}: AircraftDetailPageProps) {
  const { id } = await params;
  const aircraft = getAircraftById(id);

  if (!aircraft) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center hover:opacity-80">
              <div className="text-2xl mr-2">✈️</div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AirConnect</h1>
              </div>
            </Link>
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
            >
              ← Back to Aircraft
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Aircraft Header */}
          <div className="relative h-64 bg-gradient-to-br from-blue-50 to-gray-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl text-gray-300">✈️</div>
            </div>
            <div className="absolute top-4 right-4">
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  aircraft.status === "active"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {aircraft.status}
              </span>
            </div>
          </div>

          {/* Aircraft Info */}
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {aircraft.name}
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                {aircraft.manufacturer}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {aircraft.description}
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-blue-600">
                  Category
                </div>
                <div className="text-lg font-semibold text-gray-900 capitalize">
                  {aircraft.category.replace("-", " ")}
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-green-600">Type</div>
                <div className="text-lg font-semibold text-gray-900 capitalize">
                  {aircraft.type}
                </div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-purple-600">
                  Introduced
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {aircraft.yearIntroduced}
                </div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="text-sm font-medium text-orange-600">
                  Total Seats
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {aircraft.specs.seating.total}
                </div>
              </div>
            </div>

            {/* Detailed Specifications */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Physical Specifications */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Physical Specifications
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Length</span>
                    <span className="text-gray-900">
                      {aircraft.specs.length}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Wingspan</span>
                    <span className="text-gray-900">
                      {aircraft.specs.wingspan}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Height</span>
                    <span className="text-gray-900">
                      {aircraft.specs.height}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">
                      Max Takeoff Weight
                    </span>
                    <span className="text-gray-900">
                      {aircraft.specs.maxTakeoffWeight}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">
                      Fuel Capacity
                    </span>
                    <span className="text-gray-900">
                      {aircraft.specs.fuelCapacity}
                    </span>
                  </div>
                </div>
              </div>

              {/* Performance Specifications */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Performance Specifications
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Max Speed</span>
                    <span className="text-gray-900">
                      {aircraft.specs.maxSpeed}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Range</span>
                    <span className="text-gray-900">
                      {aircraft.specs.range}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">
                      Max Altitude
                    </span>
                    <span className="text-gray-900">
                      {aircraft.specs.maxAltitude}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Engines</span>
                    <span className="text-gray-900">
                      {aircraft.specs.engines}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Seating Configuration */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Seating Configuration
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">
                      {aircraft.specs.seating.economy}
                    </div>
                    <div className="text-sm text-gray-600">Economy</div>
                  </div>
                  {aircraft.specs.seating.business && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {aircraft.specs.seating.business}
                      </div>
                      <div className="text-sm text-gray-600">Business</div>
                    </div>
                  )}
                  {aircraft.specs.seating.first && (
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">
                        {aircraft.specs.seating.first}
                      </div>
                      <div className="text-sm text-gray-600">First Class</div>
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {aircraft.specs.seating.total}
                    </div>
                    <div className="text-sm text-gray-600">Total</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
