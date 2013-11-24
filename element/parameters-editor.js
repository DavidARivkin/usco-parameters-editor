Polymer("parameters-editor", {
  params: null,
  _fields : null,
  optionsHash : null,
  colorTest:"#ffffff",
  created:function()
  {
    function entries(object) {
    return {
      toDOM: function(value) {
        console.log("object",object, "value",value);
        var bla = [];
        for (prop in value)
        {
          bla.push({name:prop, data:value[prop] } )
        }
        console.log("bla",bla);
        return bla;
      }
      };
    }
    PolymerExpressions.filters.entries = entries;
  },
  //api
  generateOptionsHash:function()
  {
  
  },
  //change handlers
  paramsChanged__:function(oldValue)
  {
      var fieldsData = {};
      for(var i = 0; i<this.params.fieldsets.length;i++)
      {
        var fields = this.params.fields;
        var fieldSet = this.params.fieldsets[i];
        fieldSet.fieldValues = {};
        
        fieldsData[fieldSet.name] = "";
      }
      this._fields = fieldsData;
  }
});
