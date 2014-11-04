var arithmeticOpsJson = '[{"instruction":"ADD","oprands":"A,Rn","description":"Add register to Accumulator","oscillatorPeriod":12,"sizeInByte":1},{"instruction":"ADD","oprands":"A,direct","description":"Add direct byte to Accumulator","oscillatorPeriod":12,"sizeInByte":2},{"instruction":"ADD","oprands":"A,@Ri","description":"Add indirect RAM to Accumulator","oscillatorPeriod":12,"sizeInByte":1},{"instruction":"ADD","oprands":"A,#data","description":"Add immediate data to Accumulator","oscillatorPeriod":12,"sizeInByte":2},{"instruction":"A DDC","oprands":"A,Rn","description":"Add register to Accumulator with Carry","oscillatorPeriod":12,"sizeInByte":1},{"instruction":"A DDC","oprands":"A,direct","description":"Add direct byte to Accumulator with Carry","oscillatorPeriod":12,"sizeInByte":2},{"instruction":"A DDC","oprands":"A,@Ri","description":"Add indirect RAM to Accumulator with Carry","oscillatorPeriod":12,"sizeInByte":1},{"instruction":"A DDC","oprands":"A,#data","description":"Add immediate data to Acc with Carry","oscillatorPeriod":12,"sizeInByte":2},{"instruction":"SUBB","oprands":"A,Rn","description":"Subtract Register from Acc with borrow","oscillatorPeriod":12,"sizeInByte":1},{"instruction":"SUBB","oprands":"A,direct","description":"Subtract direct byte from Acc with borrow","oscillatorPeriod":12,"sizeInByte":2},{"instruction":"SUBB","oprands":"A,@Ri","description":"Subtract indirect RAM from ACC with borrow","oscillatorPeriod":12,"sizeInByte":1},{"instruction":"SUBB","oprands":"A,#data","description":"Subtract immediate data from Acc with borrow","oscillatorPeriod":12,"sizeInByte":2},{"instruction":"INC","oprands":"A","description":"Increment Accumulator","oscillatorPeriod":12,"sizeInByte":1},{"instruction":"INC","oprands":"Rn","description":"Increment register","oscillatorPeriod":12,"sizeInByte":1},{"instruction":"INC","oprands":"direct","description":"Increment direct byte","oscillatorPeriod":12,"sizeInByte":2},{"instruction":"INC","oprands":"@Ri","description":"Increment direct RAM","oscillatorPeriod":12,"sizeInByte":1},{"instruction":"DEC","oprands":"A","description":"Decrement Accumulator","oscillatorPeriod":12,"sizeInByte":1},{"instruction":"DEC","oprands":"Rn","description":"Decrement Register","oscillatorPeriod":12,"sizeInByte":1},{"instruction":"DEC","oprands":"direct","description":"Decrement direct byte","oscillatorPeriod":12,"sizeInByte":2},{"instruction":"DEC","oprands":"@Ri","description":"Decrement indirect RAM","oscillatorPeriod":12,"sizeInByte":1},{"instruction":"INC","oprands":"DPTR","description":"Increment Data Pointer","oscillatorPeriod":24,"sizeInByte":1},{"instruction":"MUL","oprands":"AB","description":"Multiply A \u0026 B","oscillatorPeriod":48,"sizeInByte":1},{"instruction":"DIV","oprands":"AB","description":"Divide A by B","oscillatorPeriod":48,"sizeInByte":1},{"instruction":"DA","oprands":"A","description":"Decimal Adjust Accumulator","oscillatorPeriod":12,"sizeInByte":1}]'

var arithmeticOpsArray = JSON.parse( arithmeticOpsJson );

// Define lunr template
var index = lunr( function() {
    this.field('inst')
    this.ref('id')
});

arithmeticOpsArray.forEach( function( obj, i ) {
    
    index.add( {
        id: i,
        inst: obj.instruction
    });
});

console.log( index );
console.log( JSON.stringify( index ) );

var searchResult = index.search('DI');
console.log( searchResult );