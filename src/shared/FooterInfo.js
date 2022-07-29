import React from "react";
function FooterInfo(){
    return(
        <section class=" sixth-section">
        <h1 class="text-center text-center">THANKS FOR VISITING US</h1>
        <hr/>
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-xs-12">
                    <h3>Contact Information</h3>
                    <p class="lead fi">
                        Sporting, Alexandria<br/>
                    01210357949<br/>
                     01208539887<br/>
                     <a href="#">john@gmail.com</a>
                     <br/>
                     <a href="#">mark@gmail.com</a>
                     <br />
                     <a href="#">olivia@gmail.com</a>
                     
                    </p>
                </div>
                <div class="col-md-4 col-xs-12">
                    <h3 class="pre">Sign In</h3>
                   
                    <form>
                       <div class="form-group">
                         <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Name" />
                       </div>
                       <div class="form-group">
                         <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Email" />
                       </div>
                       <button type="button" class="btn btn-primary">SIGN IN</button>
                 </form>
                 </div>
                 <div class="col-md-4 col-xs-12">
                    <h3 class="aft">Support Us</h3>
                    <p class="lead thi">We are working hard on several exciting projects that will allow us to provide our service to more people in more places and to treat an increasing range of conditions. We are passionate about online healthcare and are committed to helping our patients live healthier lives. </p>
              </div>
         </div>
         </div>
    </section>
    )
}
export default FooterInfo;