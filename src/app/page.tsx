import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-bkg flex flex-col items-center justify-start p-4 sm:px-8 flex-1">
      <div className="max-w-3xl flex flex-col items-center justify-start sm:justify-center gap-12 ">
        <section className="p-8 bg-white rounded-lg shadow-lg space-y-4 mt-12 glow transform transition duration-200 hover:scale-105">
          <Link href={"/characters"}>
            <h2 className="font-hp text-4xl text-center text-bkg">
              Characters
            </h2>
            <p>
              <span className="font-bold font-hp text-bkg text-xl">D</span>
              etailed profiles of your favorite witches, wizards, and magical
              creatures. Discover their houses, backgrounds, and roles in the
              enchanting world created by J.K. Rowling. Click on a character to
              learn more about their stories and magical abilities.
            </p>
          </Link>
        </section>
        <span>🎇</span>
        <section className="p-8 bg-white rounded-lg shadow-lg space-y-4 glow transform transition duration-200 hover:scale-105">
          <Link href={"/students"}>
            <h2 className="font-hp text-4xl text-center text-bkg">Students</h2>
            <p>
              <span className="font-bold font-hp text-bkg text-xl">E</span>
              xplore the profiles of Hogwarts young witches and wizards from all
              four houses—Gryffindor, Slytherin, Ravenclaw, and Hufflepuff.
              Discover their backgrounds, magical abilities, and adventures as
              they learn and grow at the prestigious Hogwarts School of
              Witchcraft and Wizardry.
            </p>
          </Link>
        </section>
        <span>🎇</span>
        <section className="p-8 bg-white rounded-lg shadow-lg space-y-4 glow transform transition duration-200 hover:scale-105">
          <Link href={"/staff"}>
            <h2 className="font-hp text-4xl text-center text-bkg">Staff</h2>
            <p>
              <span className="font-bold font-hp text-bkg text-xl">W</span>
              elcome to the Staff List of the Harry Potter universe. Meet the
              dedicated professors, caretakers, and magical beings who make
              Hogwarts School of Witchcraft and Wizardry a place of wonder and
              learning. Discover their backgrounds, magical specialties, and the
              pivotal roles they play in shaping the lives of young witches and
              wizards.
            </p>
          </Link>
        </section>
      </div>
    </main>
  );
}
