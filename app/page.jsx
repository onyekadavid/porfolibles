import Link from "next/link";
import { GrMoney } from "react-icons/gr";
import { TbTrack } from "react-icons/tb";
import { GiProfit } from "react-icons/gi";
import { FaNoteSticky } from "react-icons/fa6";


export default function Home() {
  return (
   
      <main className="px-3 md:px-12 lg:px-16 py-12 bg-gradient-to-b from-[#F0ECE5] via-white to-[#B6BBC4]">
        <section className="min:h-screen md:h-screen flex flex-col justify-between gap-16  md:gap-0">
          <div className="row-span-5 flex justify-center items-center">
            <blockquote className="w-full md:[480px] lg:w-[720px]">
              <h1 className="text-5xl md:text-6xl text-[#31104d] text-center font-bold">
                <span className="text-[#A91d3a]">Track</span> All Your Stock and Crypto Investment All One Place
              </h1>
            </blockquote>
          </div>

          <article className="row-span-4 grid md:grid-cols-3 gap-4">
            <ul className=" flex flex-col gap-4 border border-[#A91d3a] rounded-lg p-4">
              <li className="flex gap-2 items-center">
                <GrMoney className="text-[#A91d3a] text-2xl md:text-5xl" />
                <span className="text-[#31304d] text-2xl "> Yield Potential</span>
              </li>
              <li className="flex gap-2 items-center">
                <TbTrack className="text-[#A91d3a] text-2xl md:text-5xl" />
                <span className="text-[#31304d] text-2xl ">Track Your Investment</span>
              </li>
              <li className="flex gap-2 items-center">
                <GiProfit className="text-[#A91d3a] text-2xl md:text-5xl" />
                <span className="text-[#31304d] text-2xl ">Profit Calculator</span>
              </li>
              <li className="flex gap-2 items-center">
                <FaNoteSticky className="text-[#A91d3a] text-2xl md:text-5xl" />
                <span className="text-[#31304d] text-2xl ">Keep Notes</span>
              </li>
            </ul>

            <div className="flex flex-col justify-around bg-[#A91D3a] rounded-lg p-4">
              <p className="text-4xl  text-[#F0ECE5]"> Use Quick Yield Calculator</p>
              <Link href="/yield" className="bg-[#F0ECE5] rounded-lg w-full py-3 uppercase text-2xl text-[#161A30]">Calculate</Link>
            </div>
            <div className="flex flex-col justify-around bg-[#A91D3a] rounded-lg p-4">
              <p className="text-4xl  text-[#F0ECE5]"> Start Tracking Your Investment now</p>
              <Link href='/dashboard' className="bg-[#F0ECE5] rounded-lg w-full py-3 flex justify-center uppercase text-2xl  text-[#161A30]">Get Started</Link>
            </div>
          </article>
        </section>
      </main>

      
    
  );
}



// import { SiPhotobucket } from "react-icons/si";
// import Link from "next/link";
// import { GrMoney } from "react-icons/gr";
// import { TbTrack } from "react-icons/tb";
// import { GiProfit } from "react-icons/gi";
// import { FaNoteSticky } from "react-icons/fa6";

// export default function Home() {
//   return (
//     <main className="px-3 md:px-12 lg:px-16 bg-gradient-to-b from-[#F0ECE5] via-white to-[#B6BBC4]">
//       <section className="min-h-screen md:h-screen flex flex-col justify-between pb-12 gap-16 md:gap-0">
//         <nav className="flex justify-between pt-3">
//           <button className="text-sm md:text-lg border border-[#31304D] rounded-md p-3 px-3 flex flex-col md:flex-row md:gap-2">
//             <span>Yield</span>
//             <span>Calculator</span>
//           </button>
//           <SiPhotobucket className="text-[#31304D] text-3xl" />
//           <Link className="text-lg border-b-2 border-[#31304D] py-3" href="">
//             Sign in
//           </Link>
//         </nav>
//         <div className="flex justify-center items-center">
//           <blockquote className="w-full md:w-[480px] lg:w-[720px] text-center">
//             <h1 className="text-5xl md:text-6xl font-bold text-[#31104d]">
//               <span className="text-[#A91d3a]">Track</span> All Your Stock and Crypto Investment All in One Place
//             </h1>
//           </blockquote>
//         </div>
//         <article className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <ul className="border border-[#A91d3a] p-4 rounded-md">
//             <li className="flex flex-row gap-4 items-center">
//               <GrMoney className="text-2xl md:text-5xl text-[#A91d3a]" />
//               <span className="text-2xl text-[#31104d]">Yield Potential</span>
//             </li>
//             <li className="flex flex-row gap-4 items-center">
//               <TbTrack className="text-2xl md:text-5xl text-[#A91d3a]" />
//               <span className="text-2xl text-[#31104d]">Track Your Investment</span>
//             </li>
//             <li className="flex flex-row gap-4 items-center">
//               <GiProfit className="text-2xl md:text-5xl text-[#A91d3a]" />
//               <span className="text-2xl text-[#31104d]">Profit Calculator</span>
//             </li>
//             <li className="flex flex-row gap-4 items-center">
//               <FaNoteSticky className="text-2xl md:text-5xl text-[#A91d3a]" />
//               <span className="text-2xl text-[#31104d]">Keep Notes</span>
//             </li>
//           </ul>

//           <div className="flex flex-col justify-around rounded-md bg-[#A91d3a] p-4">
//             <p className="flex justify-center text-3xl text-[#F0ECE5] rounded-md">
//               Use Quick Yield Calculator
//             </p>
//             <button className="flex justify-center text-2xl bg-[#F0ECE5] w-full rounded-md uppercase py-4">
//               Calculate
//             </button>
//           </div>
//           <div className="flex flex-col justify-around rounded-md bg-[#A91d3a] p-4">
//             <p className="flex justify-center text-3xl text-[#F0ECE5] rounded-md">
//               Start Tracking Your Investment Now
//             </p>
//             <Link
//               className="flex justify-center text-2xl bg-[#F0ECE5] w-full rounded-md py-4"
//               href=""
//             >
//               Get Started
//             </Link>
//           </div>
//         </article>
//       </section>
//     </main>
//   );
// }



