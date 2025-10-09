const Hero = () => {
 return(
    <main className="hero container">
        <div className="hero-content">
            <h1>Your Feet deserves the best</h1>
          
            <p>
                YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
            </p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button>Category</button>
            </div>
            <div className="shopping">
                <p>Also Available on :</p>

                <div className="brand-icons"></div>
                <img src="/src/assets/images/flipkart.png" alt="" />
                <img src="/src/assets/images/amazon.png" alt="" />
            </div>
        </div>
        <div className="hero-image"></div>
        <img src="/src/assets/images/shoe_image.png" alt=""></img>
    </main>

 )
}
export default Hero;