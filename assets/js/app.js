const form=document.getElementById('shortenForm');
const result=document.getElementById('result');

form?.addEventListener('submit',async(e)=>{
  e.preventDefault();
  const url=document.getElementById('longUrl').value.trim();
  result.hidden=false;
  result.textContent='Shortening…';

  try{
    const r=await fetch('/api/shorten.php',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({url})
    });
    const d=await r.json();
    if(!r.ok||!d.success) throw new Error(d.message||'Unable to shorten URL');

    result.innerHTML=
      '<strong>Your short link</strong><br>'+
      '<a href="'+d.short_url+'" target="_blank" rel="noopener">'+
      d.short_url+'</a> '+
      '<button type="button" id="copyBtn">Copy</button>';

    document.getElementById('copyBtn').onclick=async()=>{
      await navigator.clipboard.writeText(d.short_url);
      document.getElementById('copyBtn').textContent='Copied';
    };
  }catch(err){
    result.textContent=err.message;
  }
});
