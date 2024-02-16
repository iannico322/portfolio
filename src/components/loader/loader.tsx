import "./loader.css";
const Loader = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black ">
      <div className="container">
        <div className="content ">
          <div className="content__container ">
            <p className="content__container__text text-[35px] flex items-center justify-center sm:mt-10 sm:text-[40px]">Hello,</p>

            <ul className="content__container__list sm:text-sm p-0 ">
              <li className="content__container__list__item">World ! </li>
              <li className="content__container__list__item">I'm Ian Nico ! </li>
              <li className="content__container__list__item">
                I'm a Developer!{" "}
              </li>
              <li className="content__container__list__item">
                I'm a Designer!{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
