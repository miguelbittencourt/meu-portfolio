import { FaCircle } from "react-icons/fa";

const aboutMe = () => {
  return (
    <div className="flex flex-col mx-auto w-[95%]">
      <div className="w-fit">
        <h1 className="text-3xl p-3 text-white font-semibold bg-main-red">
          Sobre mim
        </h1>
      </div>
      <div className="flex gap-2 bg-gray-400 px-3 py-2 justify-between">
        <span className="italic font-medium text-xl text-white">
          codificando...
        </span>
        <div className="flex gap-2 items-center">
          <FaCircle className="text-red-500 size-5" />
          <FaCircle className="text-yellow-500 size-5" />
          <FaCircle className="text-green-500 size-5" />
        </div>
      </div>
      <div className="flex flex-col p-6 gap-3 font-light bg-gray-900 rounded-es-md rounded-ee-md text-white text-xl">
        <p>
          Meu nome é Miguel Bittencourt, sou Desenvolvedor FullStack e seja bem
          vindo ao meu portfolio!
        </p>
        <p>
          Sou apaixonado por tecnologia e sempre fui interessado por essa área,
          tive contato cedo com programação, no ensino médio comecei a ver e
          aprender sobre e foi aí que descobri minha paixão, desde então sigo
          aprendendo e buscando experiência através de projetos pessoais e
          oportunidades de trabalho para me tornar o melhor profissional que
          posso ser, nunca perdendo o brilho nos olhos por essa carreira que
          escolhi para minha vida. ❤️😎🚀
        </p>
      </div>
    </div>
  );
};

export default aboutMe;
