<template>
  <div class="flex items-center justify-center mt-40">
    <div class="tradingview-widget-container__widget" style="height: calc(100% - 32px); width: 100%"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "XAUTRY1!",
        "interval": "D",
        "timezone": "exchange",
        "theme": "dark",
        "style": "1",
        "locale": "tr",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "calendar": true,
      }
    `;
    this.$el.querySelector('.tradingview-widget-container__widget').appendChild(script);
  },
};
</script>
