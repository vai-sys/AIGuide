


// // import { useState } from "react";
// // import {
// //   Plane,
// //   MapPin,
// //   Calendar,
// //   Sparkles,
// //   Loader2,
// //   UtensilsCrossed,
// //   Info,
// //   Cloud,
// //   Wind,
// //   Droplets,
// //   Thermometer,
// // } from "lucide-react";

// // export default function TravelItineraryApp() {
// //   const [formData, setFormData] = useState({
// //     destination: "",
// //     days: "",
// //     interests: "",
// //   });
// //   const [itinerary, setItinerary] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);
// //   const [weather, setWeather] = useState(null);
// //   const [weatherLoading, setWeatherLoading] = useState(false);

  
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };


// //   const fetchWeather = async () => {
// //     if (!formData.destination) return setError("Please enter a destination first!");
// //     setError(null);
// //     setWeather(null);
// //     setWeatherLoading(true);

// //     try {
// //       const res = await fetch(`/api/weather?city=${formData.destination}`);
// //       const data = await res.json();

// //       if (!res.ok) throw new Error(data.error || "Failed to fetch weather");
// //       setWeather(data);
// //     } catch (err) {
// //       setError(err.message);
// //     } finally {
// //       setWeatherLoading(false);
// //     }
// //   };


// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError(null);
// //     setItinerary(null);

// //     try {
// //       const response = await fetch("http://localhost:5000/api/itinerary/generate", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(formData),
// //       });

// //       if (!response.ok) throw new Error("Failed to generate itinerary");
// //       const data = await response.json();
// //       setItinerary(data.itinerary);
// //     } catch (err) {
// //       setError(err.message || "Something went wrong. Please try again.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleReset = () => {
// //     setFormData({ destination: "", days: "", interests: "" });
// //     setItinerary(null);
// //     setError(null);
// //     setWeather(null);
// //   };


// //   const formatItinerary = (text) => {
// //     if (!text) return null;
// //     const lines = text
// //       .replace(/\*/g, "")
// //       .replace(/#/g, "")
// //       .split("\n")
// //       .map((l) => l.trim())
// //       .filter((l) => l !== "");

// //     const days = [];
// //     let currentDay = null;
// //     lines.forEach((line) => {
// //       if (/^Day\s*\d+/i.test(line)) {
// //         if (currentDay) days.push(currentDay);
// //         currentDay = { title: line, activities: [] };
// //       } else if (currentDay) currentDay.activities.push(line);
// //     });
// //     if (currentDay) days.push(currentDay);

// //     return (
// //       <div className="space-y-8">
// //         {days.map((day, index) => (
// //           <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-sm">
// //             <h2 className="text-2xl font-bold text-blue-700 mb-4">{day.title}</h2>
// //             <div className="space-y-3 text-gray-800 leading-relaxed">
// //               {day.activities.map((activity, idx) =>
// //                 /special|must|highlight|recommended|don’t miss/i.test(activity) ? (
// //                   <p key={idx} className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-lg text-gray-900 font-semibold">
// //                     {activity}
// //                   </p>
// //                 ) : (
// //                   <p key={idx}>{activity}</p>
// //                 )
// //               )}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     );
// //   };


// //   // if (itinerary) {
// //   //   return (
// //   //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
// //   //       <div className="max-w-4xl mx-auto">
// //   //         <div className="bg-white rounded-2xl shadow-2xl p-8">
// //   //           <div className="flex items-center justify-between mb-6">
// //   //             <div className="flex items-center gap-3">
// //   //               <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
// //   //                 <Plane className="w-6 h-6 text-white" />
// //   //               </div>
// //   //               <h1 className="text-3xl font-bold text-gray-800">{formData.destination} Trip Plan</h1>
// //   //             </div>
// //   //             <button
// //   //               onClick={handleReset}
// //   //               className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors font-medium"
// //   //             >
// //   //               New Search
// //   //             </button>
// //   //           </div>

           

// //   //           <div className="prose max-w-none">{formatItinerary(itinerary)}</div>
// //   //         </div>
// //   //       </div>
// //   //     </div>
// //   //   );
// //   // }

