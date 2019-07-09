# object_plus

# Usage
```
npm install @sausage_team/object_plus
or
yarn add @sausage_team/object_plus
```

# Configuration

### isArray()

```
const a = {}
a.isArray() //false
const b = []
b.isArray() //true
```

### arrayLength()
```
const a = {}
a.arrayLength() // -1
const b = []
b.arrayLength() // 0
const c = [1]
b.arrayLength() // 1
```

### objectLength()
```
const a = []
a.objectLength() //-1
const b = {}
b.objectLength() //0
const c = {a: 1}
b.objectLength() //1
```

### getter()
```
const a = {
    b: {
        c: 1
    }
}
a.getter('b.c') // 1
```