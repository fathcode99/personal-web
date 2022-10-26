import Image from "next/image"
import Link from "next/link"
import { designServices, webServices, priceDesign, priceWeb } from "./api/services"

const listFeature = [
  {
    name: "Lorem ipsum dol",
    checked: true
  },
  {
    name: "Lorem ipsum dol",
    checked: false
  },
  {
    name: "Lorem ipsum dol",
    checked: true
  },
  {
    name: "Lorem ipsum dolor sit",
    checked: false
  },
  {
    name: "Lorem ipsum dol",
    checked: false
  },
  {
    name: "Lorem ipsum dol",
    checked: false
  }
]

export default function Home() {
  return (
    <div className="mx-4 sm:mx-8 md:ml-16 md:mr-0">
      <section className="flex flex-col md:flex-row justify-between font-Roboto ">
        <div className="flex flex-col h-[450px] justify-center">
          <div className="font-bold text-5xl sm:text-6xl">Hello World !</div>
          <p className="font-semibold text-lg sm:text-xl">My Name is Fatkhur Rohman, </p>
          <p className="font-semibold text-lg sm:text-xl">I'm Graphic Designer and Web Developer</p>
          <p className="font-normal mt-4 sm:text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat tempore, mollitia quibusdam fugit aliquam quia natus laudantium voluptas facere quo blanditiis nihil dolorum voluptatum? Debitis qui temporibus vel harum explicabo!</p>
          <div className="bg-black text-white font-semibold w-fit sm:text-2xl mt-4 flex items-center py-1 px-2 hover:text-emerald-500 cursor-pointer">Contact</div>
        </div>

        <div className="flex  justify-end md:mr-0">

          <img src="/illustration.png" alt="illustration" className="h-full" />
        </div>

      </section>

      <div className="md:mr-16">
        <section className="font-Roboto mt-12 w-full">
          <div className="text-3xl font-extrabold text-center">Services</div>
          <div className="text-xl font-semibold text-center mb-8">Design Services</div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 justify-center">
            {
              designServices.map((item, index) => (
                <div
                  key={index}
                  className="border border-solid border-slate-300 p-4 bg-white">

                  <div className="bg-black h-44 w-full">
                    <img src={item.img} alt="design-sample" className="h-full w-full object-cover" />
                  </div>
                  <div className="text-xl font-semibold my-4">{item.title}</div>
                  <p className="text-sm sm:text-lg md:text-sm">{item.description}</p>

                  <div className="border-t-2 border-solid border-black mt-4 flex gap-3">
                    <button className="bg-black px-4 text-white mt-4 sm:text-xl sm:py-1 md:text-base md:py-0 hover:text-emerald-500 cursor-pointer">Order</button>
                    <button className="bg-black px-4 text-white mt-4 sm:text-xl sm:py-1 md:text-base md:py-0 hover:text-emerald-500 cursor-pointer">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6 justify-center">
            {
              webServices.map((item, index) => (
                <div
                  key={index}
                  className="border border-solid border-slate-300 p-4 bg-white">
                  <div className="bg-black h-44 w-full">
                    <img src={item.ref} alt="design-sample" />
                  </div>
                  <div className="text-xl font-semibold my-4">{item.title}</div>
                  <p className="text-sm sm:text-lg md:text-sm">{item.description}</p>

                  <div className="border-t-2 border-solid border-black mt-4 flex gap-3">
                    <button className="bg-black px-4 text-white mt-4 sm:text-xl sm:py-1 md:text-base md:py-0 hover:text-emerald-500 cursor-pointer">Order</button>
                    <button className="bg-black px-4 text-white mt-4 sm:text-xl sm:py-1 md:text-base md:py-0 hover:text-emerald-500 cursor-pointer">Portfolio</button>
                  </div>
                </div>
              ))
            }
          </div>
        </section>

        <section className="font-Roboto mt-12">
          <div className="text-3xl font-extrabold text-center">Price List</div>
          <div className="text-xl font-semibold text-center">Design Services</div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 justify-center">
            {
              priceDesign.map((item, index) => (
                <div key={index} className="border border-solid border-black p-4 bg-white shadow-[10px_10px_6px_-1px_rgba(0,0,0,0.2)]">
                  <div className="text-xl font-bold mb-4 text-center">{item.title}</div>
                  <div className="flex justify-between gap-2 mb-4">
                    <div className="bg-black text-white px-2">Bronze</div>
                    <div className="bg-black text-white px-2">Silver</div>
                    <div className="bg-black text-white px-2">Gold</div>
                  </div>
                  {
                    listFeature.map((item2, index2) => (
                      <div className="flex justify-between gap-2 my-1 px-5">
                        <div className="font-semibold">{item2.name}</div>
                        {
                          item2.checked ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        }
                      </div>
                    ))
                  }
                  <div className="flex flex-col items-center justify-between">
                    <div className="font-bold text-sm mt-4">Price :</div>
                    <div className="text-2xl font-extrabold mb-4">{item.price}</div>
                    <button className="bg-black px-4 text-white hover:text-emerald-500 cursor-pointer">Order</button>
                  </div>
                </div>
              ))
            }
          </div>
        </section>

        <section className="font-Roboto mt-12">
          <div className="text-3xl font-extrabold text-center">Price List</div>
          <div className="text-xl font-semibold text-center">Web Services</div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 justify-center">
            {
              priceWeb.map((item, index) => (
                <div key={index} className="border border-solid border-black p-4 bg-white shadow-[10px_10px_6px_-1px_rgba(0,0,0,0.2)]">
                  <div className="text-xl font-bold mb-4 text-center">{item.title}</div>
                  <div className="flex justify-between gap-2 mb-4">
                    <div className="bg-black text-white px-2">Bronze</div>
                    <div className="bg-black text-white px-2">Silver</div>
                    <div className="bg-black text-white px-2">Gold</div>
                  </div>
                  {
                    listFeature.map((item2, index2) => (
                      <div className="flex justify-between gap-2 my-1 px-5">
                        <div className="font-semibold">{item2.name}</div>
                        {
                          item2.checked ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        }
                      </div>
                    ))
                  }
                  <div className="flex flex-col items-center justify-between">
                    <div className="font-bold text-sm mt-4">Price :</div>
                    <div className="text-2xl font-extrabold mb-4">{item.price}</div>
                    <button className="bg-black px-4 text-white hover:text-emerald-500 cursor-pointer">Order</button>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </div>
    </div>
  )
}
