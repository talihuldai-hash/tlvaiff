function toggleLang(){
  const b=document.body;
  if(b.dir==='ltr'){
    b.dir='rtl';b.lang='he';
    document.documentElement.lang='he';document.documentElement.dir='rtl';
    document.querySelector('.giant.en').style.display='none';
    document.querySelector('.giant.heb-block').style.display='block';
  }else{
    b.dir='ltr';b.lang='en';
    document.documentElement.lang='en';document.documentElement.dir='ltr';
    document.querySelector('.giant.en').style.display='block';
    document.querySelector('.giant.heb-block').style.display='none';
  }
}

const io=new IntersectionObserver((es)=>{
  es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')})
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  document.querySelectorAll('.float').forEach((f,i)=>{
    f.style.transform=`translateY(${y*(i?.08:-.06)}px)`;
  });
});
