Polymer("parameters-editor", {
  params: null,
  _fields : null,
  observe: {
    'params["fields"][0].value': 'subPathChanged',
    'params': 'subPathChanged'
  },

  created:function()
  {
    
  },
  __test:function()
  {
    //{{ (fieldset.fields.indexOf(param.name) != -1)
  },
  subPathChanged:function(bla, bli)
  {
    console.log("su path changed", bla, bli);
  },
  paramsChanged:function(oldValue)
  {
      console.log("params changed", this.params);
  },
  attributeChanged: function(attrName, oldVal, newVal) {
    //var newVal = this.getAttribute(attrName);
    console.log(attrName, 'old: ' + oldVal, 'new:', newVal);
  },
  paramsChanged__:function(oldValue)
  {
      this._fields = {};
      for(var i = 0; i<this.params.fieldsets.length;i++)
      {
        
      }
  }

});