// // if (itinerary) {
// //     return (
// //       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
// //         <div className="max-w-4xl mx-auto">
// //           <div className="bg-white rounded-2xl shadow-2xl p-8">
// //             <div className="flex items-center justify-between mb-6">
// //               <div className="flex items-center gap-3">
// //                 <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
// //                   <Plane className="w-6 h-6 text-white" />
// //                 </div>
// //                 <h1 className="text-3xl font-bold text-gray-800">{formData.destination} Trip Plan</h1>
// //               </div>
// //               <button
// //                 onClick={handleReset}
// //                 className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors font-medium"
// //               >
// //                 New Search
// //               </button>
// //             </div>

// //             {/* Weather Section in Results */}
// //             <div className="mb-6">
// //               {!weather && !weatherLoading && (
// //                 <button
// //                   onClick={fetchWeather}
// //                   className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 flex items-center gap-2 shadow-md"
// //                 >
// //                   <Cloud className="w-5 h-5" />
// //                   Check Current Weather
// //                 </button>
// //               )}

// //               {weatherLoading && (
// //                 <div className="p-4 bg-blue-50 rounded-xl flex items-center gap-3">
// //                   <Loader2 className="w-5 h-5 text-blue-600 animate-spin" />
// //                   <p className="text-blue-700 font-medium">Loading weather data...</p>
// //                 </div>
// //               )}

// //               {weather && (
// //                 <div className="p-6 bg-gradient-to-r from-cyan-50 via-blue-50 to-purple-50 rounded-xl shadow-md border-2 border-blue-200">
// //                   <div className="flex justify-between items-start">
// //                     <div>
// //                       <h3 className="text-xl font-bold text-gray-800 mb-1">{weather.city}</h3>
// //                       <p className="text-gray-600 capitalize text-lg mb-3">{weather.description}</p>
// //                     </div>
// //                     <div className="text-right">
// //                       <div className="flex items-center gap-2 justify-end">
// //                         <Thermometer className="w-5 h-5 text-red-500" />
// //                         <p className="text-3xl font-bold text-blue-600">{weather.temperature}°C</p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="grid grid-cols-2 gap-4 mt-4">
// //                     <div className="flex items-center gap-2 text-gray-700">
// //                       <Droplets className="w-5 h-5 text-blue-500" />
// //                       <span className="font-medium">Humidity: {weather.humidity}%</span>
// //                     </div>
// //                     <div className="flex items-center gap-2 text-gray-700">
// //                       <Wind className="w-5 h-5 text-cyan-500" />
// //                       <span className="font-medium">Wind: {weather.windSpeed} m/s</span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>

// //             <div className="prose max-w-none">{formatItinerary(itinerary)}</div>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center py-12 px-4">
// //       <div className="max-w-md w-full">
// //         <div className="text-center mb-8">
// //           <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full mb-4">
// //             <Plane className="w-12 h-12 text-white" />
// //           </div>
// //           <h1 className="text-4xl font-bold text-gray-800 mb-2">Travel Planner</h1>
// //           <p className="text-gray-600">Plan your trip and get live weather updates!</p>
// //         </div>

// //         <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
// //           {/* Destination */}
// //           <div>
// //             <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
// //               <MapPin className="w-4 h-4 text-blue-600" />
// //               Destination
// //             </label>
// //             <div className="flex gap-2">
// //               <input
// //                 type="text"
// //                 name="destination"
// //                 value={formData.destination}
// //                 onChange={handleInputChange}
// //                 placeholder="e.g., Tokyo, Japan"
// //                 required
// //                 className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
// //               />
             
// //             </div>
// //           </div>

       
// //           {weather && (
// //             <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl text-sm flex justify-between items-center">
// //               <div>
// //                 <p className="font-semibold text-gray-800">{weather.city}</p>
// //                 <p className="text-gray-600 capitalize">{weather.description}</p>
// //               </div>
// //               <div className="text-right">
// //                 <p className="font-bold text-blue-600">{weather.temperature}°C</p>
// //                 <p className="text-gray-700 text-xs">
// //                   💧 {weather.humidity}% | 🌬 {weather.windSpeed} m/s
// //                 </p>
// //               </div>
// //             </div>
// //           )}

        
// //           <div>
// //             <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
// //               <Calendar className="w-4 h-4 text-purple-600" />
// //               Number of Days
// //             </label>
// //             <input
// //               type="number"
// //               name="days"
// //               value={formData.days}
// //               onChange={handleInputChange}
// //               placeholder="e.g., 5"
// //               min="1"
// //               max="30"
// //               required
// //               className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
// //             />
// //           </div>

         
// //           <div>
// //             <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
// //               <Sparkles className="w-4 h-4 text-pink-600" />
// //               Interests (Optional)
// //             </label>
// //             <input
// //               type="text"
// //               name="interests"
// //               value={formData.interests}
// //               onChange={handleInputChange}
// //               placeholder="e.g., Food, Adventure, Culture"
// //               className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
// //             />
// //           </div>

