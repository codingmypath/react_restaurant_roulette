import React from 'react'
import Logo from './images/rest6.png'
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign, faStar, faStarHalfStroke} from "@fortawesome/free-solid-svg-icons";


function App() {
    const [products, setProducts] = React.useState([]);
    const [formData, setFormData] = React.useState( 
        {
        city: "los angeles",
        price: null,
        category: "food"
        }
    )



    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevChoice => {
            return {
                ...prevChoice,
                [name]: value
            }
        })
    }


    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)


        fetch(`/selection?${new URLSearchParams(formData)}`)
        .then((res) => res.json())
        // .then((data) => setFormData([JSON.parse(data), true]));
        // .then((data) => {
        //     console.log((data));
        //     setProducts(data);  
        // })
        .then((data) => {
            const testarray = [];
            testarray.push(data);
            setProducts(testarray);
          })
        // arr3 = Object.values(formData.data);    

    }


    return (
        
        <form onSubmit={handleSubmit}>
            <img className="logo" src={Logo} alt="Restaurant Roulette" />
            <h3>Location</h3>
            <input id="city" type="text" name="city" onChange={handleChange} value={formData.city || ""} placeholder="Zip or City & State" />

            <h3 className="priceHeader">Price</h3>

            <section id="priceSection">
            <label className="radioLabel" htmlFor="priceOne">
                <input onChange={handleChange} id="priceOne" type="radio" value="1" name="price" checked={formData.price === "1"} required onInvalid="alert('You must fill out the form!');" />
                <div className="radioButtons">
                    <FontAwesomeIcon icon={faDollarSign} />
                </div>
            </label>

            <label className="radioLabel" htmlFor="priceTwo">
                <input onChange={handleChange} id="priceTwo" type="radio" value="2" name="price" checked={formData.price === "2"} />
                <div className="radioButtons">
                    <FontAwesomeIcon icon={faDollarSign} />
                    <FontAwesomeIcon icon={faDollarSign} />
                </div>
            </label>

            <label className="radioLabel" htmlFor="priceThree">
                <input onChange={handleChange} id="priceThree" type="radio" value="3" name="price" checked={formData.price === "3"} />
                <div className="radioButtons">
                    {/* <p>$$$</p> */}
                    <FontAwesomeIcon icon={faDollarSign} />
                    <FontAwesomeIcon icon={faDollarSign} />
                    <FontAwesomeIcon icon={faDollarSign} />
                </div>
            </label>

            <label className="radioLabel" htmlFor="priceFour">
                <input onChange={handleChange} id="priceFour" type="radio" value="4" name="price" checked={formData.price === "4"} />
                <div className="radioButtons">
                    <FontAwesomeIcon icon={faDollarSign} />
                    <FontAwesomeIcon icon={faDollarSign} />
                    <FontAwesomeIcon icon={faDollarSign} />
                    <FontAwesomeIcon icon={faDollarSign} />
                </div>
            </label>
            
            <label className="radioLabel" htmlFor="priceAll">
                <input onChange={handleChange} id="priceAll" type="radio" value="1,2,3,4" name="price" checked={formData.price === "1,2,3,4"} />
                <div className="radioButtons">
                <p className="radioInputAll">All</p>
                </div>
            </label>
            </section>

            <h3 className="categoryHeader">Categories</h3>
            <section className="foodType">
            <label className="radioLabel">
                <input onChange={handleChange} type="radio" value="mexican" name="category" checked={formData.category === "mexican"} required onInvalid="alert('You must fill out the form!');" />
                <div className="radioButtons categoryButtons">
                    <p className="radioInputText">Mexican</p>
                    </div>
            </label>
            <label className="radioLabel" htmlFor="mediterranean">
                <input onChange={handleChange} type="radio" id="mediterranean" value="mediterranean" name="category" checked={formData.category === "mediterranean"} />
                <div className="radioButtons categoryButtons">
                    <p className="radioInputText">Mediterranean</p>
                    </div>
            </label>

            <label className="radioLabel" htmlFor="sushi">
                <input onChange={handleChange} type="radio" id="sushi" value="sushi" name="category" checked={formData.category === "sushi"} />
                <div className="radioButtons categoryButtons">
                    <p className="radioInputText">Sushi</p>
                    </div>
            </label>

            <label className="radioLabel">
                <input onChange={handleChange} type="radio" value="pizza" name="category" checked={formData.category === "pizza"} />
                <div className="radioButtons categoryButtons">
                    <p className="radioInputText">Pizza</p>
                    </div>
            </label>

            <label className="radioLabel">
                <input onChange={handleChange} type="radio" value="korean" name="category" checked={formData.category === "korean"} />
                <div className="radioButtons categoryButtons">
                    <p className="radioInputText">Korean</p>
                    </div>
            </label>

            <label className="radioLabel">
                <input onChange={handleChange} type="radio" value="coffee" name="category" checked={formData.category === "coffee"} />
                <div className="radioButtons categoryButtons">
                    <p className="radioInputText">Coffee</p>
                    </div>
            </label>

            <label className="radioLabel">
                <input onChange={handleChange} type="radio" value="burgers" name="category" checked={formData.category === "burgers"} />
                <div className="radioButtons categoryButtons">
                    <p className="radioInputText">Burger</p>
                    </div>
            </label>

            <label className="radioLabel">
                <input onChange={handleChange} type="radio" value="food" name="category" checked={formData.category === "food"} />
                <div className="radioButtons categoryButtons">
                    <p className="radioInputText">None</p>
                    </div>
            </label>
            </section>

        <br />
        <button>Submit</button>
        {/* <input className="button" type="submit" value="Submit"></input> */}

        <section>
        {products.map((item) => (
        <section className="whole" key={item.id}>
            <h2 className="restaurantHeader">Restaurant</h2>
            <h2 className="restaurantName">{item.name}</h2>
            <h2 class="rating">Rating</h2>
            <section class="starRating">
                {item.rating === 5 ? (<div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>) : 
                    item.rating === 4.5 ? (<div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></div>) : 
                        item.rating === 4 ? (<div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>) : 
                            item.rating === 3.5 ? (<div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></div>) : 
                                item.rating === 3 ? (<div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>) :
                                    item.rating === 2.5 ? (<div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></div>) :
                                        item.rating === 2 ? (<div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>) :
                                            item.rating === 1.5 ? (<div><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></div>) :
                                                item.rating === 3 ? (<div><FontAwesomeIcon icon={faStar} /></div>) :
                                                    <FontAwesomeIcon icon={faStarHalfStroke} />
                }
            </section>
            <h2 class="addressHeader">Address</h2>
            <h4 class="restaurantLocation">{item.location.display_address.join(' ')}</h4>
            <h4 class="restaurantNumber">{item.display_phone}</h4>
            <a className="url" href={item.url}>More Information</a>
            <img className="restImg" src={item.image_url} alt="Yelp restaurant" />
        </section>
      ))}
    </section>

        {/* <pre>
            {JSON.stringify(products, null, 2)}
        </pre> */}


        {/* <div>{formData.data}</div> */}
        </form>
        
    )
}

export default App;


// // client/src/App.js

// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>{!data ? "Loading..." : data}</p>
//       </header>
//     </div>
//   );
// }

// export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
