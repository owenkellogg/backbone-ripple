## Backbone Ripple

A set of Backbone.Models that sync with the Ripple-REST
backend api server.

Ripple REST is documented here: http://dev.ripple.com/ripple-rest.html

### Installation

    npm install --save backbone-ripple

### Usage

    var BackboneRipple = require("backbone-ripple");

    // Models
    BackboneRipple.Payment
    BackboneRipple.Account
    BackboneRipple.TrustLine
    BackboneRipple.Notification

    // Collections

    BackboneRipple.Payments
    BackboneRipple.TrustLines
    