// //           {error && (
// //             <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
// //               <div className="flex items-center gap-2">
// //                 <Info className="w-5 h-5 text-red-500" />
// //                 <p className="text-sm text-red-700">{error}</p>
// //               </div>
// //             </div>
// //           )}

// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
// //           >
// //             {loading ? (
// //               <>
// //                 <Loader2 className="w-5 h-5 animate-spin" />
// //                 Generating Itinerary...
// //               </>
// //             ) : (
// //               <>
// //                 <Sparkles className="w-5 h-5" />
// //                 Generate Itinerary
// //               </>
// //             )}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }



// import { useState } from "react";
// import {
//   Plane,
//   MapPin,
//   Calendar,
//   Sparkles,
//   Loader2,
//   Info,
//   Thermometer,
//   Droplets,
//   Wind,
// } from "lucide-react";

// export default function TravelItineraryApp() {
//   const [formData, setFormData] = useState({
//     destination: "",
//     days: "",
//     interests: "",
//   });
//   const [itinerary, setItinerary] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [weather, setWeather] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // FIXED: Changed from POST to GET with query parameter
//   const fetchWeather = async (destination) => {
//     try {
//       const res = await fetch(
//         `http://localhost:5000/api/weather?city=${encodeURIComponent(destination)}`
//       );
      
//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.error || "Failed to fetch weather");
//       }
      
//       const data = await res.json();
      
//       // Map the response to match the expected structure
//       setWeather({
//         city: data.city,
//         temperature: data.temperature,
//         description: data.description,
//         humidity: data.humidity,
//         windSpeed: data.windSpeed,
//       });
//     } catch (err) {
//       console.error("Weather fetch error:", err);
//       // Don't throw error, just log it - weather is optional
//       setError("Weather not found for this location.");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setItinerary(null);
//     setWeather(null);

//     try {
//       const response = await fetch("http://localhost:5000/api/itinerary/generate", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.error || "Failed to generate itinerary");
//       }
      
//       const data = await response.json();
//       setItinerary(data.itinerary);

//       // Fetch weather right after itinerary success
//       await fetchWeather(formData.destination);
//     } catch (err) {
//       console.error("Itinerary error:", err);
//       setError(err.message || "Something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleReset = () => {
//     setFormData({ destination: "", days: "", interests: "" });
//     setItinerary(null);
//     setError(null);
//     setWeather(null);
//   };

//   const formatItinerary = (text) => {
//     if (!text) return null;
//     const lines = text
//       .replace(/\*/g, "")
//       .replace(/#/g, "")
//       .split("\n")
//       .map((l) => l.trim())
//       .filter((l) => l !== "");

//     const days = [];
//     let currentDay = null;
//     lines.forEach((line) => {
//       if (/^Day\s*\d+/i.test(line)) {
//         if (currentDay) days.push(currentDay);
//         currentDay = { title: line, activities: [] };
//       } else if (currentDay) currentDay.activities.push(line);
//     });
//     if (currentDay) days.push(currentDay);

//     return (
//       <div className="space-y-8">
//         {days.map((day, index) => (
//           <div
//             key={index}
//             className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-sm"
//           >
//             <h2 className="text-2xl font-bold text-blue-700 mb-4">
//               {day.title}
//             </h2>
//             <div className="space-y-3 text-gray-800 leading-relaxed">
//               {day.activities.map((activity, idx) =>
//                 /special|must|highlight|recommended|don't miss/i.test(activity) ? (
//                   <p
//                     key={idx}
//                     className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-lg text-gray-900 font-semibold"
//                   >
//                     {activity}
//                   </p>
//                 ) : (
//                   <p key={idx}>{activity}</p>
//                 )
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   // Result Page (After Itinerary Generated)
//   if (itinerary) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
//         <div className="max-w-4xl mx-auto">
//           <div className="bg-white rounded-2xl shadow-2xl p-8">
//             {/* Header */}
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center gap-3">
//                 <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
//                   <Plane className="w-6 h-6 text-white" />
//                 </div>
//                 <h1 className="text-3xl font-bold text-gray-800">
//                   {formData.destination} Trip Plan
//                 </h1>
//               </div>
//               <button
//                 onClick={handleReset}
//                 className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors font-medium"
//               >
//                 New Search
//               </button>
//             </div>

