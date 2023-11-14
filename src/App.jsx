import './App.css';
import Card from './components/Cards'



function App() {

const CardArr=[
  {
 image:"https://images.unsplash.com/photo-1699299229941-af8208a867ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 title:"More",
 raiting:"4"
}, 
{
  image:"https://images.unsplash.com/photo-1699469393845-72f735b2a273?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title:"Les",
  raiting:"5"
 }, 
 {
  image:"https://images.unsplash.com/photo-1699482360781-47a3c8fe5736?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title:"Pira",
  raiting:"3"
 }
]
  return (
   <div className='cards'>
  
  {
    CardArr && CardArr.map((oneCard)=>
      <Card img={oneCard.image} title={oneCard.title} raiting={oneCard.raiting}/>
    )
  }
   </div>

   
  );
}

export default App;
