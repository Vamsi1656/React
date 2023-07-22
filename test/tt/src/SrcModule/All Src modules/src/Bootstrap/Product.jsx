import React from "react";
class Product extends React.Component{
          p_Name="Guitar"
          p_Price=7000
          p_Color=["Red","Blue"]
          p_img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJ_h12u0vB99sCSI_wWq7Uar2yst1Qs0oQg&usqp=CAU'
    render(){

        return(

            <div>
                <h3>Product Component</h3>
                  <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="card"></div>
                            <div className="cardheader">
                                <img src={this.p_img} alt="" />
                            </div>
                            <div className="cardbody">
                                <h3>Name:{this.p_Name}</h3>
                                <h3>Price:{this.p_Price}</h3>
                                <h3>Color:{this.p_Color[0]}</h3>
                            </div>
                        </div>
                    </div>
                  </div>

            </div>
        )
    }
}
export default Product