//             {/* Weather Info */}
//             {weather && (
//               <div className="p-6 bg-gradient-to-r from-cyan-50 via-blue-50 to-purple-50 rounded-xl shadow-md border-2 border-blue-200 mb-8">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-800 mb-1">
//                       {weather.city}
//                     </h3>
//                     <p className="text-gray-600 capitalize text-lg mb-3">
//                       {weather.description}
//                     </p>
//                   </div>
//                   <div className="text-right">
//                     <div className="flex items-center gap-2 justify-end">
//                       <Thermometer className="w-5 h-5 text-red-500" />
//                       <p className="text-3xl font-bold text-blue-600">
//                         {weather.temperature}°C
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-2 gap-4 mt-4">
//                   <div className="flex items-center gap-2 text-gray-700">
//                     <Droplets className="w-5 h-5 text-blue-500" />
//                     <span className="font-medium">
//                       Humidity: {weather.humidity}%
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-2 text-gray-700">
//                     <Wind className="w-5 h-5 text-cyan-500" />
//                     <span className="font-medium">
//                       Wind: {weather.windSpeed} m/s
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Itinerary Display */}
//             <div className="prose max-w-none">{formatItinerary(itinerary)}</div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Initial Page (Form)
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center py-12 px-4">
//       <div className="max-w-md w-full">
//         <div className="text-center mb-8">
//           <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full mb-4">
//             <Plane className="w-12 h-12 text-white" />
//           </div>
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">
//             Travel Planner
//           </h1>
//           <p className="text-gray-600">
//             Plan your trip and get live weather updates!
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-white rounded-2xl shadow-2xl p-8 space-y-6"
//         >
//           {/* Destination */}
//           <div>
//             <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
//               <MapPin className="w-4 h-4 text-blue-600" />
//               Destination
//             </label>
//             <input
//               type="text"
//               name="destination"
//               value={formData.destination}
//               onChange={handleInputChange}
//               placeholder="e.g., Tokyo, Japan"
//               required
//               className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
//             />
//           </div>

//           {/* Number of Days */}
//           <div>
//             <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
//               <Calendar className="w-4 h-4 text-purple-600" />
//               Number of Days
//             </label>
//             <input
//               type="number"
//               name="days"
//               value={formData.days}
//               onChange={handleInputChange}
//               placeholder="e.g., 5"
//               min="1"
//               max="30"
//               required
//               className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
//             />
//           </div>

//           {/* Interests */}
//           <div>
//             <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
//               <Sparkles className="w-4 h-4 text-pink-600" />
//               Interests (Optional)
//             </label>
//             <input
//               type="text"
//               name="interests"
//               value={formData.interests}
//               onChange={handleInputChange}
//               placeholder="e.g., Food, Adventure, Culture"
//               className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
//             />
//           </div>

//           {error && (
//             <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
//               <div className="flex items-center gap-2">
//                 <Info className="w-5 h-5 text-red-500" />
//                 <p className="text-sm text-red-700">{error}</p>
//               </div>
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
//           >
//             {loading ? (
//               <>
//                 <Loader2 className="w-5 h-5 animate-spin" />
//                 Generating Itinerary...
//               </>
//             ) : (
//               <>
//                 <Sparkles className="w-5 h-5" />
//                 Generate Itinerary
//               </>
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import {
  Plane,
  MapPin,
  Calendar,
  Sparkles,
  Loader2,
  Info,
  Thermometer,
  Droplets,
  Wind,
  Compass,
  TrendingUp,
  Star,
  Clock,
  Sun,
  Mountain,
  Waves,
  Building2,
  Palmtree,
} from "lucide-react";

