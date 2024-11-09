
import Image from 'next/image';


const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/hero.png" 
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 -z-10"
      />
      <div className="text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Web Magnetism</h1>
        <p className="text-lg md:text-2xl">Transforming Business with unique web design and strategic digital marketing</p>
        <div className="flex justify-center">
        <div className="flex justify-center">
        <div className="flex justify-center">
  <button
    className="mt-6 px-8 py-3 text-white rounded-full flex items-center space-x-2 border border-white"
    style={{
      background: 'linear-gradient(93.05deg, #FF66C4 5.8%, rgba(242, 74, 177, 0) 98.1%)'
    }}
  >
    <span>Get a Proposal</span>
    <Image src="/arrow.png" alt="arrow icon" width={16} height={16} />
  </button>
</div>

</div>

</div>

      </div>
  
    </section>
  );
};

export default Hero;
