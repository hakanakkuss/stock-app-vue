<template>
  <div class="bg-custom-blue">
    <div class="flex items-center justify-center mt-40">
      <div class="w-9/12 max-w-full">
        <div class="h-96" ref="container"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.loadTradingViewChart()
    if (this.$route.params.code) {
      this.loadTradingViewChart(this.$route.params.code);
    }

    this.$watch('$route.params.row.code', (newCode, oldCode) => {
      if (newCode !== oldCode) {
        this.loadTradingViewChart(newCode);
      }
    });
  },
  methods: {
    loadTradingViewChart(code) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.type = 'text/javascript';
      script.async = true;
      script.innerHTML = `
      {
        "autosize": true,
        "symbol": "${code}",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "tr",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "support_host": "https://www.tradingview.com"
      }`;
      this.$refs.container.appendChild(script);
    },
  },
};
</script>