import React, { useState } from 'react';
import { groveCollections } from '../lib/grove-catalog';

const questions = [
  { label: 'What are you shopping for?', options: ['An everyday kitchen knife','A special dinner or carving knife','A cutting board or knife care','A thoughtful gift'] },
  { label: 'What matters most?', options: ['Comfort and easy handling','Versatility for everyday prep','Craftsmanship and materials','Simple maintenance'] }
];
const recommendations = [
  { title:'The Chef’s Selection', slug:'chefs-selection', text:'Start with versatile, comfortable knives chosen for real kitchens.' },
  { title:'At the Table', slug:'at-the-table', text:'Explore knives that make carving and sharing a meal a pleasure.' },
  { title:'Protect Your Edge', slug:'protect-your-edge', text:'Good boards, storage and care tools protect your investment.' },
  { title:'The Cutler’s Collection', slug:'cutlers-collection', text:'Discover a thoughtful assortment of kitchen essentials.' }
];
export default function FindMyKnife() {
  const [answers,setAnswers] = useState({});
  const complete = questions.every((_,i)=>answers[i] !== undefined);
  const choice = answers[0] ?? 0;
  const recommendation = recommendations[choice];
  return <main style={{background:'#FAF9F5',color:'#263D32',minHeight:'100vh',fontFamily:'Arial,sans-serif',padding:'40px 22px'}}>
    <div style={{maxWidth:760,margin:'auto'}}>
      <a href="/grove-preview" style={{color:'#81543B'}}>← Grove Cutlery Co.</a>
      <p style={{fontSize:12,letterSpacing:3,marginTop:50}}>ASK THE CHEF / PERSONAL SHOPPING</p>
      <h1 style={{fontFamily:'Georgia,serif',fontWeight:400,fontSize:'clamp(38px,6vw,64px)'}}>Find My Knife</h1>
      <p style={{fontSize:18,lineHeight:1.6}}>You don't need to know steel grades or Japanese knife terminology. Tell us a little about your kitchen, and we'll point you in the right direction.</p>
      {questions.map((q,i)=><fieldset key={q.label} style={{border:'1px solid #CCD1CA',padding:24,marginTop:24}}>
        <legend style={{fontWeight:700,padding:'0 8px'}}>{i+1}. {q.label}</legend>
        <div style={{display:'grid',gap:10,marginTop:8}}>
          {q.options.map((option,j)=><label key={option} style={{padding:14,background:answers[i]===j?'#E5ECE6':'white',border:'1px solid '+(answers[i]===j?'#899889':'#D4D8D0'),cursor:'pointer'}}>
            <input type="radio" name={'question'+i} checked={answers[i]===j} onChange={()=>setAnswers(a=>({...a,[i]:j}))} style={{marginRight:10}}/>{option}
          </label>)}
        </div>
      </fieldset>)}
      {complete&&<section aria-live="polite" style={{background:'#263D32',color:'#FAF9F5',padding:30,marginTop:26}}>
        <p style={{letterSpacing:2,fontSize:12,color:'#E2B58F'}}>YOUR STARTING POINT</p>
        <h2 style={{font:'36px Georgia,serif'}}>{recommendation.title}</h2>
        <p style={{lineHeight:1.7}}>{recommendation.text}</p>
        <p style={{fontSize:13,color:'#CBD8D0'}}>Our verified product catalog is being prepared. We won't recommend an unverified SKU or display a made-up price.</p>
        <a href="https://chefknifeworks.com/reserve" style={{color:'#F0C09D'}}>Already have knives? Reserve professional sharpening →</a>
      </section>}
      <p style={{fontSize:13,color:'#6A746D',marginTop:32}}>Preview only. No customer information is collected or stored.</p>
    </div>
  </main>;
}
