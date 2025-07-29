<script lang="ts">
  let { name } = $props();
</script>

<li class="hover:bg-[#fefbdd] cursor-pointer group">
  <span class="p-2.5 leading-6 text-lg block group-hover:underline select-none">{name}</span>
</li>
