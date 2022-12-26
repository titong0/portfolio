import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-blue-300">
      <div className="">
        <h1 className="py-3 text-2xl font-bold text-center">About me</h1>
        <h2 className="ml-2 text-xl font-medium leading-8">Me</h2>
        <p className="ml-2">
          I'm a really passionate 16 year old developer from Argentina. I
          started learning web development in 2020 and to this day I'm always
          trying to be better. I really enjoy incorporating new technologies but
          I generally prefer to
          <em className="italic"> specialize</em> in one at a time.
        </p>
        <p className="ml-2">
          I'm more of a math and problem solving guy so design is not something
          I take in my stride. I still try to improve my skills and I hope
          someday I can put together a site without much doubt.
        </p>
        <h2 className="ml-2 text-xl font-medium leading-8">Interests</h2>
        <p className="ml-2">
          besides programming, I <em className="italic">love </em>
          being somewhat knowledgeable in fields such as math, physics, game
          design, music and history.
        </p>
        <p className="ml-2">
          While I can fluently speak english, I think that one can never fully
          know a language so I'm always learning.
        </p>
        <p className="my-2 ml-2">
          I also like photography. Mostly just my pets but I like to photograph
          everything.
        </p>
        <div className="grid grid-cols-4 ml-2 bg-stone-100">
          <Image
            className="h-auto p-1"
            alt="My dog poroto"
            src="/gallery/poroto.png"
            height="1500"
            width="1000"
          />
          <Image
            className="h-auto p-1"
            alt="My dog sarita"
            src="/gallery/sarita.png"
            height="1500"
            width="1000"
          />
          <Image
            className="h-auto p-1"
            alt="Stary night"
            src="/gallery/stars.png"
            height="1500"
            width="1000"
          />
          <Image
            className="h-auto p-1"
            alt="Argentina's capital"
            src="/gallery/city.png"
            height="1500"
            width="1000"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