// Pre-curated trip suggestions
const suggestedTrips = [
  {
    id: 1,
    destination: "Bali, Indonesia",
    image: "🏝️",
    duration: "7-10 days",
    bestTime: "April - October",
    highlights: ["Beautiful beaches", "Ancient temples", "Rice terraces", "Vibrant culture"],
    description: "Experience the perfect blend of natural beauty, spirituality, and adventure in this tropical paradise.",
    category: "Beach & Culture",
    icon: Palmtree,
  },
  {
    id: 2,
    destination: "Tokyo, Japan",
    image: "🗼",
    duration: "5-7 days",
    bestTime: "March - May, September - November",
    highlights: ["Cherry blossoms", "Modern technology", "Traditional temples", "Amazing food"],
    description: "Discover the fascinating contrast between ancient traditions and cutting-edge modernity.",
    category: "City & Culture",
    icon: Building2,
  },
  {
    id: 3,
    destination: "Swiss Alps, Switzerland",
    image: "⛰️",
    duration: "6-8 days",
    bestTime: "June - September, December - March",
    highlights: ["Stunning mountains", "Hiking trails", "Skiing", "Chocolate & cheese"],
    description: "Adventure in breathtaking alpine landscapes with world-class skiing and hiking.",
    category: "Mountain",
    icon: Mountain,
  },
  {
    id: 4,
    destination: "Santorini, Greece",
    image: "🇬🇷",
    duration: "4-6 days",
    bestTime: "April - November",
    highlights: ["White-washed villages", "Sunset views", "Mediterranean cuisine", "Ancient ruins"],
    description: "Romantic getaway with stunning sunsets, pristine beaches, and rich history.",
    category: "Beach & Romance",
    icon: Sun,
  },
  {
    id: 5,
    destination: "Maldives",
    image: "🏖️",
    duration: "5-7 days",
    bestTime: "November - April",
    highlights: ["Crystal clear waters", "Luxury resorts", "Diving & snorkeling", "Private islands"],
    description: "Ultimate luxury tropical escape with pristine beaches and world-class diving.",
    category: "Beach & Luxury",
    icon: Waves,
  },
  {
    id: 6,
    destination: "Dubai, UAE",
    image: "🕌",
    duration: "4-5 days",
    bestTime: "November - March",
    highlights: ["Burj Khalifa", "Desert safari", "Luxury shopping", "Modern architecture"],
    description: "Experience ultra-modern luxury, stunning architecture, and desert adventures.",
    category: "City & Luxury",
    icon: Building2,
  },
];

