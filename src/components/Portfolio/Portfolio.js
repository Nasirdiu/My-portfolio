import React from "react";
import img from "../../images/project/ecommerce.png";
import img1 from "../../images/project/hoc.png";
import img2 from "../../images/project/musicapp.png";
import img3 from "../../images/project/sidebar.png";
import img4 from "../../images/project/download (2).png";
const Portfolio = () => {
  return (
    <div className="mt-40  bg-base-200 " id="portfolio">
      <h1 className="text-center text-3xl font-bold  p-20 uppercase">
        My Recent <span className="text-orange-400">Portfolio</span>
      </h1>
      <div
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 container mx-auto py-4 "
      >
        {/* number 1  */}
        <div class="card w-96 bg-base-100 shadow-xl hover:bg-orange-500">
          <figure class="px-10 pt-10">
            <img src={img3} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Car-auto-parts website</h2>

            <label
              for="my-modal-3"
              class="btn modal-button  btn-primary hover:bg-accent btn-sm "
            >
              Details
            </label>

            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box relative bg-black text-white">
                <label
                  for="my-modal-3"
                  class="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 class="text-lg font-bold">Car-auto-parts website</h3>
                <p class="py-4">
                  ● User Interface Developed With ReactJs ● Minimal Design With
                  Tailwind CSS ● Prevent Unauthorized Access By JSON Web Token ●
                  Routing Functionality with React-Router Used Techs: ReactJs,
                  NodeJs, MongoDB, Firebase, Stripe, Admin Panel
                </p>
              </div>
            </div>
            <div className="flex items-center   ">
              <div class="card-actions">
                <a
                  href="https://github.com/Nasirdiu/Assientment-12-client-site"
                  target="blank"
                >
                  {" "}
                  <button class="btn btn-primary  btn-sm hover:bg-accent">
                    Client
                  </button>
                </a>
              </div>
              <div class="card-actions">
                <a
                  href="https://github.com/Nasirdiu/Assientment--12-server-site"
                  target="blank"
                >
                  {" "}
                  <button class="btn btn-primary  btn-sm m-4 hover:bg-accent">
                    Server
                  </button>
                </a>
              </div>
              <div class="card-actions">
                <a href="https://car-auto-parts-e0b2d.web.app/" target="blank">
                  <button class="btn btn-primary  btn-sm hover:bg-accent">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* number 2  */}
        <div class="card w-96 bg-base-100 shadow-xl hover:bg-orange-500">
          <figure class=" pt-10">
            <img src={img} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Electronics Warehouse website</h2>
            <label
              for="my-modal-2"
              class="btn modal-button btn-primary hover:bg-accent btn-sm"
            >
              Details
            </label>

            <input type="checkbox" id="my-modal-2" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box relative bg-black text-white">
                <label
                  for="my-modal-2"
                  class="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 class="text-lg font-bold">Electronics Warehouse website</h3>
                <p class="py-4">
                  ● Product Management Functionality ● Developed UI with ReactJs
                  & Bootstrap ● Used NodeJs to perform CRUD operations Used
                  Techs: ReactJs, NodeJs, MongoDB, Bootstrap
                </p>
              </div>
            </div>

            <div className="flex items-center   ">
              <div class="card-actions">
                <a
                  href="https://github.com/Nasirdiu/Assientment--11-client-site"
                  target="blank"
                >
                  {" "}
                  <button class="btn btn-primary btn-sm hover:bg-accent">
                    Client
                  </button>
                </a>
              </div>
              <div class="card-actions">
                <a
                  href="https://github.com/Nasirdiu/Assientment--11-server-site"
                  target="blank"
                >
                  {" "}
                  <button class="btn btn-primary btn-sm m-4 hover:bg-accent">
                    Server
                  </button>
                </a>
              </div>
              <div class="card-actions">
                <a
                  href="https://electronics-warehouse-56938.web.app/"
                  target="blank"
                >
                  <button class="btn btn-primary btn-sm hover:bg-accent">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* number 3  */}
        <div class="card w-96 bg-base-100 shadow-xl hover:bg-orange-500">
          <figure class="px-10 pt-10">
            <img src={img2} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Wedding-venues website</h2>
            <label
              for="my-modal-1"
              class="btn modal-button btn-primary hover:bg-accent btn-sm"
            >
              Details
            </label>

            <input type="checkbox" id="my-modal-1" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box relative bg-black text-white">
                <label
                  for="my-modal-1"
                  class="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 class="text-lg font-bold">Wedding-venues website</h3>
                <p class="py-4">
                  wedding-venues website. ● Beautiful and Clean Design Used
                  ● Techs: Html Css Bootstrap  ●Hotel booking link.●Footer Play store linkup
                   ●Discount modal ●Netlify Upload
                </p>
              </div>
            </div>
            <div className="flex items-center   ">
              <div class="card-actions ">
                <a
                  href="https://github.com/Nasirdiu/Assientment--3"
                  target="blank"
                >
                  <button class="btn btn-primary btn-sm m-4 hover:bg-accent">
                    GitHub
                  </button>
                </a>
              </div>

              <div class="card-actions">
                <a href="https://wedding-venues.netlify.app/" target="blank">
                  {" "}
                  <button class="btn btn-primary btn-sm hover:bg-accent">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* number 4  */}
        <div class="card w-96 bg-base-100 shadow-xl hover:bg-orange-500">
          <figure class="px-10 pt-10">
            <img src={img1} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">luxury-living website</h2>
            <label
              for="my-modal-4"
              class="btn modal-button btn-primary hover:bg-accent btn-sm"
            >
              Details
            </label>

            <input type="checkbox" id="my-modal-4" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box relative bg-black text-white">
                <label
                  for="my-modal-4"
                  class="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 class="text-lg font-bold">luxury-living website</h3>
                <p class="py-4">
                  ● Beautiful and Clean Design ● Developed UI with ReactJs &
                  Tailwind ● Firebase Authentication For Users Used Techs:
                  ReactJs, Tailwind, Firebase
                </p>
              </div>
            </div>
            <div className="flex items-center   ">
              <div class="card-actions">
                <a
                  href="https://github.com/Nasirdiu/Project-dream-client"
                  target="blank"
                >
                  <button class="btn btn-primary btn-sm hover:bg-accent">
                    Client
                  </button>
                </a>
              </div>
              <div class="card-actions">
                <button class="btn btn-primary btn-sm m-4">Server</button>
              </div>
              <div class="card-actions">
                <a href="https://luxury-living-4fa76.web.app/" target="blank">
                  <button class="btn btn-primary btn-sm hover:bg-accent">
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* number 5  */}
        <div class="card w-96 bg-base-100 shadow-xl hover:bg-orange-500">
          <figure class="px-10 pt-10">
            <img src={img4} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Upcoming....</h2>
            <label
              for="my-modal-5"
              class="btn modal-button btn-primary hover:bg-accent btn-sm"
            >
              Details
            </label>

            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box relative bg-black text-white">
                <label
                  for="my-modal-5"
                  class="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 class="text-lg font-bold">Upcoming Soon.....</h3>
                <p class="py-4">Upcoming Soon.....</p>
              </div>
            </div>

            <div className="flex items-center   ">
              <div class="card-actions">
                <button class="btn btn-primary btn-sm hover:bg-accent">
                  Client
                </button>
              </div>
              <div class="card-actions">
                <button class="btn btn-primary btn-sm m-4 hover:bg-accent">
                  Server
                </button>
              </div>
              <div class="card-actions">
                <button class="btn btn-primary btn-sm hover:bg-accent">
                  Live
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* number six  */}
        <div class="card w-96 bg-base-100 shadow-xl hover:bg-orange-500">
          <figure class="px-10 pt-10">
            <img src={img4} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">Upcoming....</h2>
            <label
              for="my-modal-6"
              class="btn modal-button btn-primary hover:bg-accent btn-sm"
            >
              Details
            </label>

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box relative bg-black text-white">
                <label
                  for="my-modal-6"
                  class="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 class="text-lg font-bold">Upcoming Soon.....</h3>
                <p class="py-4">Upcoming Soon.....</p>
              </div>
            </div>
            <div className="flex items-center   ">
              <div class="card-actions">
                <button class="btn btn-primary btn-sm hover:bg-accent">
                  Client
                </button>
              </div>
              <div class="card-actions">
                <button class="btn btn-primary btn-sm m-4 hover:bg-accent">
                  Server
                </button>
              </div>
              <div class="card-actions">
                <button class="btn btn-primary btn-sm hover:bg-accent">
                  Live
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
