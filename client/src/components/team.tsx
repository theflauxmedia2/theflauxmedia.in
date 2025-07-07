// export default function Team() {
//   const teamMembers = [
//     {
//       name: "Alex Johnson",
//       role: "Creative Director",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
//       description: "Leading creative vision and strategic brand development for global clients.",
//     },
//     {
//       name: "Sarah Chen",
//       role: "Senior Designer",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
//       description: "Crafting beautiful digital experiences and brand identities that connect.",
//     },
//     {
//       name: "Marcus Rodriguez",
//       role: "Lead Developer",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
//       description: "Building robust digital solutions with cutting-edge technology and innovation.",
//     },
//     {
//       name: "Emma Thompson",
//       role: "Strategy Manager",
//       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
//       description: "Developing data-driven strategies that deliver measurable results and growth.",
//     },
//   ];

//   return (
//     <section id="team" className="py-16 sm:py-20 lg:py-24 bg-[var(--flaux-black)]">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12 sm:mb-16 section-animate">
//           <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[var(--flaux-white)] mb-6 sm:mb-8 leading-tight">
//             Meet Our Team
//           </h2>
//           <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
//             Our diverse team of creatives, strategists, and technologists work together to bring your vision to life.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//           {teamMembers.map((member, index) => (
//             <div 
//               key={member.name}
//               className={`section-animate card-hover bg-[var(--flaux-gray)] rounded-xl p-6 sm:p-8 text-center ${
//                 index === 1 ? 'stagger-1' : 
//                 index === 2 ? 'stagger-2' : 
//                 index === 3 ? 'stagger-3' : ''
//               }`}
//             >
//               <img 
//                 src={member.image} 
//                 alt={member.name} 
//                 className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 sm:mb-6 object-cover" 
//               />
//               <h3 className="text-lg sm:text-xl font-semibold text-[var(--flaux-white)] mb-2 leading-tight">{member.name}</h3>
//               <p className="text-[var(--flaux-orange)] text-xs sm:text-sm mb-3 sm:mb-4 font-medium">{member.role}</p>
//               <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{member.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
