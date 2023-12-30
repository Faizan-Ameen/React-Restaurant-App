import React from 'react'
import Footer from './Footer';

const About = () => {
    return (
        <section className="about_section">
            <div className="heading">
                <h1><span>About</span> Us</h1>
            </div>
                <div className="about">
                    <div className="about_img">
                        <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" />
                    </div>
                    <div className="about_cap">
                        <h1>What Makes Our Foos Special</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero totam sequi, eum aliquam a amet <br />reprehenderit nemo culpa molestiae quam fugit. Laborum delectus quisquam qui sunt illo reprehenderit quae molestias.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero totam sequi, eum aliquam a amet <br />reprehenderit nemo culpa molestiae quam fugit. Laborum delectus quisquam qui sunt illo reprehenderit quae molestias.</p>
                        <button>Learn More</button>
                    </div>
            </div>
            <Footer />
        </section>
    )
}
export default About;