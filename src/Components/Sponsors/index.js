import SectionTitle from "../SectionTitle"

export default function Sponsors() {
  const sponsorCards = Array(9).fill(
    <div className="rounded-lg overflow-hidden">
      <h3 className="w-full bg-red-500 text-center p-1 text-gray-50 text-lg font-semibold">
        Rebook
      </h3>
      <div className="w-full flex justify-center relative">
        <img src="/Images/sponsors/mcdonalds-logo.png" alt="" className="relative z-10 py-5" />
        <div className="absolute flex w-full h-full flex-col">
          <div className="flex-grow bg-gradient-to-b from-white to-gray-100" />
          <div className="-mt-px w-full h-32 bg-gradient-to-b from-gray-100" />
        </div>
      </div>
    </div>
  ).map((card, i) => (
    <div key={ i }>
      { card }
    </div>
  ))
  return (
    <>
      <SectionTitle title="Sponsors" />
      <p className="mt-6 capitalize text-xl text-center sm:text-2xl lg:text-left text-white tracking-wider font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac euismod neque. Mauris arcu arcu, lobortis <span className="text-red-600">nec maximus egestas, maximus eget lacus.</span> la facilisi.
      </p>
      <div className="mt-12 sm:mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-14">
        { sponsorCards }
      </div>
    </>
  )
}
