console.log("core");

List = function() {
  this._id = 0;
  this._name = 0;
  this._tags = [];
  this._items = [];
  this._html = "";

  this._setup = function() {

  }

  this._buildHtml = function() {
    
  }

  this._buildHtml();

  this._setup();
}

List.prototype.addItem = function() {

}

List.prototype.getHtml = function() {
  return this._html;
}
