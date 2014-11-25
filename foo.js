#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path');


workshopper({
    name        : 'foo'
  , title       : 'FOO OR DIE'
  , exerciseDir : path.join(__dirname, 'exercises')
  , appDir      : __dirname
});
