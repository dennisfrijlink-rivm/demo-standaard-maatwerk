<script lang="ts">
  import { getDataSetDetails, getDataSets } from "./lib/api";
  import FooterColumn from "./lib/components/FooterColumn.svelte";
  import FooterColumnItem from "./lib/components/FooterColumnItem.svelte";
  import NavItem from "./lib/components/NavItem.svelte";
  import SideMenuItem from "./lib/components/SideMenuItem.svelte";
  import SmodvFigure from "./lib/components/SmodvFigure.svelte";
  import type { DataSet } from "./lib/types";

  const dataSets = getDataSets();
  let url: string | undefined;

  function getConfig(conf: DataSet): string {
    const res = conf.result;
    const { resources } = res;
    const { url } = resources.filter(
      (r) => r.name.includes("config") && r.format.toLowerCase() == "json"
    )[0];
    return url;
  }
</script>

<div>
  <header class="flex justify-center">
    <img class="h-auto w-64" src="/demo-standaard-maatwerk/logo.svg" />
  </header>

  <nav class="mb-4">
    <div class="bg-main-light-yellow w-full">
      <div class="c-container">
        <span class="text-[1.3rem]">
          <strong>RIVM </strong>
          <em>De zorg voor morgen</em>
          begint vandaag
        </span>
      </div>
    </div>
    <div class="bg-main-yellow w-full">
      <div class="c-container">
        <ul class="flex">
          <li class="bg-[#fefbdd] cursor-pointer group w-11 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-[18px] h-[18px]"
            >
              <path
                d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z"
              />
            </svg>
          </li>
          <NavItem name="Onderwerpen" />
          <NavItem name="Over RIVM" />
          <NavItem name="Publicaties" />
          <NavItem name="Internationaal" />
          <NavItem name="Contact" />
          <NavItem name="Agenda" />
        </ul>
      </div>
    </div>
    <div class="bg-main-light-yellow w-full">
      <div class="c-container">
        <h1 class="text-[2.5rem] mb-2">Demo: Standaard Maatwerk</h1>
      </div>
    </div>
  </nav>

  <main>
    <div class="c-container flex flex-col lg:grid lg:grid-cols-12 gap-8">
      {#await dataSets}
        <p class="col-span-12">Loading data...</p>
      {:then data}
        <div class="col-span-4">
          <h2
            class="text-[#01689b] hover:text-[#154273] mb-2 hover:underline text-xl font-bold cursor-pointer"
          >
            In dit onderwerp
          </h2>
          <div class="flex flex-col gap-[0.125rem]">
            {#each data.result as item}
              <SideMenuItem
                onclick={async () => {
                  url = undefined;
                  const details = await getDataSetDetails(item);
                  url = getConfig(details);
                }}
              >
                {item}
              </SideMenuItem>
            {/each}
          </div>
        </div>

        <div class="col-span-8">
          {#if url}
            <SmodvFigure configSrc={url} />
          {/if}
        </div>
      {:catch error}
        <p class="col-span-12 text-red-600">Failed to load: {error.message}</p>
      {/await}
    </div>
  </main>
</div>

<footer class="bg-main-yellow border-t-2 border-[#4e4e4e] py-5 w-full mt-8">
  <div class="c-container grid grid-cols-4 gap-[30px]">
    <FooterColumn name="Service">
      <FooterColumnItem>Contact</FooterColumnItem>
      <FooterColumnItem>Persinformatie</FooterColumnItem>
      <FooterColumnItem>Werken bij het RIVM</FooterColumnItem>
      <FooterColumnItem>Klachten</FooterColumnItem>
      <FooterColumnItem>Woo-verzoeken bij het RIVM</FooterColumnItem>
      <FooterColumnItem>Zakendoen met het RIVM</FooterColumnItem>
    </FooterColumn>
    <FooterColumn name="Over deze site">
      <FooterColumnItem>Cookies</FooterColumnItem>
      <FooterColumnItem>Privacy</FooterColumnItem>
      <FooterColumnItem>Toegankelijkheid</FooterColumnItem>
      <FooterColumnItem>Disclaimer en copyright</FooterColumnItem>
      <FooterColumnItem>Responsible disclosure</FooterColumnItem>
      <FooterColumnItem>Website archief</FooterColumnItem>
    </FooterColumn>
    <FooterColumn name="Talen">
      <FooterColumnItem>English</FooterColumnItem>
      <FooterColumnItem>Nederlands</FooterColumnItem>
    </FooterColumn>
    <FooterColumn name="Volg ons">
      <FooterColumnItem>Abonneren nieuwsbrieven</FooterColumnItem>
      <FooterColumnItem>RSS feed</FooterColumnItem>
    </FooterColumn>
  </div>
</footer>
