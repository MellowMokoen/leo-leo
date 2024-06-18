import * as React from "react";

export default function Sidebar() {
  return (
    <div className="flex flex-col grow px-4 pt-8 pb-4 w-full rounded-3xl border-r border-solid bg-indigo-950 border-r-white border-r-opacity-10 max-md:pr-5 max-md:mt-9">
      <div className="flex flex-col">
        <div className="flex flex-col pb-20 text-3xl font-semibold leading-6 text-neutral-50">
          <div className="flex flex-col justify-center px-4 py-3 w-full rounded-xl bg-white bg-opacity-10">
            <div className="flex gap-4">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e1d54f81eb727e2a2f3a7831e0a8f60ca4fe3fee44cb34a40fa74a58980439b0?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1d54f81eb727e2a2f3a7831e0a8f60ca4fe3fee44cb34a40fa74a58980439b0?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1d54f81eb727e2a2f3a7831e0a8f60ca4fe3fee44cb34a40fa74a58980439b0?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1d54f81eb727e2a2f3a7831e0a8f60ca4fe3fee44cb34a40fa74a58980439b0?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1d54f81eb727e2a2f3a7831e0a8f60ca4fe3fee44cb34a40fa74a58980439b0?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1d54f81eb727e2a2f3a7831e0a8f60ca4fe3fee44cb34a40fa74a58980439b0?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1d54f81eb727e2a2f3a7831e0a8f60ca4fe3fee44cb34a40fa74a58980439b0?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e1d54f81eb727e2a2f3a7831e0a8f60ca4fe3fee44cb34a40fa74a58980439b0?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
                className="shrink-0 aspect-[1.15] w-[46px]"
              />
              <div className="flex-1 justify-center my-auto text-ellipsis">
                LEO AI
              </div>
            </div>
          </div>
        </div>
        <div className="flex z-10 flex-col -mt-10 text-base leading-6 text-neutral-200">
          <div className="flex flex-col">
            <div className="flex gap-3 px-4 py-3 rounded-xl shadow-sm">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aed2b430e23402cf3a07ac6a98451f8fffb78cc6e5c200ea9219b2547e482ba7?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
                className="shrink-0 my-auto w-5 aspect-square"
              />
              <div>How to write an impacting ...</div>
            </div>
            <div className="flex gap-3 px-4 py-3 mt-1.5 rounded-xl shadow-sm">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4dd117864cb03345263f28c7c9c24e2a3b9f38edffdbd029b40ea072c61f907d?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
                className="shrink-0 my-auto w-5 aspect-square"
              />
              <div>Web accessibility</div>
            </div>
            <div className="flex gap-3 px-4 py-3 mt-1.5 rounded-xl shadow-sm">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/74cef0e31d5fff0617b12269ca4b30d7c739b9c250aa2086e00edcdbfb7edfe6?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
                className="shrink-0 my-auto w-5 aspect-square"
              />
              <div>Design inspiration</div>
            </div>
            <div className="flex gap-3 px-4 py-3 mt-1.5 rounded-xl shadow-sm">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bae63a898b64fb86dfac8795a3826cb3599ecb991705a99167a0d2bb48c4fb76?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
                className="shrink-0 my-auto w-5 aspect-square"
              />
              <div>What is machine learning</div>
            </div>
          </div>
          <div className="flex gap-3 px-4 py-3 mt-4 font-medium bg-pink-800 rounded-xl shadow-sm">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1908a8ed01d8a18b56aa01a8afe7ca5d410c1636fdb90041f654e84dade64734?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
              className="shrink-0 w-6 aspect-square"
            />
            <div>Start a new chat</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-72 text-base leading-6 text-neutral-200 max-md:mt-10">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col pt-1.5">
            <div className="flex gap-3 px-4 py-3 rounded-xl shadow-sm">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0e7aef11c934c008a6a9e73d72daf1a60d38622c3b1dacfdea3c283a64f29a9?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
                className="shrink-0 my-auto w-5 aspect-square"
              />
              <div>Clear all conversations</div>
            </div>
            <div className="flex gap-3 px-4 py-3 mt-1.5 rounded-xl shadow-sm">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/740407130b641c6da27cf09d0b6a0949a24b543f1f62d1016ebc587d6c03c884?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
                className="shrink-0 my-auto w-5 aspect-square"
              />
              <div>Switch Light Mode</div>
            </div>
            <div className="flex gap-3 px-4 py-3 mt-1.5 rounded-xl shadow-sm">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/492ff50bc1a3acfb621a7b9b9d72d373d161c07ba723418cf9949ef20a3e38e7?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
                className="shrink-0 my-auto w-5 aspect-square"
              />
              <div>Upgrade to Pro</div>
            </div>
            <div className="flex gap-3 px-4 py-3 mt-1.5 rounded-xl shadow-sm">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/89efd716e130c963296dbf4ee52148df21158bf49191c532d642814f6b08a1a3?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
                className="shrink-0 my-auto w-5 aspect-square"
              />
              <div>Uptades & FAQ</div>
            </div>
            <div className="flex gap-3 px-4 py-3 mt-1.5 text-rose-500 rounded-xl shadow-sm">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cedb4974728f8f45aed33aa5b386e9ffee181ad7df81415a3149006e811b136b?apiKey=b9e8a53434bd4901a8aa6b01f0bdd9a1&"
                className="shrink-0 my-auto w-5 aspect-square"
              />
              <div>Log out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


