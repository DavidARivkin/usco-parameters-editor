Polymer("color-picker", {
  color: "#ffffff",
  created:function()
  {
  },
  colorChanged:function(oldColor, newColor)
  {
    console.log("color changed",this.color,oldColor,newColor)
  }
  //api
  //change handlers
});
