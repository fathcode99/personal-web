import Image from "next/image"
import Link from "next/link"

const designPortfolio = [
  {
    title: "Letter D Logo",
    imgRef: "https://www.logoground.com/uploads9/dv9y20211499132021-05-04452809505052021.jpg",
    price: "$250",
    buyLink: "https://www.logoground.com/logo.php?id=497403"
  },
  {
    title: "Polygonal Letter H Logo",
    imgRef: "https://www.logoground.com/uploads10/dv10y20221499132022-02-224914120Plygonal-Letter-H-Logo.webp",
    price: "$300",
    buyLink: "https://www.logoground.com/logo.php?id=652377"
  },
  {
    title: "Letter Dc Striped Logo",
    imgRef: "https://www.logoground.com/uploads10/dv10y20211499132021-10-194813755Letter-DC-Logo.webp",
    price: "$400",
    buyLink: "https://www.logoground.com/logo.php?id=594298"
  },
  {
    title: "Pentagon Star Logo",
    imgRef: "https://www.logoground.com/uploads10/dv10y20211499132021-10-094276777Pentagon-Star.webp",
    price: "$800",
    buyLink: "https://www.logoground.com/logo.php?id=590025"
  },
  {
    title: "Book Striped Logo",
    imgRef: "https://www.logoground.com/uploads10/dv10y20211499132021-09-293376647Book-Striped-Logo.webp",
    price: "$350",
    buyLink: "https://www.logoground.com/logo.php?id=585062"
  },
  {
    title: "Piano Media Logo",
    imgRef: "https://www.logoground.com/uploads10/dv10y20211499132021-09-254764606Piano-Media-Logo.webp",
    price: "$250",
    buyLink: "https://www.logoground.com/logo.php?id=583274"
  },
  {
    title: "Star Circle Striped Logo",
    imgRef: "https://www.logoground.com/uploads10/dv10y20211499132021-09-223879644Star-Circle-Striped-Logo.webp",
    price: "$400",
    buyLink: "https://www.logoground.com/logo.php?id=581791"
  },
  {
    title: "Letter Ca Logo",
    imgRef: "https://www.logoground.com/uploads10/dv10y20211499132021-09-224904052CA%20Logo.webp",
    price: "$350",
    buyLink: "https://www.logoground.com/logo.php?id=581747"
  },
  {
    title: "Eye Spiral Striped Logo",
    imgRef: "https://www.logoground.com/uploads10/dv10y20211499132021-06-073958237Eye-Spiral-Line-Striped.jpg",
    price: "$350",
    buyLink: "https://www.logoground.com/logo.php?id=515547"
  },
  {
    title: "Letter H Logo",
    imgRef: "https://www.logoground.com/uploads10/dv10y20211499132021-06-073706049Letter-H.jpg",
    price: "$350",
    buyLink: "https://www.logoground.com/logo.php?id=515504"
  }
]

const design = () => {
  return (
    <div className="font-Roboto mx-4 md:mx-16">
      <div className="text-6xl font-extrabold my-12">Design Logo Portfolio</div>
      <div className="text-xl font-bold mb-6">Exclusive on Logoground</div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {
          designPortfolio.map((item, index) => (
            <div key={index} className="w-full border border-slate-300 flex flex-wrap p-3">
              <div className="">
                {/* <Image src={`${item.imgRef}`} alt="logo" layout="fill" /> */}
                <img src={item.imgRef} alt="logo" className="border" />
              </div>
              <div className="flex items-start justify-between w-full mt-3">
                <div>
                  <div className="text-md font-medium">{item.title}</div>
                  <div className="text-lime-600 text-md font-semibold">{item.price}</div>
                </div>
                <div className="bg-black text-white px-3 hover:text-lime-600 cursor-pointer">
                  <Link href={item.buyLink} target='_blank'>
                    Buy
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div >
  )
}

export default design
