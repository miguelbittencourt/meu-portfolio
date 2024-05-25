import foto from "../../assets/foto_perfil.jpg";
import "animate.css";
import "./header.css";

const header = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center py-24 bg-banner bg-cover bg-no-repeat border-b-4 border-black">
      <img
        className="animate__animated animate__fadeInLeft object-cover w-[12rem] h-[12rem] rounded-[50%] border-solid border-4 border-black transition duration-300 hover:shadow-2xl dark:hover:shadow-black/30"
        src={foto}
        alt="foto perfil"
      />

      <div className="flex flex-col gap-2 justify-center text-center">
        <h1 className="title text-3xl font-semibold animate__animated animate__fadeInDown">
          Miguel Bittencourt
        </h1>
        <h2 className="font-medium text-3xl mt-3 header-description animate__animated animate__fadeInUp">
          FullStack Developer
        </h2>
      </div>
    </div>
  );
};

export default header;
