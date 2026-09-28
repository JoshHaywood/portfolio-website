<template>
  <section class="border-t border-white/[0.08] pt-16 sm:pt-20">
    <div class="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.9fr)] lg:gap-16 xl:gap-20">
      <div>
        <p class="font-mono text-xs font-medium uppercase tracking-[0.14em] text-primary">Contact</p>
        <h2 class="mt-4 max-w-[620px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
          Interested in working together?
        </h2>

        <p class="mt-5 max-w-[560px] text-base leading-7 text-gray-400">
          Based in South West England, I’m always happy to connect and discuss software engineering and the work I’m
          building.
        </p>

        <div class="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="mailto:joshhaywood025@gmail.com"
            class="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-secondary transition-[background-color,transform] hover:bg-primary/90 active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Email Josh
          </a>

          <a
            href="https://www.linkedin.com/in/josh-haywood"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/15 bg-white/[0.025] px-5 py-2.5 text-sm font-semibold text-white transition-[border-color,background-color,transform] hover:border-white/25 hover:bg-white/[0.05] active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            LinkedIn ↗
          </a>
        </div>

        <p class="mt-8 text-sm leading-6 text-[#7f8798]">Prefer a form? Send a short message here.</p>
      </div>

      <form
        class="rounded-xl border border-white/[0.08] bg-tertiary/55 p-5 sm:p-6"
        action="https://formsubmit.co/joshhaywood025@gmail.com"
        method="POST"
      >
        <p class="font-mono text-[0.68rem] font-medium uppercase tracking-[0.14em] text-[#7f8798]">Send a message</p>

        <div class="mt-5 grid gap-4 sm:grid-cols-2">
          <div class="space-y-2">
            <label for="contact-name" class="text-xs font-semibold text-gray-200">Name</label>
            <input
              id="contact-name"
              class="min-h-11 w-full rounded-lg border border-white/[0.08] bg-secondary/70 px-3 text-sm text-gray-200 outline-none transition-colors placeholder:text-[#7f8798] hover:border-white/[0.14] focus:border-primary/70 focus-visible:ring-2 focus-visible:ring-primary/30"
              type="text"
              name="name"
              autocomplete="name"
              placeholder="Your name"
              required
            />
          </div>

          <div class="space-y-2">
            <label for="contact-email" class="text-xs font-semibold text-gray-200">Email</label>
            <input
              id="contact-email"
              class="min-h-11 w-full rounded-lg border border-white/[0.08] bg-secondary/70 px-3 text-sm text-gray-200 outline-none transition-colors placeholder:text-[#7f8798] hover:border-white/[0.14] focus:border-primary/70 focus-visible:ring-2 focus-visible:ring-primary/30"
              type="email"
              name="email"
              autocomplete="email"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div class="mt-4 space-y-2">
          <label for="contact-message" class="text-xs font-semibold text-gray-200">Message</label>
          <textarea
            id="contact-message"
            class="w-full rounded-lg border border-white/[0.08] bg-secondary/70 px-3 py-3 text-sm text-gray-200 outline-none transition-colors placeholder:text-[#7f8798] hover:border-white/[0.14] focus:border-primary/70 focus-visible:ring-2 focus-visible:ring-primary/30"
            name="message"
            placeholder="What would you like to discuss?"
            rows="5"
            required
          />
        </div>

        <input type="hidden" name="_next" value="https://www.joshhaywood-portfolio.com/message-sent" />

        <button
          type="submit"
          class="mt-5 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-secondary transition-[background-color,transform] hover:bg-primary/90 active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Send message
        </button>
      </form>
    </div>
  </section>
</template>
