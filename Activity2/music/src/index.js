import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the /client import
import Card from './Card';

const App = () => {
  return (
    <div className='d-flex flex-column align-items-center'>
        <h1>Music I really like</h1>
        <Card
        className="m-5"
        albumTitle="MAYHEM"
        albumDescription = "Mayhem is the sixth solo studio album by American singer and songwriter Lady Gaga and her eighth overall. "
        imgURL= "https://upload.wikimedia.org/wikipedia/en/d/db/Lady_Gaga_-_Mayhem.png"
        buttonText="OK"
        />
        
        
        <Card 
        albumTitle="Chromatica"
        albumDescription = "Chromatica is the fifth solo studio album by American singer-songwriter Lady Gaga and her sixth overall. Musically, Chromatica is a dance-pop record inspired by early 1990s house music, returning Gaga to her dance music roots and eschewing the stripped-down style of its predecessors Joanne (2016) and A Star Is Born (2018). The album's visual aesthetic saw Gaga adopt a cyberpunk-inspired persona."
        imgURL= "https://upload.wikimedia.org/wikipedia/en/d/d6/Lady_Gaga_-_Chromatica_%28Official_Album_Cover%29.png"
        buttonText="OK"
        />

        <br/>
        <Card 
        albumTitle="Montgomery Ricky"
        albumDescription = "Ricky Montgomery’s music was ahead of its time—literally. His 2016 debut album Montgomery Ricky, featuring the two once-obscure, yet universal singles – “Line Without A Hook” and “Mr. Loverman” – made him an unexpected hitmaker four years after their original release, now surpassing more than 1 billion global streams to date."
        imgURL= "https://m.media-amazon.com/images/I/91TcSMLAWrL._SY355_.jpg"
        buttonText="OK"
        />
    </div>
  );
};

// assignment info was for older version of react
// this is using newer version
// https://react.dev/reference/react-dom/client/createRoot

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// 3. Render your app using the root object
root.render(<App />);