export default function TravelPlannerApp() {
  const [activeTab, setActiveTab] = useState("builder");
  const [formData, setFormData] = useState({
    destination: "",
    days: "",
    interests: "",
  });
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fetchWeather = async (destination) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/weather?city=${encodeURIComponent(destination)}`
      );
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to fetch weather");
      }
      
      const data = await res.json();
      
      setWeather({
        city: data.city,
        temperature: data.temperature,
        description: data.description,
        humidity: data.humidity,
        windSpeed: data.windSpeed,
      });
    } catch (err) {
      console.error("Weather fetch error:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setItinerary(null);
    setWeather(null);

    try {
      const response = await fetch("http://localhost:5000/api/itinerary/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to generate itinerary");
      }
      
      const data = await response.json();
      setItinerary(data.itinerary);

      await fetchWeather(formData.destination);
    } catch (err) {
      console.error("Itinerary error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ destination: "", days: "", interests: "" });
    setItinerary(null);
    setError(null);
    setWeather(null);
    setSelectedTrip(null);
  };

  const handlePlanTrip = (trip) => {
    setSelectedTrip(trip);
    setFormData({
      destination: trip.destination,
      days: trip.duration.split("-")[0].trim(),
      interests: trip.highlights.join(", "),
    });
    setActiveTab("builder");
  };

  const formatItinerary = (text) => {
    if (!text) return null;
    const lines = text
      .replace(/\*/g, "")
      .replace(/#/g, "")
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l !== "");

    const days = [];
    let currentDay = null;
    lines.forEach((line) => {
      if (/^Day\s*\d+/i.test(line)) {
        if (currentDay) days.push(currentDay);
        currentDay = { title: line, activities: [] };
      } else if (currentDay) currentDay.activities.push(line);
    });
    if (currentDay) days.push(currentDay);

    return (
      <div className="space-y-8">
        {days.map((day, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl shadow-sm"
          >
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              {day.title}
            </h2>
            <div className="space-y-3 text-gray-800 leading-relaxed">
              {day.activities.map((activity, idx) =>
                /special|must|highlight|recommended|don't miss/i.test(activity) ? (
                  <p
                    key={idx}
                    className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-lg text-gray-900 font-semibold"
                  >
                    {activity}
                  </p>
                ) : (
                  <p key={idx}>{activity}</p>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderTabs = () => (
    <div className="flex gap-2 bg-white rounded-full p-1 shadow-lg max-w-md mx-auto mb-8">
      <button
        onClick={() => setActiveTab("builder")}
        className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-full transition-all ${
          activeTab === "builder"
            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
            : "text-gray-600 hover:text-gray-800"
        }`}
      >
        <Sparkles className="w-5 h-5" />
        <span className="font-semibold">Build Itinerary</span>
      </button>
      <button
        onClick={() => setActiveTab("suggestions")}
        className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-full transition-all ${
          activeTab === "suggestions"
            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
            : "text-gray-600 hover:text-gray-800"
        }`}
      >
        <Compass className="w-5 h-5" />
        <span className="font-semibold">Suggested Trips</span>
      </button>
    </div>
  );

  const renderSuggestedTrips = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {renderTabs()}
        
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full mb-4">
            <Compass className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Discover Amazing Destinations
          </h1>
          <p className="text-gray-600 text-lg">
            Handpicked travel experiences for your next adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suggestedTrips.map((trip) => {
            const IconComponent = trip.icon;
            return (
              <div
                key={trip.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-8 text-center">
                  <div className="text-6xl mb-3">{trip.image}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {trip.destination}
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-white/90">
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm">{trip.category}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {trip.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-blue-500" />
                      <span className="font-medium">Duration:</span>
                      <span>{trip.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Sun className="w-4 h-4 text-orange-500" />
                      <span className="font-medium">Best Time:</span>
                      <span>{trip.bestTime}</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-gray-700">
                        Highlights
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {trip.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handlePlanTrip(trip)}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <TrendingUp className="w-4 h-4" />
                    Plan This Trip
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  if (itinerary && activeTab === "builder") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {renderTabs()}
          
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800">
                  {formData.destination} Trip Plan
                </h1>
              </div>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors font-medium"
              >
                New Search
              </button>
            </div>

            {weather && (
              <div className="p-6 bg-gradient-to-r from-cyan-50 via-blue-50 to-purple-50 rounded-xl shadow-md border-2 border-blue-200 mb-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {weather.city}
                    </h3>
                    <p className="text-gray-600 capitalize text-lg mb-3">
                      {weather.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-end">
                      <Thermometer className="w-5 h-5 text-red-500" />
                      <p className="text-3xl font-bold text-blue-600">
                        {weather.temperature}°C
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Droplets className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">
                      Humidity: {weather.humidity}%
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Wind className="w-5 h-5 text-cyan-500" />
                    <span className="font-medium">
                      Wind: {weather.windSpeed} m/s
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="prose max-w-none">{formatItinerary(itinerary)}</div>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === "builder") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
        <div className="max-w-md mx-auto">
          {renderTabs()}
          
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full mb-4">
              <Plane className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Build Your Itinerary
            </h1>
            <p className="text-gray-600">
              Plan your trip and get live weather updates!
            </p>
          </div>

          {selectedTrip && (
            <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-xl">
              <div className="flex items-center gap-2 text-blue-700 mb-1">
                <Info className="w-4 h-4" />
                <span className="font-semibold text-sm">Planning from suggestion</span>
              </div>
              <p className="text-sm text-gray-700">
                {selectedTrip.destination} - {selectedTrip.duration}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                Destination
              </label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleInputChange}
                placeholder="e.g., Tokyo, Japan"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <Calendar className="w-4 h-4 text-purple-600" />
                Number of Days
              </label>
              <input
                type="number"
                name="days"
                value={formData.days}
                onChange={handleInputChange}
                placeholder="e.g., 5"
                min="1"
                max="30"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                <Sparkles className="w-4 h-4 text-pink-600" />
                Interests (Optional)
              </label>
              <input
                type="text"
                name="interests"
                value={formData.interests}
                onChange={handleInputChange}
                placeholder="e.g., Food, Adventure, Culture"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition-all"
              />
            </div>

            {error && (
              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded-lg">
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-red-500" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating Itinerary...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Itinerary
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return renderSuggestedTrips();
}