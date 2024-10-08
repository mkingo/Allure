// import React from 'react';
// import { Storage } from '@plasmohq/storage';

// const PinnedExtension = () => {
//   const storage = new Storage();
//   const handlePinnedExtension = async () => {
//     await storage.set("showDownloadAppBanner", "true");
//     await storage.set("firstTimeInstalled", "false");
//     chrome.tabs.reload();
//     window.close();
//   }
//   return (
//     <div className="items-stretch bg-white flex max-w-[338px] flex-col p-4 rounded-xl">
//       <p className="text-gray-700 text-xs font-semibold leading-4 mt-5">
//         Installation complete! BeTimeful for Chrome is ready to roll!
//       </p>
//       <div className="items-stretch flex justify-between gap-1 mt-5 pr-5">
//         <div className="items-stretch flex justify-between gap-0.5">
//           <p className="text-gray-700 text-sm font-semibold leading-5 grow whitespace-nowrap">
//             🚀 Click
//           </p>
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5477cf18418c1d9687813cc1167fbf0964dada0c48bf34471ec4011ce781bbb?apiKey=0436beccde534d31b167752db5474d49&"
//             className="mr-3 aspect-square object-contain object-center w-3.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
//             alt=""
//           />
//         </div>
//         <p className="text-gray-700 text-sm font-semibold leading-5 grow whitespace-nowrap">
//           to the right of the address bar, then
//         </p>
//       </div>
//       <div className="items-center flex gap-1">
//         <p className="text-gray-700 text-sm font-semibold leading-5">
//           click next to
//         </p>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/ede044ea2c9e4d6978c9e8c382ca8dd00d5382b20ea911a4b19ecf76b311330f?apiKey=0436beccde534d31b167752db5474d49&"
//           className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full my-auto"
//           alt=""
//         />
//         <p className="text-gray-700 text-sm font-semibold leading-5">pin it.</p>
//       </div>
//       <p className="text-gray-700 text-sm font-semibold leading-5 whitespace-nowrap mt-5">
//         Enjoy seamless productivity!
//       </p>
//       <img
//         loading="lazy"
//         srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3f476d11dfda8b443e4089c33ea5b298b02a21f18a43b2f3e43c34440c27fd08?apiKey=0436beccde534d31b167752db5474d49&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f476d11dfda8b443e4089c33ea5b298b02a21f18a43b2f3e43c34440c27fd08?apiKey=0436beccde534d31b167752db5474d49&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f476d11dfda8b443e4089c33ea5b298b02a21f18a43b2f3e43c34440c27fd08?apiKey=0436beccde534d31b167752db5474d49&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f476d11dfda8b443e4089c33ea5b298b02a21f18a43b2f3e43c34440c27fd08?apiKey=0436beccde534d31b167752db5474d49&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f476d11dfda8b443e4089c33ea5b298b02a21f18a43b2f3e43c34440c27fd08?apiKey=0436beccde534d31b167752db5474d49&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f476d11dfda8b443e4089c33ea5b298b02a21f18a43b2f3e43c34440c27fd08?apiKey=0436beccde534d31b167752db5474d49&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f476d11dfda8b443e4089c33ea5b298b02a21f18a43b2f3e43c34440c27fd08?apiKey=0436beccde534d31b167752db5474d49&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f476d11dfda8b443e4089c33ea5b298b02a21f18a43b2f3e43c34440c27fd08?apiKey=0436beccde534d31b167752db5474d49&"className="aspect-[1.66] object-contain object-center w-full overflow-hidden mt-5"
//         alt=""
//       />
//       <button
//         className="text-white text-center text-xs font-semibold justify-start items-stretch bg-[linear-gradient(135deg,#7C3AED_0%,#5821B6_100%)] mt-5 px-3.5 py-2 rounded-[109.442px] w-40"
//         role="open-store-install-pop-up"
//         aria-label="Yay, I have pinned it"
//         onClick={handlePinnedExtension}
//       >
//         Yay, I have pinned it
//       </button>
//     </div>
//   )
// }

