import logo from "./images/fliplogo.png";
export function Footer(){
    return(
        <div class="row bg-secondary text-light p-3">
            <div class="col-sm-12 col-md-6 col-lg-3">
                <h1>Visit us on</h1>
                <ol>
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                    <li><a href="https://whatsapp.com">Whatsapp</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                </ol>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <h1>Reviews</h1>
                <ol>
                <li><a href="https://blog.com">Blog1</a></li>
                    <li><a href="https://blog.com">Blog 2</a></li>
                    <li><a href="https://blog.com">Blog 3</a></li>
                    <li><a href="https://blog.com">Blog 4</a></li>
                </ol>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <h1>Topics</h1>
                <p>Subtopic</p>
                <p>Subtopic</p>
                <p>Subtopic</p>
                <p>Subtopic</p>
                <p>Subtopic</p>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3">
                <a href="https://flipkart.com">
                <img height={200} src={logo} alt=""></img>
                </a>
            </div>
        </div>
        
    )
}