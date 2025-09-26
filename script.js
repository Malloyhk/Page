document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('year').textContent=new Date().getFullYear();
  const form=document.getElementById('checkoutForm');
  const pixArea=document.getElementById('pix-area');
  const copyBtn=document.getElementById('copyPix');
  const pixCode=document.getElementById('pix-code');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    pixArea.hidden=false;
    alert('Pedido iniciado! Complete o pagamento com Pix.');
  });
  copyBtn.addEventListener('click',function(){
    pixCode.select();document.execCommand('copy');
    alert('Código Pix copiado!');
  });
});