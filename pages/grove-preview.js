import React from 'react';

const collections = [
  { title: "The Cutler’s Collection", subtitle: "Our signature assortment", description: "Thoughtfully chosen essentials for kitchens that work hard.", accent: "#D4B18A" },
  { title: "The Chef’s Selection", subtitle: "Chosen by a chef", description: "Practical, beautiful knives selected for everyday performance.", accent: "#899889" },
  { title: "At the Table", subtitle: "Make dinner an occasion", description: "Steak knives, carving tools and thoughtful table essentials.", accent: "#C8754E" },
  { title: "In the Kitchen", subtitle: "Tools for everyday cooking", description: "From prep to plating, the right tool makes a difference.", accent: "#9AA9B5" },
  { title: "Protect Your Edge", subtitle: "Care that lasts", description: "Boards, storage and accessories that respect your knives.", accent: "#B6A98C" }
];

export default function GrovePreview() {
  return <main style={{fontFamily:"Georgia,serif",color:"#FAF9F5",background:"#111A17",minHeight:"100vh"}}>
    <div style={{background:"#263D32",padding:"12px 24px",textAlign:"center",font:"12px Arial,sans-serif",letterSpacing:2}}>BORN IN MAPLE GROVE · BUILT FOR EVERYDAY KITCHENS</div>
    <header style={{maxWidth:1180,margin:"auto",padding:"24px 28px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:16,flexWrap:"wrap"}}>
      <div><div style={{fontSize:27,letterSpacing:1}}>GROVE <span style={{color:"#C8754E"}}>CUTLERY</span> CO.</div><div style={{font:"11px Arial,sans-serif",letterSpacing:3,marginTop:6}}>BY CHEF KNIFEWORKS</div></div>
      <nav style={{display:"flex",gap:18,flexWrap:"wrap",font:"13px Arial,sans-serif"}}><a style={{color:"inherit"}} href="#collections">Collections</a><a style={{color:"inherit"}} href="#experience">Find My Knife</a><a style={{color:"inherit"}} href="https://chefknifeworks.com/reserve">Sharpening</a></nav>
    </header>
    <section style={{background:"linear-gradient(120deg,#172923,#263D32)",padding:"clamp(60px,10vw,130px) 28px"}}>
      <div style={{maxWidth:1180,margin:"auto"}}>
        <p style={{font:"12px Arial,sans-serif",letterSpacing:4,color:"#D4B18A"}}>THE ART OF EVERYDAY CUTLERY</p>
        <h1 style={{fontSize:"clamp(43px,7vw,92px)",fontWeight:400,maxWidth:850,lineHeight:1.07,margin:"22px 0"}}>Everyday knives.<br/><em style={{color:"#D4B18A"}}>Properly cared for.</em></h1>
        <p style={{font:"18px/1.7 Arial,sans-serif",maxWidth:560,color:"#DADFD8"}}>Good knives belong in every kitchen. Discover thoughtfully chosen cutlery, honest advice, and the care to keep your edges working beautifully.</p>
        <a href="#collections" style={{display:"inline-block",marginTop:24,padding:"16px 24px",background:"#C8754E",color:"#111",font:"bold 13px Arial,sans-serif",textDecoration:"none"}}>EXPLORE THE COLLECTIONS →</a>
      </div>
    </section>
    <section id="collections" style={{maxWidth:1180,margin:"auto",padding:"76px 28px"}}>
      <p style={{font:"12px Arial,sans-serif",letterSpacing:3,color:"#D4B18A"}}>CURATED WITH PURPOSE</p>
      <h2 style={{fontSize:"clamp(34px,5vw,55px)",fontWeight:400}}>The collections</h2>
      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:18}}>
        {collections.map((c,i)=><article key={c.title} style={{background:"#23312B",minHeight:260,padding:25,borderTop:"5px solid "+c.accent,display:"flex",flexDirection:"column",justifyContent:"end"}}>
          <span style={{color:c.accent,font:"11px Arial,sans-serif",letterSpacing:2}}>0{i+1} / {c.subtitle.toUpperCase()}</span>
          <h3 style={{fontSize:29,fontWeight:400,margin:"15px 0 8px"}}>{c.title}</h3>
          <p style={{font:"14px/1.6 Arial,sans-serif",color:"#D0D9D1"}}>{c.description}</p>
        </article>)}
      </div>
    </section>
    <section id="experience" style={{background:"#FAF9F5",color:"#18261F",padding:"72px 28px"}}>
      <div style={{maxWidth:1180,margin:"auto"}}>
        <p style={{font:"12px Arial,sans-serif",letterSpacing:3,color:"#8C5339"}}>HOW CAN WE HELP?</p>
        <h2 style={{fontSize:44,fontWeight:400}}>A better kitchen starts here.</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:20}}>
          {["Find My Knife","Keep My Edge","Find a Great Gift"].map(x=><div key={x} style={{border:"1px solid #C8C7BE",padding:25}}><h3 style={{fontSize:25,fontWeight:400}}>{x}</h3><p style={{font:"14px/1.6 Arial,sans-serif"}}>Personal guidance and practical recommendations. Coming with the catalog launch.</p></div>)}
        </div>
      </div>
    </section>
    <footer style={{padding:"38px 28px",textAlign:"center",font:"13px Arial,sans-serif",color:"#BBC9C0"}}>GROVE CUTLERY CO. · BY CHEF KNIFEWORKS<br/><br/>Your neighborhood cutlery company · Preview only — checkout is not enabled.</footer>
  </main>;
}
