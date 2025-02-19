import type { Route } from './+types/resume';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Resume - megawebmaster.pl' },
    { name: 'description', content: 'Amadeusz\'s resume' },
  ];
}

export default function Resume() {
  // TODO: Improve header fonts - they are too bold
  // TODO: Can I use MDX here? Is it a good thing?
  return (
    <div className="grow grid grid-cols-5">
      <div className="bg-resume"/>
      <div className="col-start-2 bg-resume text-resume-foreground py-8 pl-8 flex flex-col gap-10">
        <img src="/me.jpg" alt="Picture of Amadeusz" className="mx-auto mt-8 mb-2 rounded-full size-40"/>
        <div className="flex flex-col gap-6">
          <div className="border-b border-resume-foreground pb-2">
            <h3 className="font-garet text-3xl tracking-wider">Expertise</h3>
          </div>
          <ul className="pr-2 pl-6 tracking-tight list-disc">
            {/* TODO: Make it work from a data structure */}
            <li className="mb-6">
              {/* TODO: Calculate experience automatically? */}
              <h4 className="font-semibold mb-1">Product Management (4 years)</h4>
              <p>Ideation, design, team management, backlog management</p>
            </li>
            <li className="mb-6">
              <h4 className="font-semibold mb-1">Full-stack web dev (16 years)</h4>
              <p>React, HTML, CSS, JavaScript, TypeScript, Ruby on Rails, PHP, Java</p>
            </li>
            <li className="mb-6">
              <h4 className="font-semibold mb-1">Databases (11 years)</h4>
              <p>Relational (MySQL, PostgreSQL), Document (MongoDB)</p>
            </li>
            <li className="mb-6">
              <h4 className="font-semibold mb-1">DevOps (3 years)</h4>
              <p>Kubernetes, Google Cloud Platform, AWS, Helm, Flux, Git</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <div className="border-b border-resume-foreground pb-2">
            <h3 className="font-garet text-3xl tracking-wider">Education</h3>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Computer Science, M. Sc.</h4>
            <p>AGH University of Science and Technology</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="border-b border-resume-foreground pb-2 mb-4">
            <h3 className="font-garet text-3xl tracking-wider">Languages</h3>
          </div>
          <h4 className="font-semibold">English (advanced)</h4>
          <h4 className="font-semibold">Polish (native)</h4>
        </div>
        <div className="flex flex-col gap-6">
          <div className="border-b border-resume-foreground pb-2">
            <h3 className="font-garet text-3xl tracking-wider">Side Projects</h3>
          </div>
          <ul className="pr-2 pl-6 list-disc">
            {/* TODO: Make it work from a data structure */}
            <li className="mb-6">
              {/* TODO: Link to My Projects page */}
              <h4 className="font-semibold tracking-tight text-lg">Finance tracking tool</h4>
              <p className="mt-2 tracking-tight">
                Designed a finance tracking tool to assign every dollar a purpose, initially focusing on personal
                expense management. Evolving to emphasize goal-driven saving, the tool motivates users by connecting
                financial tracking to achieving meaningful objectives, such as major purchases or life experiences.
              </p>
            </li>
            <li className="mb-6">
              <h4 className="font-semibold tracking-tight text-lg">Meeting planning tool</h4>
              <p className="mt-2 tracking-tight">
                Created a meeting planning tool to simplify scheduling for groups of friends, eliminating the need for
                manually creating multiple time slots. The app streamlines the process with a single form, significantly
                reducing effort for users with varied availability.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-2 bg-background text-accent p-8">
        <h1 className="text-5xl tracking-wider mt-10"><strong>Amadeusz</strong> Starzykiewicz</h1>
        <h2 className="text-2xl tracking-widest my-2 mb-6">Staff Software Engineer</h2>
        <p className="my-2 text-justify">
          I'm a software engineer who built a product from the start, heavily contributed to another three
          well-established ones and created a lot of of e-commerce plugins. When building solutions I'm focused on user
          experience. Always curious, always eager to learn more, always looking for improvements with constant drive
          for growth.
        </p>
        <p className="my-2 mb-10 text-justify">
          I'm truly passionate about delivering great products and making the world a better place, one step at a time.
          I want to grow in a product-focused way, so that I can help people around the world live a more fulfilling
          life.
        </p>
        <div className="border-b border-accent pb-2 mb-6">
          <h2 className="font-garet text-3xl tracking-wider">Experience</h2>
        </div>
        <div className="border-l border-accent ml-2 pl-6 flex flex-col gap-10">
          {/* TODO: Make it work from a data structure */}
          <div className="relative flex flex-col gap-1">
            <div className="absolute top-1.5 -left-8 rounded-full bg-accent size-4 flex items-center justify-center">
              <div className="size-2.5 bg-accent-foreground rounded-full"/>
            </div>
            {/* TODO: Calculate years and time from full dates */}
            <h4 className="text-xl">Castle Intelligence Inc. <span className="text-sm pl-2">2024 - 2025 · 1 yr 1 mo</span></h4>
            <h3 className="text-2xl font-semibold mb-2">Staff Software Engineer</h3>
            <p className="text-justify mb-1">
              I focused on figuring out, building, and delivering value that resonates with customers. The job involved
              adding new and improving existing product features, as well as improving developer experience when
              integrating the product to customers’ systems.
            </p>
            <ul className="list-disc pl-6 mb-1">
              <li className="mb-1">
                Improved product’s Integration Guide, which dropped number of questions for each new customer from 5 to
                0, significantly reducing support needs.
              </li>
              <li className="mb-1">
                Researched, created a proof-of-concept, and delivered an initial, production-ready behavioral analysis
                feature for catching scripted, bot-like user behavior.
              </li>
              <li className="mb-1">
                Created a production-ready browser analysis feature that helps identify bots among millions of requests.
              </li>
              <li className="mb-1">
                Created notifications processing for heavy load API with exactly-once sending behavior, with minimal
                performance impact and cooldown support.
              </li>
              <li className="mb-1">
                Created docs explaining each of 33 signals (product’s feature), wrote 5 new tutorials, 20 changelogs,
                and improved 4 feature pages - all focused on how customers can get value from the product.
              </li>
              <li className="mb-1">
                Added 5 small, quality-of-life improvements to the product.
              </li>
            </ul>
            <p className="text-justify">
              This meaningful impact on the product was a result of dedication, positive attitude with thoughtful
              approach, and my passion for problem solving.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-background"/>
    </div>
  );
}
