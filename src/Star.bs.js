// Generated by BUCKLESCRIPT VERSION 3.0.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var ReasonApollo = require("reason-apollo/src/ReasonApollo.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var component = ReasonReact.statelessComponent("Star");

var Graphql_error = Caml_exceptions.create("Star-ReactTemplate.AddStar.Graphql_error");

var query = "mutation addStar($starrableId: ID!)  {\naddStar(input: {starrableId: $starrableId})  {\nstarrable  {\n__typename\nid  \n}\n}\n}";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match) {
    var value$1 = match[0]["addStar"];
    var match$1 = Js_json.decodeNull(value$1);
    var tmp;
    if (match$1) {
      tmp = /* None */0;
    } else {
      var match$2 = Js_json.decodeObject(value$1);
      var tmp$1;
      if (match$2) {
        var value$2 = match$2[0]["starrable"];
        var match$3 = Js_json.decodeObject(value$2);
        var tmp$2;
        if (match$3) {
          var value$3 = match$3[0]["id"];
          var match$4 = Js_json.decodeString(value$3);
          var tmp$3;
          if (match$4) {
            tmp$3 = match$4[0];
          } else {
            throw Graphql_error;
          }
          tmp$2 = {
            id: tmp$3
          };
        } else {
          throw Graphql_error;
        }
        tmp$1 = {
          starrable: tmp$2
        };
      } else {
        throw Graphql_error;
      }
      tmp = /* Some */[tmp$1];
    }
    return {
            addStar: tmp
          };
  } else {
    throw Graphql_error;
  }
}

function json_of_optional(encoder, value) {
  if (value) {
    return Curry._1(encoder, value[0]);
  } else {
    return null;
  }
}

function json_of_array(encoder, value) {
  return value.map(Curry.__1(encoder));
}

function json_of_ID(value) {
  return value;
}

function make(starrableId, _) {
  return {
          query: query,
          variables: Js_dict.fromList(/* :: */[
                /* tuple */[
                  "starrableId",
                  starrableId
                ],
                /* [] */0
              ]),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var starrableId = variables.starrableId;
  return {
          query: query,
          variables: Js_dict.fromList(/* :: */[
                /* tuple */[
                  "starrableId",
                  starrableId
                ],
                /* [] */0
              ]),
          parse: parse
        };
}

function ret_type() {
  return /* module */[];
}

var MT_Ret = /* module */[];

var AddStar = /* module */[
  /* Graphql_error */Graphql_error,
  /* query */query,
  /* parse */parse,
  /* json_of_optional */json_of_optional,
  /* json_of_array */json_of_array,
  /* json_of_ID */json_of_ID,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

var AddStarMutation = ReasonApollo.CreateMutation([
      query,
      parse
    ]);

var Graphql_error$1 = Caml_exceptions.create("Star-ReactTemplate.RemoveStar.Graphql_error");

var query$1 = "mutation removeStar($starrableId: ID!)  {\nremoveStar(input: {starrableId: $starrableId})  {\nstarrable  {\n__typename\nid  \n}\n}\n}";

function parse$1(value) {
  var match = Js_json.decodeObject(value);
  if (match) {
    var value$1 = match[0]["removeStar"];
    var match$1 = Js_json.decodeNull(value$1);
    var tmp;
    if (match$1) {
      tmp = /* None */0;
    } else {
      var match$2 = Js_json.decodeObject(value$1);
      var tmp$1;
      if (match$2) {
        var value$2 = match$2[0]["starrable"];
        var match$3 = Js_json.decodeObject(value$2);
        var tmp$2;
        if (match$3) {
          var value$3 = match$3[0]["id"];
          var match$4 = Js_json.decodeString(value$3);
          var tmp$3;
          if (match$4) {
            tmp$3 = match$4[0];
          } else {
            throw Graphql_error$1;
          }
          tmp$2 = {
            id: tmp$3
          };
        } else {
          throw Graphql_error$1;
        }
        tmp$1 = {
          starrable: tmp$2
        };
      } else {
        throw Graphql_error$1;
      }
      tmp = /* Some */[tmp$1];
    }
    return {
            removeStar: tmp
          };
  } else {
    throw Graphql_error$1;
  }
}

function json_of_optional$1(encoder, value) {
  if (value) {
    return Curry._1(encoder, value[0]);
  } else {
    return null;
  }
}

function json_of_array$1(encoder, value) {
  return value.map(Curry.__1(encoder));
}

function json_of_ID$1(value) {
  return value;
}

function make$1(starrableId, _) {
  return {
          query: query$1,
          variables: Js_dict.fromList(/* :: */[
                /* tuple */[
                  "starrableId",
                  starrableId
                ],
                /* [] */0
              ]),
          parse: parse$1
        };
}

function makeWithVariables$1(variables) {
  var starrableId = variables.starrableId;
  return {
          query: query$1,
          variables: Js_dict.fromList(/* :: */[
                /* tuple */[
                  "starrableId",
                  starrableId
                ],
                /* [] */0
              ]),
          parse: parse$1
        };
}

function ret_type$1() {
  return /* module */[];
}

var MT_Ret$1 = /* module */[];

var RemoveStar = /* module */[
  /* Graphql_error */Graphql_error$1,
  /* query */query$1,
  /* parse */parse$1,
  /* json_of_optional */json_of_optional$1,
  /* json_of_array */json_of_array$1,
  /* json_of_ID */json_of_ID$1,
  /* make */make$1,
  /* makeWithVariables */makeWithVariables$1,
  /* ret_type */ret_type$1,
  /* MT_Ret */MT_Ret$1
];

var RemoveStarMutation = ReasonApollo.CreateMutation([
      query$1,
      parse$1
    ]);

function make$2(viewerHasStarred, id, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return ReasonReact.element(/* None */0, /* None */0, Curry._4(AddStarMutation[/* make */4], /* None */0, /* None */0, /* None */0, (function (addMutation, _) {
                                var newStar = make(id, /* () */0);
                                return React.createElement("button", {
                                            onClick: (function () {
                                                Curry._3(addMutation, /* Some */[newStar.variables], /* None */0, /* () */0);
                                                return /* () */0;
                                              })
                                          }, viewerHasStarred ? "★" : "☆");
                              })));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.component = component;
exports.AddStar = AddStar;
exports.AddStarMutation = AddStarMutation;
exports.RemoveStar = RemoveStar;
exports.RemoveStarMutation = RemoveStarMutation;
exports.make = make$2;
/* component Not a pure module */