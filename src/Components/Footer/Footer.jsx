const Footer = () => {
  return (
    <div className="bg-dark-1 py-28">
      <div className=" max-w-7xl mx-auto px-5 ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-gray-800 mb-10 pb-10">
          <div className="col-span-2 mb-10">
            <h2>
              <a href="/" className="text-3xl font-extrabold text-white ">
                CareerHub
              </a>
            </h2>
            <p className="text-[#FFFFFFB2] my-5 max-w-[300px]">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <a href="">
              <img
                className="inline"
                src="https://i.ibb.co/Xp2yvny/social.png"
                alt=""
              />
            </a>
          </div>
          <div>
            <h3 className="text-xl text-white font-semibold mb-5">Company</h3>
            <ul>
              <li className="mb-2">
                <a className="text-[#FFFFFFB2]" href="">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a className="text-[#FFFFFFB2]" href="">
                  Work
                </a>
              </li>
              <li className="mb-2">
                <a className="text-[#FFFFFFB2]" href="">
                  Latest News
                </a>
              </li>
              <li className="mb-2">
                <a className="text-[#FFFFFFB2]" href="">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-10">
            <h3 className="text-xl text-white font-semibold mb-5">Product</h3>
            <ul>
              <li className="mb-2">
                <a className="text-[#FFFFFFB2]" href="">
                  Prototype
                </a>
              </li>
              <li className="mb-2">
                <a className="text-[#FFFFFFB2]" href="">
                  Plans & Pricing
                </a>
              </li>
              <li className="mb-2">
                <a className="text-[#FFFFFFB2]" href="">
                  Customers
                </a>
              </li>
              <li className="mb-2">
                <a className="text-[#FFFFFFB2]" href="">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-white font-semibold mb-5">Support</h3>
            <ul>
              <li className="mb-2">
                <a className="text-[#FFFFFFB2]" href="">
                  Help
                </a>
              </li>
              <li className="mb-2">
                <a className="text-[#FFFFFFB2]" href="">
                  Desk Sales
                </a>
              </li>
              <li className="mb-2">
                <a className="text-[#FFFFFFB2]" href="">
                  Become a Partner
                </a>
              </li>
              <li className="mb-2">
                <a className="text-[#FFFFFFB2]" href="">
                  Developers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-white font-semibold mb-5">Contact</h3>
            <ul>
              <li className="mb-2">
                <a className="text-[#FFFFFFB2]" href="">
                  524 Broadway , NYC
                </a>
              </li>
              <li className="mb-2">
                <a className="text-[#FFFFFFB2]" href="">
                  +1 777 - 978 - 5570
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-[#FFFFFFB2] flex justify-between">
          <p>@2023 CareerHub. All Rights Reserved</p>
          <p>Powered by CareerHub</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
