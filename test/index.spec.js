require('../build/object_tool')
var expect = require('chai').expect

var a = {}
var b = []
expect(a.isArray()).to.be.equal(false)
expect(b.isArray()).to.be.equal(true)

var c = {}
var d = []
var e = [1, 2]
expect(c.arrayLength()).to.be.equal(-1)
expect(d.arrayLength()).to.be.equal(0)
expect(e.arrayLength()).to.be.equal(2)

var f = []
var g = {}
var h = {a: 1}
expect(f.objectLength()).to.be.equal(-1)
expect(g.objectLength()).to.be.equal(0)
expect(h.objectLength()).to.be.equal(1)

var i = {
  a: {
    b: {
      c: 1
    }
  }
}
expect(i.getter('a.b.c')).to.be.equal(1)