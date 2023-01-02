import Image from "next/image";
import React from "react";

const AutoHeardle = () => {
  return (
    <section className="flex flex-col gap-4 px-2 pb-2 bg-red-400">
      <div className="flex justify-center">
        <h2 className="py-4 text-2xl font-bold leading-10 text-center border-b border-black">
          AUTO HEARDLE
          {/* <div className="absolute w-[120%] sm:w-1/5 h-[1px] bottom-0 bg-slate-900"></div> */}
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="col-start-1 col-end-2">
          <div>
            <h3 className="text-2xl font-medium leading-8 underline">
              Explanation
            </h3>
            <p className="max-w-prose">
              When the wordle trend was blowing up, many alternatives to the
              main game appeared seemingly out of nowhere. One of the most
              popular ones being
              <a className="text-blue-800" href="https://render.com">
                {` heardle`}
              </a>
              . The game consisted in receiving a short snippet of a song and
              trying to guess its name. After a failed attempt a longer snippet
              would be given, increasing the chance of recognizing the song.
              Many variations of the game started to pop up, "Hiphop Heardle",
              "Rock Heardle", hell, even Taylor Swift had a Heardle of her own.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-medium leading-8 underline">
              My project
            </h3>
            <h4 className="text-lg font-medium">Problems I wanted to solve</h4>
            <p className="max-w-prose">
              Many of these custom games were forks of a certain Heardle
              project, which used SoundCloud as a source of the mp3 files and
              didn't work in most regions.
            </p>
            <p className="max-w-prose">
              I wanted to do something about it, I wanted heardles for everyone,
              but it had to meet certain criteria:
            </p>
            <ul className="list-disc list-inside">
              <li className="max-w-prose">
                I wanted the process to be extremely simple, absolutely no
                coding required.
              </li>
              <li className="max-w-prose">
                It was imperative for everyone to feel included, even indie
                bands with 1000 monthly listeners should have their own Heardle
              </li>
              <li className="max-w-prose">
                Most regions should have access to the site.
              </li>
            </ul>
            <h4 className="mt-2 text-lg font-medium">Technologies used</h4>
            <p className="max-w-prose">
              I took this opportunity to finally use typescript in a serious
              project, and since I needed to use a youtube music library / API
              wrapper, I learned to appreciate well-typed libraries.I also
              learned fastify for my API endpoints and basic validation.
            </p>
            <h4 className="mt-2 text-lg font-medium ">
              Some of the things I learned
            </h4>
            <ul className="list-item max-w-prose">
              <li>
                Hosting is relatively easy with
                <a className="text-blue-800" href="https://render.com">
                  {` render.com `}
                </a>
                and extremely easy with
                <a className="text-blue-800" href="https://railway.app">
                  {` railway.app`}
                </a>
                .
              </li>
              <li>
                Typescript basic concepts (generics, narrowing, inference)
              </li>
              <li>using LocalStorage</li>
              <li>Modifying environment variables on deploys</li>
              <li>
                Experimented a lot with different next.js rendering strategies.
                (Needed to statically generate to make it fast but it had to be
                done everyday)
              </li>
              <li> Fastify validation schemas.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium leading-6">
              Current state of the project
            </h4>
            <p className="max-w-prose">
              The project was unfortunately abandoned very close to its
              finishing. The reason was, even though railway had great response
              times (400ms for artists with big discographies), its free plan
              allows for 500hs/month which means it couldn't be on all month.
              Render allowed 24/7 uptime but took around 12 seconds, which is
              above the Limit for vercel's page generation on a hobby account.
            </p>
          </div>
        </div>
        <div className="flex self-center w-full max-w-2xl gap-2 p-2 overflow-x-scroll rounded-sm max-w- sm:overflow-auto sm:flex-col bg-stone-50 sm:h-fit">
          <Image
            width={1920}
            height={1080}
            alt="An example of the search screen"
            src="/heardle/search.png"
          />
          <Image
            width={1920}
            height={1080}
            alt="Search results"
            src="/heardle/search results.png"
          />{" "}
          <Image
            width={1920}
            height={1080}
            alt="An example of the site when playing an artist"
            src="/heardle/game example.png"
          />
        </div>
      </div>
    </section>
  );
};

export default AutoHeardle;
