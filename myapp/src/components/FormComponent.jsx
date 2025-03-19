// // import React, { useState } from "react";
// // import FormComponent

// // const FormComponent = () => {
// //   const [email, setEmail] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [error, setError] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!email) {
// //       setError("Email is required.");
// //       return;
// //     }
// //     if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
// //       setError("Invalid email format.");
// //       return;
// //     }

// //     try {
// //       const response = await fetch("http://3.228.97.110:9000/api", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ email }),
// //       });

// //       const data = await response.json();

// //       if (response.status === 422) {
// //         setError(data.message || "Invalid email domain.");
// //       } else if (response.status === 200) {
// //         setMessage("Form Submitted");
// //         setError("");
// //       } else {
// //         setError("Something went wrong. Please try again.");
// //       }
// //     } catch (error) {
// //       console.error("Error caught:", error); // Logs the error in the console
// //       setError("Network error. Please check your connection.");
// //     }
    
// //   };

// //   return (
// //     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
// //       <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-md">
// //       <div className="flex items-center mb-4">
// //   <img src="img.png"alt="EZ Works Logo" className="h-12 w-auto mr-2" />
// //  {/* //<h1 className="text-3xl font-bold text-blue-600">EZ Works</h1> */}
// // </div>

// //         <h2 className="text-xl font-semibold mb-2">Suite Of Business Support Services</h2>
// //         <p className="text-gray-600 mb-4">
// //           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
// //         </p>
// //         <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mb-6">
// //           <input
// //             type="email"
// //             placeholder="Email Address"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
// //           />
// //           <button
// //             type="submit"
// //             className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
// //           >
// //             Contact Me
// //           </button>
// //         </form>
// //         {error && <p className="text-red-500 mb-2">{error}</p>}
// //         {message && <p className="text-green-500 mb-2">{message}</p>}
// //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
// //           {[
// //             "Presentation Design",
// //             "Audio - Visual Production",
// //             "Translation Services",
// //             "Graphic Design",
// //             "Research & Analytics",
// //             "Data Processing",
// //           ].map((service, index) => (
// //             <div key={index} className="bg-blue-900 text-white p-4 rounded-lg shadow-md">
// //               <h3 className="text-lg font-semibold">{service}</h3>
// //               <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FormComponent;
// import React, { useState } from "react";
// // import logo from "../assets/logo.png";
// import "./FormComponent.css";

// const FormComponent = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email) {
//       setError("Email is required.");
//       return;
//     }
//     if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
//       setError("Invalid email format.");
//       return;
//     }

//     try {
//       const response = await fetch("http://3.228.97.110:9000/api", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();

//       if (response.status === 422) {
//         setError(data.message || "Invalid email domain.");
//       } else if (response.status === 200) {
//         setMessage("Form Submitted");
//         setError("");
//       } else {
//         setError("Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error caught:", error); // Logs the error in the console
//       setError("Network error. Please check your connection.");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="form-box">
//         <div className="header">
         
        
//         </div>  
//         <h2 className="subtitle">A Suite of Business Support Services</h2>
//         <p className="description">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
//         </p>
//         <form onSubmit={handleSubmit} className="form">
//           <input
//             type="email"
//             placeholder="Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="input"
//           />
//           <button type="submit" className="button">
//             Contact Me
//           </button>
//         </form>
//         {error && <p className="error-message">{error}</p>}
//         {message && <p className="success-message">{message}</p>}
//         <div className="services-grid">
//         {["Presentation Design", "Audio - Visual Production", "Translation Services", "Graphic Design", "Research & Analytics", "Data Processing"].map((service, index) => (
//           <div key={index} className="service-card">
//             <h3 className="service-title">{service}</h3>
//             <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//           </div>
//         ))}
//       </div>
//       </div>
//     </div>
//   );
// };

// export default FormComponent;
import React, { useState } from "react";
import "./FormComponent.css";
import img1 from "../assets/2.png";
import img2 from "../assets/3.png";
import img3 from "../assets/4.png";
import img4 from "../assets/5.png";
import img5 from "../assets/6.png";
import img6 from "../assets/7.png";




const FormComponent = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email) {
      setError("Email is required.");
      return;
    }
  
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      setError("Invalid email format.");
      return;
    }
  
    try {
      const response = await fetch("https://test.ezworks.ai/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        mode: "cors",  // Ensure CORS is handled
      });
  
      // const data = await response.json();

      //       if (response.status === 422) {
      //         setError(data.message || "Invalid email domain.");
      //       } else if (response.status === 200) {
      //         setMessage("Form Submitted");
      //         setError("");
      //       } else {
      //         setError("Something went wrong. Please try again.");
      //       }
      //     } catch (error) {
      //       console.error("Error caught:", error); // Logs the error in the console
      //       setError("Network error. Please check your connection.");
      //     }
      //   };
      
      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "Something went wrong. Please try again.");
      } else {
        setMessage("Form Submitted");
        setError("");
      }
    } catch (error) {
      console.error("error",error);
      setError("Network error. Please check your connection or try again later.");
    }
  };
  
  return (
    <div className="container">
      <div className="form-box">
      <div className="header"></div>

        <h2 className="subtitle">A Suite of Business Support Services</h2>
        <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        </p>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          <button type="submit" className="button">
            Contact Me
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {message && <p className="success-message">{message}</p>}
        </div>
        <div className="services-grid">
          {[
             { title: "Presentation Design", img: img1 },
             { title: "Audio - Visual Production", img: img2},
             { title: "Translation Services", img: img3 },
             { title: "Graphic Design", img: img4},
             { title: "Research & Analytics", img: img5},
             { title: "Data Processing", img: img6},
          ] .map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
              <img src={service.img} alt={service.title} className="service-image" /><br />
              <h3 className="service-title">{service.title}</h3>
              </div>
              <div className="service-info">
                {/* <h3 className="service-title">{service.title}</h3><br></br> */}
                <p className="service-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             
              </div>
              </div>        
              ))}
       
      </div>
    </div>
  );
};

export default FormComponent;

