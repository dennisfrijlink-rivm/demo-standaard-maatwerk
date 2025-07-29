<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    name: string;
    children: Snippet;
  };

  let { children, name }: Props = $props();
</script>

<div>
  <h2 class="pb-1 pt-[30px] text-2xl border-b border-black">{name}</h2>
  <ul class="flex flex-col gap-1 mt-3">
    {@render children()}
  </ul>
</div>
