Polymer("color-picker", {
  color:"#ff0000",
  colorChanged:function(oldC,newC)
  {
    console.log("color changed", this.color, oldC, newC);
  }
  //api
  //change handlers
});