// export default PinnedExtension

import React from 'react';
import { Storage } from '@plasmohq/storage';

const PinnedExtension = () => {
  const storage = new Storage();

  const handlePinnedExtension = async () => {
    await storage.set("showDownloadAppBanner", "true");
    await storage.set("firstTimeInstalled", "false");
    chrome.tabs.reload();
    window.close();
  }


  return (
    <div className="items-stretch bg-white flex flex-col p-4 rounded-xl max-w-[338px]">
      <p className="text-gray-700 text-xs font-semibold leading-4 mt-5">
        Installation complete! BeTimeful for Chrome is ready to roll!
      </p>
      <div className="flex items-stretch justify-between gap-1 mt-5 pr-5">
        <div className="flex items-stretch gap-0.5">
          <p className="text-gray-700 text-sm font-semibold leading-5 whitespace-nowrap">
            🚀 Click
          </p>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5477cf18418c1d9687813cc1167fbf0964dada0c48bf34471ec4011ce781bbb?apiKey=0436beccde534d31b167752db5474d49&"
            className="aspect-square object-contain object-center w-3.5 overflow-hidden self-center shrink-0 max-w-full my-auto"
            alt=""
          />
        </div>
        <p className="text-gray-700 text-sm font-semibold leading-5 whitespace-nowrap">
          to the right of the address bar, then
        </p>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-gray-700 text-sm font-semibold leading-5 whitespace-nowrap">
          click next to
        </p>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ede044ea2c9e4d6978c9e8c382ca8dd00d5382b20ea911a4b19ecf76b311330f?apiKey=0436beccde534d31b167752db5474d49&"
          className="aspect-square object-contain object-center w-3.5 overflow-hidden shrink-0 max-w-full my-auto"
          alt=""
        />
        <p className="text-gray-700 text-sm font-semibold leading-5 whitespace-nowrap">pin it.</p>
      </div>
      <p className="text-gray-700 text-sm font-semibold leading-5 whitespace-nowrap mt-5">
        Enjoy seamless productivity!
      </p>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3f476d11dfda8b443e4089c33ea5b298b02a21f18a43b2f3e43c34440c27fd08?apiKey=0436beccde534d31b167752db5474d49&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f476d11dfda8b443e4089c33ea5b298b02a21f18a43b2f3e43c34440c27fd08?apiKey=0436beccde534d31b167752db5474d49&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f476d11dfda8b443e4089c33ea5b298b02a21f18a43b2f3e43c34440c27fd08?apiKey=0436beccde534d31b167752db5474d49&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f476d11dfda8b443e4089c33ea5b298b02a21f18a43b2f3e43c34440c27fd08?apiKey=0436beccde534d31b167752db5474d49&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f476d11dfda8b443e4089c33ea5b298b02a21f18a43b2f3e43c34440c27fd08?apiKey=0436beccde534d31b167752db5474d49&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f476d11dfda8b443e4089c33ea5b298b02a21f18a43b2f3e43c34440c27fd08?apiKey=0436beccde534d31b167752db5474d49&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f476d11dfda8b443e4089c33ea5b298b02a21f18a43b2f3e43c34440c27fd08?apiKey=0436beccde534d31b167752db5474d49&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3f476d11dfda8b443e4089c33ea5b298b02a21f18a43b2f3e43c34440c27fd08?apiKey=0436beccde534d31b167752db5474d49&"
        className="aspect-[1.66] object-contain object-center w-full overflow-hidden mt-5"
        alt=""
      />
      <button
        className="text-white text-center text-xs font-semibold justify-start items-stretch bg-[linear-gradient(135deg,#7C3AED_0%,#5821B6_100%)] mt-5 px-3.5 py-2 rounded-[109.442px] w-40"
        role="open-store-install-pop-up"
        aria-label="Yay, I have pinned it"
        onClick={handlePinnedExtension}
      >
        Yay, I have pinned it
      </button>
    </div>
  );
}

export default PinnedExtension;
