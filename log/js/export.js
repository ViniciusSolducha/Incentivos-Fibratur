(function(){
  function downloadCsv(filename,headers,rows){
    const esc=v=>'"'+String(v??'').replace(/"/g,'""')+'"';
    const content=[headers,...rows].map(row=>row.map(esc).join(';')).join('\r\n');
    const blob=new Blob(['\ufeff',content],{type:'text/csv;charset=utf-8;'});
    const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.download=filename;document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(link.href),0);
  }
  window.ExcelExport={downloadCsv};
})();
