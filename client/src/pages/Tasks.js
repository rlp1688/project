import React from "react";
import Header from '../components/Header1'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


export default function Tasks(){





return (
  <>
<Header/>
<table className="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">question</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
   
      <tr>
        <td>1.</td>
        <td>පැලයක් සිටුවීම</td>
        <td>
        <div>
                 
                  <Link to={`/question01/${1}`}>
                    <button className="btn btn-primary" style={{ marginRight: '10px' }}>To question</button>
                  </Link>
                  
                </div>
        </td>
      </tr>

      <tr>
        <td>2.</td>
        <td>මා පිලිබද තොරතුරු</td>
        <td>
        <div>
                 
                  <Link to={`/question02/${2}`}>
                    <button className="btn btn-primary" style={{ marginRight: '10px' }}>To question</button>
                  </Link>
                  
                </div>
        </td>
      </tr>

      <tr>
        <td>3.</td>
        <td>ස්වභාවධර්මයට ආදරය කිර්‍ර්ම</td>
        <td>
        <div>
                 
                  <Link to={`/question03/${3}`}>
                    <button className="btn btn-primary" style={{ marginRight: '10px' }}>To question</button>
                  </Link>
                  
                </div>
        </td>
      </tr>

      <tr>
        <td>4.</td>
        <td>පාසල් නිල ඇදුම සමග පිංතූරය</td>
        <td>
        <div>
                 
                  <Link to={`/question04/${4}`}>
                    <button className="btn btn-primary" style={{ marginRight: '10px' }}>To question</button>
                  </Link>
                  
                </div>
        </td>
      </tr>

      <tr>
        <td>5.</td>
        <td>උපන් දින සමාජ සේවය</td>
        <td>
        <div>
                 
                  <Link to={`/question05/${5}`}>
                    <button className="btn btn-primary" style={{ marginRight: '10px' }}>To question</button>
                  </Link>
                  
                </div>
        </td>
      </tr>
    
      <tr>
        <td>6.</td>
        <td>මා ගිය චාරිකා</td>
        <td>
        <div>
                 
                  <Link to={`/question07/${7}`}>
                    <button className="btn btn-primary" style={{ marginRight: '10px' }}>To question</button>
                  </Link>
                  
                </div>
        </td>
      </tr>
      <tr>
        <td>7.</td>
        <td>මා සම්බන්ධ වූ ආගමික වැඩසටහන්</td>
        <td>
        <div>
                 
                  <Link to={`/question08/${8}`}>
                    <button className="btn btn-primary" style={{ marginRight: '10px' }}>To question</button>
                  </Link>
                  
                </div>
        </td>
      </tr>
      <tr>
        <td>8.</td>
        <td>මාගේ ජීවිතයේ නොමැකෙන සිහිවටන</td>
        <td>
        <div>
                 
                  <Link to={`/question09/${9}`}>
                    <button className="btn btn-primary" style={{ marginRight: '10px' }}>To question</button>
                  </Link>
                  
                </div>
        </td>
      </tr>
      <tr>
        <td>9.</td>
        <td>මාගේ ක්‍රීඩා ජයග්‍රහණය</td>
        <td>
        <div>
                 
                  <Link to={`/question10/${10}`}>
                    <button className="btn btn-primary" style={{ marginRight: '10px' }}>To question</button>
                  </Link>
                  
                </div>
        </td>
      </tr>

  </tbody>
</table>

  </>
  
  


);

}

