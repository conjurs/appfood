import Image from "next/image";

function App() {
  return (
    <main className="bg-black">
      <nav>
        <a className="m-4 text-size-12">=</a>
      </nav>
      <header className="flex justify-between py-6 px-2">
        <div>
          <div>
            <p className="text-gray-500 text-xs">Good morning</p>
            <p>Foo Fighters</p>
          </div>
        </div>
        <div></div>
      </header>
      <div id="search" className="mx-auto flex justify-center">
  <div className="bg-[#252830] w-96 h-20 px-4 rounded-xl flex justify-between">
    <input
      className="bg-[#252830] outline-none" // Added outline-none class here
      type="text"
      id="myInput"
      placeholder="Find your dishes"
    ></input>
    <Image
      width="35"
      height="35"
      alt=""
      src="/images/Filter.svg"
    ></Image>
  </div>
</div>

      <div id="categories" className="flex justify-center">
        <div className="flex flex-col">
          <div className="flex justify-between p-4">
            <h1 className="text-2xl">Categories</h1>
            <button className="flex justify-center gap-3 items-center">
              All <Image width="13" height="10" alt="" src="/images/red_arrow.svg"></Image>
            </button>
          </div>
          <div className="flex justify-start">
            <div
              id="burger"
              className="bg-[#252830] rounded-xl w-32 h-12 flex justify-around items-center text-base mx-2"
            >
              <p className="text-[#8E94A4]">🍔 Burger</p>
            </div>
            <div className="bg-[#252830] rounded-xl w-32 h-12 flex justify-around items-center text-base mx-2">
              <p className="text-[#8E94A4]">🌭 Sandwich</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Dishes Section */}
      <div id="dishes" className="my-8">
        <div className="flex justify-between px-4 pt-12">
          <h1 className="text-2xl">New Dishes</h1>
          <button className="flex justify-center gap-3 items-center">All <Image width="13" height="10" alt="" src="/images/red_arrow.svg"></Image></button>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="food-item bg-gray-800 rounded-xl flex flex-col justify-between">
            <a href="food-items">
              <div className="w-24 h-24 mx-auto">
                <img className="w-full h-full object-cover rounded-t-xl" alt="" src="/images/unsplash_TqOEGdRNowY.svg"></img>
              </div>
              <div className="p-4">
                <p className="text-white font-bold text-xl mb-2">Fried Shrimp</p>
                <div className="flex justify-between text-gray-400 text-sm mb-2">
                  <div className="flex items-center gap-1">
                    <img className="w-4 h-4" alt="" src="/images/star.svg"></img>
                    <p>2.7 (99)</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img className="w-4 h-4" alt="" src="/images/group.svg"></img>
                    <p>6 min</p>
                  </div>
                </div>
                <p className="text-red-400 text-lg font-bold">€13.00</p>
              </div>
            </a>
          </div>
          <div className="food-item bg-gray-800 rounded-xl flex flex-col justify-between">
            <a href="food-items">
              <div className="w-24 h-24 mx-auto">
                <img className="w-full h-full object-cover rounded-t-xl" alt="" src="/images/unsplash_TqOEGdRNowY.svg"></img>
              </div>
              <div className="p-4">
                <p className="text-white font-bold text-xl mb-2">Fried Shrimp</p>
                <div className="flex justify-between text-gray-400 text-sm mb-2">
                  <div className="flex items-center gap-1">
                    <img className="w-4 h-4" alt="" src="/images/star.svg"></img>
                    <p>5 (303)</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img className="w-4 h-4" alt="" src="/images/group.svg"></img>
                    <p>20 min</p>
                  </div>
                </div>
                <p className="text-red-400 text-lg font-bold">€42.00</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <footer className="flex w-full justify-around absolute bottom-0 py-5">
        <Image width="35" height="35" alt="" src="/images/cooking.svg"></Image>
        <Image width="35" height="35" alt="" src="/images/category.svg"></Image>
        <Image width="35" height="35" alt="" src="/images/heart.svg"></Image>
        <Image width="35" height="35" alt="" src="/images/buy.svg"></Image>
      </footer>
    </main>
  );
}

export default App;
