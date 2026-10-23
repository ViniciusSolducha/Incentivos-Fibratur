(function(){
  const currency=new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:2});
  const compact=new Intl.NumberFormat('pt-BR',{notation:'compact',maximumFractionDigits:1});
  const percent=new Intl.NumberFormat('pt-BR',{style:'percent',maximumFractionDigits:1});
  window.Format={currency,compact,percent,currencyShort(v){return currency.format(v)},pct(v){return percent.format(v)},plain(v,d=0){return new Intl.NumberFormat('pt-BR',{maximumFractionDigits:d}).format(v)}};
})();
