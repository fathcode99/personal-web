import Image from "next/image"
import Link from "next/link"
import { designServices, webServices, priceDesign, priceWeb } from "./api/services"






export default function Home() {
  return (
    <>
      <section className="md:h-[650px] sm:h-[350px] flex justify-between md:pl-16 sm:pl-8 font-Roboto ">
        <div className="flex flex-col justify-center flex-1">
          <div className="font-bold md:text-5xl sm:text-3xl">Hello World !</div>
          <p className="font-semibold md:text-xl sm:text-md">My Name is Fatkhur Rohman, </p>
          <p className="font-semibold md:text-xl sm:text-md">I'm Graphic Designer and Web Developer</p>
          <p className="font-normal md:text-lg sm:text-xs mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat tempore, mollitia quibusdam fugit aliquam quia natus laudantium voluptas facere quo blanditiis nihil dolorum voluptatum? Debitis qui temporibus vel harum explicabo!</p>
          <div className="bg-black text-white font-semibold md:text-xl sm:text-md w-fit md:px-4 sm:px-2 mt-4 flex items-center py-2 hover:text-emerald-500 cursor-pointer">Contact</div>
        </div>
        <div className="flex flex-1 justify-end relative">
          <Image src="/illustration.png" alt="illustration" layout="fill" />
          {/* <img src="/illustration.png" alt="illustration" className="h-full" /> */}
        </div>
      </section>

      <section className="font-Roboto mt-12">
        <div className="text-3xl font-extrabold text-center">Services</div>
        <div className="text-xl font-semibold text-center">Design Services</div>
        <div className="flex sm:flex-wrap md:flex-none gap-6 md:px-16 sm:px-8 mt-6 justify-center">
          {
            designServices.map((item, index) => (
              <div className="border border-solid border-black p-4 bg-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] md:w-[23%] sm:w-[46%]">
                <div className="bg-sky-500 h-44 w-full">
                  <img src={item.img} alt="design-sample" className="h-full w-full object-cover" />
                </div>
                <div className="text-xl font-semibold my-4">{item.title}</div>
                <p className="text-sm">{item.description}</p>

                <div className="border-t-2 border-solid border-black mt-4 flex gap-3">
                  <button className="bg-black px-4 text-white mt-4 hover:text-emerald-500 cursor-pointer">Order</button>
                  <button className="bg-black px-4 text-white mt-4 hover:text-emerald-500 cursor-pointer">
                    <Link href="/design">
                      Portfolio
                    </Link>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <section className="font-Roboto mt-12 w-full">
        <div className="text-xl font-semibold text-center">Web Services</div>
        <div className="flex sm:flex-wrap md:flex-none gap-6 md:px-16 sm:px-8 mt-6 justify-center">
          {
            webServices.map((item, index) => (
              <div key={index} className="border border-solid border-black p-4 bg-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] md:w-[23%] sm:w-[46%]">
                <div className="bg-black h-44 w-full">
                  <img src={item.ref} alt="design-sample" />
                </div>
                <div className="text-xl font-semibold my-4">{item.title}</div>
                <p className="text-sm">{item.description}</p>

                <div className="border-t-2 border-solid border-black mt-4 flex gap-3">
                  <button className="bg-black px-4 text-white mt-4 hover:text-emerald-500 cursor-pointer">Order</button>
                  <button className="bg-black px-4 text-white mt-4 hover:text-emerald-500 cursor-pointer">Portfolio</button>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <section className="font-Roboto mt-12">
        <div className="text-3xl font-extrabold text-center">Price List</div>
        <div className="text-xl font-semibold text-center">Design Services</div>
        <div className="flex sm:flex-wrap md:flex-none gap-6 md:px-16 sm:px-8 mt-6 justify-center">
          {
            priceDesign.map((item, index) => (
              <div key={index} className="border border-solid border-black p-4 bg-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] md:w-[23%] sm:w-[46%]">
                <div className="text-xl font-bold mb-4 text-center">{item.title}</div>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-semibold ">{item.price}</div>
                  <button className="bg-black px-4 text-white hover:text-emerald-500 cursor-pointer">Order</button>
                </div>
              </div>
            ))
          }
        </div>
        <div className="text-xl font-semibold text-center mt-12">Design Services</div>
        <div className="flex sm:flex-wrap md:flex-none gap-6 md:px-16 sm:px-8 mt-6 justify-center">
          {
            priceWeb.map((item, index) => (
              <div key={index} className="border border-solid border-black p-4 bg-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] md:w-[23%] sm:w-[46%]">
                <div className="text-xl font-semibold mb-4 text-center">{item.title}</div>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-semibold ">{item.price}</div>
                  <button className="bg-black px-4 text-white hover:text-emerald-500 cursor-pointer">Order</button>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}
