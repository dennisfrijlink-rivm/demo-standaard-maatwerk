<script lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLButtonAttributes } from "svelte/elements";

  type Props = {
    children: Snippet;
  } & HTMLButtonAttributes;

  let { children, ...restProps }: Props = $props();
</script>

<button class="bg-[#f3f3f3] p-2 group cursor-pointer text-left" {...restProps}>
  <span class="text-sm text-[#01689b] group-hover:underline group-hover:text-[#154273]"
    >{@render children()}</span
  >
</button>
