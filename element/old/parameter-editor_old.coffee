_componentToHex:(c)->
      hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex

    _rgbaToHex:(r, g, b, a)->
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b) + componentToHex(a) 
    
    _hexToRgba:(hex)->
      # Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, (m, r, g, b, a)-> 
          return (r + r + g + g + b + b + a + a );
      )
      result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(hex);
      return {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
          a: if result[4]? then parseInt(result[4], 16) else 1
        }
