import React from "react";

const Service = () => {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold text-orange-400">
        My Service
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-12">
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Service;
