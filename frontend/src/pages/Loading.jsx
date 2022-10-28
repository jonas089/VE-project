import React from 'react';
function Loading() {
    return(
      <div>
        <div class="flex h-screen justify-center items-center">
              <div class="rounded relative">
                <div
                  class="rounded-full bg-indigo-200 w-[176px] h-[176px] relative flex justify-center items-center mx-auto animate-spin"
                >
                  <svg
                    class="absolute top-4 right-6"
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="10" fill="#4338CA" />
                  </svg>
                  <div class="div rounded-full bg-slate-50 w-[150px] h-[150px]"></div>
                </div>
                <p class="mt-6 text-base font-medium text-gray-800 text-center">
                  Loading Casper Signer...
                </p>
              </div>
          </div>
      </div>
    );
}

export default Loading;
