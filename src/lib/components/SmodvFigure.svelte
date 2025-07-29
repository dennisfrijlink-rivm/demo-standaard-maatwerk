<script lang="ts">
  type Props = {
    configSrc: string;
  };

  let { configSrc }: Props = $props();
</script>

<rivm-smodv-figure config-src={configSrc} />
